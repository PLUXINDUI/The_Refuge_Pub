
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User, Reservation, Table } from '../models/types';

// Это временная имплементация. В реальном проекте здесь были бы запросы к Supabase или другой базе данных
const localStorageDatabase = {
  users: () => {
    const users = localStorage.getItem('refuge_users');
    return users ? JSON.parse(users) : [];
  },
  addUser: (user: Omit<User, 'id'>) => {
    const users = localStorageDatabase.users();
    const newUser = {
      ...user,
      id: `user_${Date.now()}`,
    };
    localStorage.setItem('refuge_users', JSON.stringify([...users, newUser]));
    return Promise.resolve(newUser);
  },
  reservations: () => {
    const reservations = localStorage.getItem('refuge_reservations');
    return reservations ? JSON.parse(reservations) : [];
  },
  addReservation: (reservation: Omit<Reservation, 'id'>) => {
    const reservations = localStorageDatabase.reservations();
    const newReservation = {
      ...reservation,
      id: `reservation_${Date.now()}`,
    };
    localStorage.setItem('refuge_reservations', JSON.stringify([...reservations, newReservation]));
    
    // Обновляем статус стола
    localStorageDatabase.updateTable(reservation.table_id, { status: 'reserved' });
    
    return Promise.resolve(newReservation);
  },
  updateReservation: (id: string, data: Partial<Reservation>) => {
    const reservations = localStorageDatabase.reservations();
    const updatedReservations = reservations.map((res: Reservation) => 
      res.id === id ? { ...res, ...data } : res
    );
    localStorage.setItem('refuge_reservations', JSON.stringify(updatedReservations));
    return Promise.resolve(updatedReservations.find((res: Reservation) => res.id === id));
  },
  tables: () => {
    const tables = localStorage.getItem('refuge_tables');
    if (tables) return JSON.parse(tables);
    
    // Начальные данные для столов
    const initialTables = [
      { id: 1, name: 'Стол 1', capacity: 2, position: { x: 10, y: 10 }, status: 'available' },
      { id: 2, name: 'Стол 2', capacity: 2, position: { x: 60, y: 10 }, status: 'available' },
      { id: 3, name: 'Стол 3', capacity: 4, position: { x: 10, y: 50 }, status: 'available' },
      { id: 4, name: 'Стол 4', capacity: 4, position: { x: 60, y: 50 }, status: 'available' },
      { id: 5, name: 'Стол 5', capacity: 6, position: { x: 30, y: 80 }, status: 'available' },
      { id: 6, name: 'Стол 6', capacity: 8, position: { x: 80, y: 80 }, status: 'available' },
    ];
    localStorage.setItem('refuge_tables', JSON.stringify(initialTables));
    return initialTables;
  },
  updateTable: (id: number, data: Partial<Table>) => {
    const tables = localStorageDatabase.tables();
    const updatedTables = tables.map((table: Table) => 
      table.id === id ? { ...table, ...data } : table
    );
    localStorage.setItem('refuge_tables', JSON.stringify(updatedTables));
    return Promise.resolve(updatedTables.find((table: Table) => table.id === id));
  }
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => localStorageDatabase.users(),
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (userData: Omit<User, 'id'>) => localStorageDatabase.addUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export const useReservations = (userId?: string) => {
  return useQuery({
    queryKey: ['reservations', userId],
    queryFn: () => {
      const reservations = localStorageDatabase.reservations();
      return userId 
        ? reservations.filter((res: Reservation) => res.user_id === userId)
        : reservations;
    },
  });
};

export const useAddReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (reservationData: Omit<Reservation, 'id'>) => localStorageDatabase.addReservation(reservationData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
  });
};

export const useUpdateReservation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string, data: Partial<Reservation> }) => 
      localStorageDatabase.updateReservation(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};

export const useTables = () => {
  return useQuery({
    queryKey: ['tables'],
    queryFn: () => localStorageDatabase.tables(),
  });
};

export const useUpdateTable = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<Table> }) => 
      localStorageDatabase.updateTable(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
  });
};
