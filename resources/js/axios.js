// src/axios.js
import axios from 'axios';
export const axiosapi = axios.create({
  baseURL: 'http://localhost/6val', // 외부 API의 기본 URL
  timeout: 10000, // 요청 타임아웃 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API_URL = 'http://localhost/6val';

