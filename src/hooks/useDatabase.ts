
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
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });
      
      if (error) throw error;
      return data.user;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
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

export const useAddReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (reservationData: Omit<Reservation, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('reservations')
        .insert([reservationData])
        .select()
        .single();
      
      if (error) throw error;
      
      // Обновляем статус стола
      await supabase
        .from('tables')
        .update({ status: 'reserved' })
        .eq('id', reservationData.table_id);
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
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
        status: table.status
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
