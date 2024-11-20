// src/axios.js
import axios from 'axios';
export const axiosapi = axios.create({
  // baseURL: 'http://192.168.145.92/6val', // 외부 API의 기본 URL
  baseURL: 'http://localhost/6val',
  timeout: 10000, // 요청 타임아웃 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API_URL = 'http://localhost/6val';

