import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9091/api/resumeBuilder',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to each request
apiClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

export default apiClient;
