
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Reservation {
  id: string;
  user_id: string;
  table_id: number;
  date: string;
  time: string;
  party_size: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  note?: string;
  created_at: string;
}

export interface Table {
  id: number;
  name: string;
  capacity: number;
  position: {
    x: number;
    y: number;
  };
  status: 'available' | 'reserved' | 'occupied';
}
