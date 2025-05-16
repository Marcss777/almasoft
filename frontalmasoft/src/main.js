import { createApp } from 'vue'; // Importa createApp
import App from './App.vue';    // Importa el componente raíz
import './tailwind.css';
import router from './router';  // Importa el enrutador si lo estás utilizando

// Crea la aplicación de Vue
const app = createApp(App);

// Usa el router (si aplica)
app.use(router);

// Monta la aplicación en el elemento con ID 'app' en index.html
app.mount('#app');
