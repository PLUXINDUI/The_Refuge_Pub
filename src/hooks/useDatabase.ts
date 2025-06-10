
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { User, Reservation, Table } from '../models/types';

// Функции для работы с пользователями
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (userData: { email: string; password: string; name: string }) => {
      console.log('Начинаем регистрацию пользователя:', userData.email);
      
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
          },
        }
      });
      
      if (error) {
        console.error('Ошибка при регистрации:', error);
        throw error;
      }
      
      console.log('Пользователь успешно зарегистрирован:', data.user?.id);
      return data.user;
    },
    onSuccess: () => {
      console.log('Регистрация завершена успешно');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Ошибка в мутации регистрации:', error);
    }
  });
};

// Функции для работы с бронированиями
export const useReservations = (userId?: string) => {
  return useQuery({
    queryKey: ['reservations', userId],
    queryFn: async () => {
      let query = supabase
        .from('reservations')
        .select('*');
      
      if (userId) {
        query = query.eq('user_id', userId);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data;
    },
  });
};

// Новая функция для проверки доступности стола в определенное время и дату
export const useTableAvailability = (date?: string, time?: string) => {
  return useQuery({
    queryKey: ['table-availability', date, time],
    queryFn: async () => {
      if (!date || !time) return [];
      
      console.log('Проверяем доступность столов для:', date, time);
      
      // Парсим время и создаем временной интервал (1 час)
      const [hours, minutes] = time.split(':').map(Number);
      const startTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      const endTime = `${(hours + 1).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      
      console.log('Проверяем интервал с', startTime, 'до', endTime);
      
      // Получаем все бронирования на эту дату
      const { data: existingReservations, error } = await supabase
        .from('reservations')
        .select('table_id, time')
        .eq('date', date)
        .eq('status', 'confirmed');
      
      if (error) {
        console.error('Ошибка при получении бронирований:', error);
        throw error;
      }
      
      console.log('Существующие бронирования на', date, ':', existingReservations);
      
      // Проверяем пересечения по времени для каждого бронирования
      const unavailableTableIds = new Set();
      
      existingReservations?.forEach(reservation => {
        const [resHours, resMinutes] = reservation.time.split(':').map(Number);
        const resStartTime = resHours * 60 + resMinutes;
        const resEndTime = resStartTime + 60; // 1 час
        
        const reqStartTime = hours * 60 + minutes;
        const reqEndTime = reqStartTime + 60; // 1 час
        
        // Проверяем пересечение временных интервалов
        if (!(reqEndTime <= resStartTime || reqStartTime >= resEndTime)) {
          console.log(`Стол ${reservation.table_id} недоступен из-за пересечения времени`);
          unavailableTableIds.add(reservation.table_id);
        }
      });
      
      console.log('Недоступные столы:', Array.from(unavailableTableIds));
      return Array.from(unavailableTableIds);
    },
    enabled: Boolean(date && time),
  });
};

export const useAddReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (reservationData: Omit<Reservation, 'id' | 'created_at' | 'updated_at'>) => {
      console.log('Создаем бронирование:', reservationData);
      
      // Проверяем доступность стола перед созданием бронирования
      const [hours, minutes] = reservationData.time.split(':').map(Number);
      const startTime = hours * 60 + minutes;
      const endTime = startTime + 60;
      
      const { data: conflictingReservations, error: checkError } = await supabase
        .from('reservations')
        .select('*')
        .eq('table_id', reservationData.table_id)
        .eq('date', reservationData.date)
        .eq('status', 'confirmed');
      
      if (checkError) {
        console.error('Ошибка при проверке конфликтов:', checkError);
        throw checkError;
      }
      
      // Проверяем временные конфликты
      const hasTimeConflict = conflictingReservations?.some(existing => {
        const [existingHours, existingMinutes] = existing.time.split(':').map(Number);
        const existingStartTime = existingHours * 60 + existingMinutes;
        const existingEndTime = existingStartTime + 60;
        
        return !(endTime <= existingStartTime || startTime >= existingEndTime);
      });
      
      if (hasTimeConflict) {
        throw new Error('Этот стол уже забронирован на выбранное время');
      }
      
      const { data, error } = await supabase
        .from('reservations')
        .insert([reservationData])
        .select()
        .single();
      
      if (error) {
        console.error('Ошибка при создании бронирования:', error);
        throw error;
      }
      
      console.log('Бронирование создано:', data);
      return data;
    },
    onSuccess: () => {
      console.log('Бронирование успешно завершено');
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      queryClient.invalidateQueries({ queryKey: ['tables'] });
      queryClient.invalidateQueries({ queryKey: ['table-availability'] });
    },
    onError: (error) => {
      console.error('Ошибка в мутации бронирования:', error);
    }
  });
};

export const useUpdateReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string, data: Partial<Reservation> }) => {
      const { data: updatedData, error } = await supabase
        .from('reservations')
        .update(data)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return updatedData;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      queryClient.invalidateQueries({ queryKey: ['table-availability'] });
    },
  });
};

// Функции для работы со столами
export const useTables = () => {
  return useQuery({
    queryKey: ['tables'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tables')
        .select('*');
      
      if (error) throw error;
      
      // Преобразуем данные в нужный формат
      return data.map(table => ({
        id: table.id,
        name: table.name,
        capacity: table.capacity,
        position: { x: table.position_x, y: table.position_y },
        status: 'available' // Всегда показываем столы как доступные, проверка будет по времени
      }));
    },
  });
};

export const useUpdateTable = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: number, data: Partial<Table> }) => {
      const updateData: any = { ...data };
      
      // Преобразуем position обратно в position_x и position_y
      if (data.position) {
        updateData.position_x = data.position.x;
        updateData.position_y = data.position.y;
        delete updateData.position;
      }
      
      const { data: updatedData, error } = await supabase
        .from('tables')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return updatedData;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
  });
};

// Функции для аутентификации
export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });
};
