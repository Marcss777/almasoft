<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
      
        <!-- Encabezado de la página -->
        <div style="margin-bottom: 20px;">
          <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Registrar Entrada de Inventario</h1>
          <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Complete el formulario para registrar una nueva entrada de productos.</p>
        </div>
        
        <!-- Card del formulario -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Formulario de entrada</h2>
          </div>
           <div style="padding: 20px;">
            </div>

          <form @submit.prevent="registrarMovimiento">
          
            <!-- Primera fila: Producto, Cantidad, Motivo -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">

            
              <!-- Producto -->
              <div>
                <label style="display: block; font-size: 14px; color: white; margin-bottom: 8px;">Producto</label>
                <div style="position: relative;">
                  <select  id="producto_id" v-model="movimiento.producto_id" style="width: 100%; padding: 10px 35px 10px 15px; appearance: none; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; cursor: pointer; font-family: 'Poppins', sans-serif;">
                    <option v-for="producto in productos" :key="producto.id" :value="producto.id">
                     {{ producto.nombre }}
                    </option>
                   
                  </select>
                  <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #fff; pointer-events: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.875 5.625L7.5 9.375L3.125 5.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
              
              <!-- Cantidad -->
              <div>
                <label style="display: block; font-size: 14px; color: white; margin-bottom: 8px;">Cantidad</label>
                <div style="position: relative;">
                  <input 
                   type="number" id="cantidad" v-model="movimiento.cantidad" 
                    style="width: 100%; padding: 10px 15px; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; font-family: 'Poppins', sans-serif; box-sizing: border-box;"
                  />
                </div>
              </div>
              
              <!-- Motivo -->
              <div>
                <label style="display: block; font-size: 14px; color: white; margin-bottom: 8px;">Motivo</label>
                <div style="position: relative;">
                 
                  <select id="motivo" v-model="movimiento.motivo" style="width: 100%; padding: 10px 35px 10px 15px; appearance: none; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; cursor: pointer; font-family: 'Poppins', sans-serif;">
                    <option value="" disabled selected>Seleccionar motivo</option>
                    <option>Compra a proveedor</option>
                    <option>Devolución de cliente</option>
                    <option>Ajuste de inventario</option>
                    <option>Transferencia a otra ubicacion</option>
                    <option>Otro</option>
                  </select>
                  <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #fff; pointer-events: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M11.875 5.625L7.5 9.375L3.125 5.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Segunda fila: Fecha y hora, Notas adicionales -->
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-bottom: 30px;">
              <!-- Fecha y hora -->
              <div>
                <label style="display: block; font-size: 14px; color: white; margin-bottom: 8px;">Fecha y hora</label>
                
                <div style="display: flex; gap: 10px;">
                    
                    <!-- Input de fecha -->
                    <div  style="position: relative; flex: 1;">
                    <input 
                         type="date" id="fecha" v-model="movimiento.fecha" 
                        style="appearance: none; width: 100%; padding: 10px 35px 10px 15px; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; font-family: 'Poppins', sans-serif;"
                    />
                    <span  style="position: absolute; right: 10px; top: 55%; transform: translateY(-50%); color: #fff; pointer-events: none;">
                        <!-- Icono calendario SVG -->
                        <!-- (SVG ya incluido correctamente) -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6 1.5V3.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 1.5V3.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.625 6.8175H15.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.771 10.275H11.7778" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.771 12.525H11.7778" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.99661 10.275H9.00335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.99661 12.525H9.00335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.22073 10.275H6.22747" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.22073 12.525H6.22747" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    </div>
                    
                    <!-- Input de hora -->
                    <div style="position: relative; width: 100px;">
                    <input 
                        type="time" 
                        value="18:30"
                        style="appearance: none; width: 100%; padding: 10px 35px 10px 15px; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; font-family: 'Poppins', sans-serif;"
                    />
                    <span style="position: absolute; right: 10px; top: 55%; transform: translateY(-50%); color: #fff; pointer-events: none;">
                        <!-- Icono reloj SVG -->
                        <!-- (SVG ya incluido correctamente) -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.7825 11.385L9.4575 9.9975C9.0525 9.75 8.7225 9.18 8.7225 8.7075V5.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    </div>

                </div>
                </div>
              
              <!-- Notas adicionales -->
              <div>
                <label style="display: block; font-size: 14px; color: white; margin-bottom: 8px;">Notas adicionales</label>
                
                <textarea  id="notas" v-model="movimiento.notas" rows="2" cols="5"
                  style="width: 100%; height: 43px; padding: 10px 15px; background-color: #2A2A2A; border: 1px solid #3B3B3B; border-radius: 10px; color: white; font-size: 14px; outline: none; resize: vertical; max-height: 200px; min-height: 43px; font-family: 'Poppins', sans-serif;"
                  placeholder="Escribe notas adicionales aquí..."
                ></textarea>
              </div>
            </div>
            
            <!-- Botones de acción -->
            <div style="display: flex; justify-content: flex-end; gap: 15px;">
              <button onclick="window.location.href='/movimientos'" style="background-color: #2A2A2A; color: white; border: 1px solid #3B3B3B; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif;">
                Cancelar
              </button>
              <button type="submit" style="background-color: #4CAF50; color: white; border: none; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif; display: flex; align-items: center;">
                Registrar Entrada
              </button>
            </div>
          </form>
          </div>
       
      </div>
    </div>
  </template>
  

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const productos = ref([]);
const movimiento = ref({
  producto_id: '',
  cantidad: 0,
  fecha: '',
  motivo: '', // <-- FALTA ESTE
  notas: '',
  rol: 'Entrada' // <-- en minúscula, porque el backend valida así
});


// Obtener productos del stock al cargar
onMounted(async () => {
  try {
    
    const response = await axios.get('http://localhost:4000/producto/:id');
    productos.value = response.data;
    console.log('Productos obtenidos:', productos.value); // Log para ver los productos obtenidos
  } catch (error) {
    console.error('Error al obtener productos del stock:', error);
  }
});

const registrarMovimiento = async () => {
  try {
    console.log("Datos que se están enviando:", movimiento.value);  // Verifica los datos
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post('http://localhost:4000/api/movimientos', movimiento.value);
    alert('Movimiento registrado correctamente');
    router.push('/movimientos');
  } catch (error) {
    console.error('Error al registrar el movimiento:', error);
    if (error.response) {
      console.error('Detalles del error:', error.response.data);
    }
    alert('Hubo un error al registrar el movimiento');
  }
};


</script>



  <style>
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  display: none;
}

</style>
