// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (user: any) => axios.post(API_URL, user);
export const updateUser = (id: number, user: any) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
