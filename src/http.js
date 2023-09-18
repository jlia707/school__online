import axios from 'axios';

const http = axios.create({
  baseURL: 'http://194.67.118.153/',
});

http.interceptors.request.use(() => {
  // логика для проверки токина и вставки в запрос
});

export default http;
