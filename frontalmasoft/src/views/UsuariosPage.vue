<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
        <!-- Encabezado de la página -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Usuarios</h1>
            <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Gestiona tus usuarios.</p>
          </div>
          
          <button onclick="window.location.href='/usuarios/crear-usuarios'" style="background-color: #d6f277; color: #222222; border: none; border-radius: 10px; padding: 8px 15px; font-size: 15px; font-weight: 600; display: flex; align-items: center; cursor: pointer; font-family: 'Poppins', sans-serif;">
            <span style="margin-right: 8px; display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M10.9999 20.1667C16.0625 20.1667 20.1666 16.0626 20.1666 11C20.1666 5.93739 16.0625 1.83334 10.9999 1.83334C5.93731 1.83334 1.83325 5.93739 1.83325 11C1.83325 16.0626 5.93731 20.1667 10.9999 20.1667Z" stroke="black" stroke-width="2"/>
              <path d="M13.75 11H11M11 11H8.25M11 11V8.25M11 11V13.75" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
            Nuevo Usuario
          </button>
        </div>
        
        <!-- Card de Filtros y búsqueda -->
        <div style="background-color: #333333; border-radius: 10px; margin-bottom: 30px; border: 1px solid #3B3B3B;">
          <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Filtros y Búsqueda</h2>
          </div>
          
          <div style="padding: 14px;">
            <div style="display: flex; gap: 10px; align-items: center;">
              <div style="flex-grow: 1; position: relative;">
                <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #fff;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M7.37304 14.1483C10.6658 14.1483 13.3351 11.479 13.3351 8.18621C13.3351 4.89343 10.6658 2.22411 7.37304 2.22411C4.08027 2.22411 1.41095 4.89343 1.41095 8.18621C1.41095 11.479 4.08027 14.1483 7.37304 14.1483Z" stroke="white" stroke-width="1.5"/>
                  <path d="M12.7075 13.5207L13.9627 14.7759" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Buscar por ID" 
                  style="width: 100%; padding: 8px 8px 8px 35px; font-family: 'Poppins', sans-serif; background-color: #2A2A2A; border: 1px solid #d6f277; border-radius: 10px; color: white; font-size: 14px; outline: none;"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Card de Listado de productos -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 15px; border-bottom: 1px solid #3B3B3B; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Listado de usuarios</h2>
            
            <div style="display: flex; align-items: center; gap: 10px; ">
              <span style="color: #888888; font-size: 14px;">
                <!-- Icono de ordenar -->
              </span>
              <span style="color: white; font-size: 14px;"></span>
            </div>
          </div>
          
          <div style="overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
              <!-- Encabezado de la tabla -->
              <thead>
                <tr style="background-color: #2A2A2A; text-align: left;">
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 50px;">ID</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 300px">Nombre</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 220px">Correo</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 150px;">Admin?</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 150px; text-align: center;">Acciones</th>
                </tr>
              </thead>
              
              <!-- Cuerpo de la tabla -->
              <tbody>
           <tr v-for="usuario in usuarios" :key="usuario.id" style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
  <td style="padding: 12px 15px; font-size: 14px; color: white;">{{ usuario.id }}</td>
  <td style="padding: 12px 15px; font-size: 14px; color: white;">{{ usuario.nombre_completo }}</td>
  <td style="padding: 12px 15px; font-size: 14px; color: white;">{{ usuario.correo }}</td>
  <td style="padding: 12px 15px; font-size: 14px; color: white;">{{ usuario.rol }}</td>


                  
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <div style="display: flex; gap: 15px;">
                      <!-- Botón de editar (solo icono) -->
                      <button onclick="window.location.href='/usuarios/editar-usuarios'" style="background: #2A2A2A; border: 1px solid #3B3B3B; cursor: pointer; width: 100px; height: 40px; display: flex; align-items: center; justify-content: center; padding: 0; border-radius: 8px;">
                        <span style="display: inline-flex; width: 20px; height: 20px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M22.8116 10.5V12C22.8116 16.714 22.8116 19.0711 21.3471 20.5355C19.8827 22 17.5256 22 12.8116 22C8.0976 22 5.74058 22 4.27612 20.5355C2.81165 19.0711 2.81165 16.714 2.81165 12C2.81165 7.28595 2.81165 4.92893 4.27612 3.46447C5.74058 2 8.0976 2 12.8116 2H14.3116" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M17.4636 3.45506L18.1125 2.80624C19.1875 1.73125 20.9304 1.73125 22.0054 2.80624C23.0803 3.88124 23.0803 5.62415 22.0054 6.69914L21.3565 7.34795M17.4636 3.45506C17.4636 3.45506 17.5447 4.83379 18.7613 6.05032C19.9778 7.26685 21.3565 7.34795 21.3565 7.34795M17.4636 3.45506L11.4988 9.41993C11.0948 9.82394 10.8928 10.0259 10.7191 10.2487C10.5141 10.5114 10.3384 10.7957 10.1951 11.0965C10.0736 11.3515 9.98322 11.6225 9.80254 12.1646L9.22407 13.9M21.3565 7.34795L15.3917 13.3128C14.9877 13.7168 14.7857 13.9188 14.5629 14.0926C14.3002 14.2975 14.0159 14.4732 13.7151 14.6166C13.4601 14.7381 13.1891 14.8284 12.647 15.0091L10.9116 15.5876M9.22407 13.9L8.84976 15.0229C8.76085 15.2897 8.83027 15.5837 9.02909 15.7826C9.22791 15.9814 9.522 16.0508 9.78874 15.9619L10.9116 15.5876M9.22407 13.9L10.9116 15.5876" stroke="white" stroke-width="1.5"/>
                          </svg>
                        </span>
                        <p style="font-size: 15px; color: #fff; font-family: 'Poppins', sans-serif; margin-left: 9px;">Editar</p>
                      </button>
                      
                      <!-- Botón de eliminar (solo icono) -->
                      <button @click="eliminar(usuario.id)" style="background: #2A2A2A; border: 1px solid #3B3B3B; cursor: pointer; width: 100px; height: 40px; display: flex; align-items: center; justify-content: center; padding: 0; border-radius: 8px;">
                        <span style="display: inline-flex; width: 20px; height: 20px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M9.17529 4C9.58712 2.83481 10.6984 2 12.0046 2C13.3108 2 14.4221 2.83481 14.8339 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M20.5045 6H3.50439" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M18.8376 8.5L18.3776 15.3991C18.2006 18.054 18.1121 19.3815 17.2471 20.1907C16.3821 21 15.0517 21 12.3909 21H11.6176C8.95675 21 7.62635 21 6.76134 20.1907C5.89634 19.3815 5.80784 18.054 5.63084 15.3991L5.1709 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M9.50439 11L10.0044 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M14.5044 11L14.0044 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                        </span>
                        <p style="font-size: 15px; color: #fff; font-family: 'Poppins', sans-serif; margin-left: 9px;">Eliminar</p>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      usuarios: []
    };
  },
  methods: {
    async cargar() {
      const res = await axios.get('http://localhost:4000/usuarios');  // URL actualizada a la de usuarios
      this.usuarios = res.data;
    },
    async eliminar(id) {
      await axios.delete(`http://localhost:4000/usuarios/eliminar/${id}`);  // URL para eliminar usuario
      this.cargar();  // Recargar la lista de usuarios después de eliminar
    }
  },
  mounted() {
    this.cargar();  // Cargar los usuarios al montar el componente
  }
};
</script>
