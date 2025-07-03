import axios from 'axios';

const API = axios.create({
  baseURL: 'https://68662ffa89803950dbb1917e.mockapi.io/Reservations'
});

export const fetchReservations = () => API.get('/');
export const fetchReservation = (id: string) => API.get(`/${id}`);
export const createReservation = (data: any) => API.post('/', data);
export const updateReservation = (id: string, data: any) => API.put(`/${id}`, data);
export const deleteReservation = (id: string) => API.delete(`/${id}`);