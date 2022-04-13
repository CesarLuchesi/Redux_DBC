import axios from 'axios';

export const apiAuth = axios.create({
  baseURL: 'https://my-application-teste.herokuapp.com',
})