<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
        <!-- Encabezado de la página -->
        <div style="margin-bottom: 20px;">
          <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Editar Usuarios</h1>
          <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Complete el formulario para editar un usuario existente.</p>
        </div>
        
        <!-- Card del formulario -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Detalles</h2>
          </div>
          
          <div style="padding: 20px;">
            <!-- Primera fila: ID -->
            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">ID</label>
              <p style="color: #fff;">01</p>
            </div>
            
            <!-- Segunda fila: Nombre y Correo -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <!-- Nombre -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Nombre</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 11C13.3012 11 15.1667 9.13452 15.1667 6.83333C15.1667 4.53215 13.3012 2.66667 11 2.66667C8.69881 2.66667 6.83333 4.53215 6.83333 6.83333C6.83333 9.13452 8.69881 11 11 11Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.3742 19.3333C18.3742 15.9308 15.0692 13.1667 11.0001 13.1667C6.93094 13.1667 3.62598 15.9308 3.62598 19.3333" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    value="Carlos Mendez"
                    placeholder="Nombre del usuario"
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
              
              <!-- Correo -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Correo</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M15.5833 19.25H6.41667C4.125 19.25 2.75 18.3333 2.75 15.5833V6.41667C2.75 3.66667 4.125 2.75 6.41667 2.75H15.5833C17.875 2.75 19.25 3.66667 19.25 6.41667V15.5833C19.25 18.3333 17.875 19.25 15.5833 19.25Z" stroke="#8B8B8B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.5833 8.25L12.7158 10.5417C11.77 11.2933 10.2208 11.2933 9.27501 10.5417L6.41667 8.25" stroke="#8B8B8B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <input 
                    type="email" 
                    value="correo@ejemplo.com"
                    placeholder="correo@ejemplo.com"
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Contraseña</label>
              <div style="position: relative;">
                <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5.5 9.16667V7.33333C5.5 4.29834 6.41667 1.83334 11 1.83334C15.5833 1.83334 16.5 4.29834 16.5 7.33334V9.16667" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 16.9583C12.2887 16.9583 13.3333 15.9137 13.3333 14.625C13.3333 13.3363 12.2887 12.2917 11 12.2917C9.71134 12.2917 8.66667 13.3363 8.66667 14.625C8.66667 15.9137 9.71134 16.9583 11 16.9583Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.5833 20.1667H6.41667C2.75 20.1667 1.83334 19.25 1.83334 15.5833V13.75C1.83334 10.0833 2.75 9.16667 6.41667 9.16667H15.5833C19.25 9.16667 20.1667 10.0833 20.1667 13.75V15.5833C20.1667 19.25 19.25 20.1667 15.5833 20.1667Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <input 
                  type="password" 
                  value="*********"
                  placeholder="Ingrese la contraseña"
                  style="width: 100%; max-width: 50%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                />
              </div>
            </div>
            
            <!-- Tercera fila: Admin -->
            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Admin</label>
              <div style="display: flex; gap: 20px;">
                <!-- Radio button "Sí" -->
                <label @click="setAdmin(true)" style="display: flex; align-items: center; cursor: pointer;">
                  <div 
                    :style="{
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      border: isAdmin ? '2px solid #d6f277' : '2px solid #888888', 
                      marginRight: '8px', 
                      position: 'relative', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      backgroundColor: isAdmin ? '#d6f277' : 'transparent'
                    }"
                  >
                    <div v-if="isAdmin" style="width: 10px; height: 10px; border-radius: 50%; background-color: #222222;"></div>
                  </div>
                  <span style="color: white; font-size: 14px;">Sí</span>
                </label>
                
                <!-- Radio button "No" -->
                <label @click="setAdmin(false)" style="display: flex; align-items: center; cursor: pointer;">
                  <div 
                    :style="{
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      border: !isAdmin ? '2px solid #d6f277' : '2px solid #888888', 
                      marginRight: '8px', 
                      position: 'relative', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      backgroundColor: !isAdmin ? '#d6f277' : 'transparent'
                    }"
                  >
                    <div v-if="!isAdmin" style="width: 10px; height: 10px; border-radius: 50%; background-color: #222222;"></div>
                  </div>
                  <span style="color: white; font-size: 14px; font-family: 'Poppins', sans-serif;">No</span>
                </label>
              </div>
            </div>
            
            <!-- Cuarta fila: Contraseña -->
            
            
            <!-- Botones de acción -->
            <div style="display: flex; justify-content: flex-end; gap: 15px;">
              <button onclick="window.location.href='/usuarios'" style="background-color: #2A2A2A; color: white; border: 1px solid #3B3B3B; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif;">
                Cancelar
              </button>
              <button style="background-color: #d6f277; color: #222222; border: none; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif; display: flex; align-items: center;">
                Confirmar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Estado para controlar si el usuario es admin o no
  const isAdmin = ref(true)
  
  // Función para cambiar el estado de admin
  const setAdmin = (value) => {
    isAdmin.value = value
  }
  </script>