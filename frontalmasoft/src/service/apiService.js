// src/services/ApiService.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/usuarios'; 

export default {
  async getData() {
    return axios.post(API_URL);
  }
}

// src/services/ApiService.js
