import axios from 'axios';

//create an instance of axios with the base URL for the Reservations API
// This API is a mock API
const API = axios.create({
  baseURL: 'https://68662ffa89803950dbb1917e.mockapi.io/Reservations'
});

//functions to interact with the Reservations API
export const fetchReservations = () => API.get('/');
export const fetchReservation = (id: string) => API.get(`/${id}`);
export const createReservation = (data: any) => API.post('/', data);
export const updateReservation = (id: string, data: any) => API.put(`/${id}`, data);
export const deleteReservation = (id: string) => API.delete(`/${id}`);