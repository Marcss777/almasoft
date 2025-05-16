<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
        <!-- Encabezado de la página -->
        <div style="margin-bottom: 20px;">
          <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Detalles de movimiento</h1>
          <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Información completa del movimiento de inventario.</p>
        </div>
        
        <!-- Card de detalles -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Detalles detallados</h2>
          </div>
          
          <div style="padding: 20px;">
            <!-- Grid de detalles -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <!-- Columna izquierda -->
              <div>
                <!-- Tipo de movimiento -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Tipo de movimiento</p>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #4CAF50; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; margin-right: 10px;">Entrada</span>
                  </div>
                </div>
                
                <!-- Fecha y hora -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Fecha y hora</p>
                  <p style="font-size: 16px; color: white; margin: 0; font-weight: 500;">15 de abril de 2025 a las 10:30</p>
                </div>
                
                <!-- Usuario responsable -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Usuario responsable</p>
                  <div style="display: flex; align-items: center;">
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px;  border-radius: 50%; margin-right: 10px; font-size: 12px; font-weight: 600;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="white" stroke-width="1.5"/>
                        <path d="M12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z" stroke="white" stroke-width="1.5"/>
                        </svg>
                    </span>
                    <p style="font-size: 16px; color: white; margin: 0; font-weight: 500;">Carlos Méndez</p>
                  </div>
                </div>
              </div>
              
              <!-- Columna derecha -->
              <div>
                <!-- Producto -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Producto</p>
                  <p style="font-size: 16px; color: white; margin: 0; font-weight: 500;">Mueble personalizado</p>
                </div>
                
                <!-- ID -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">ID</p>
                  <p style="font-size: 16px; color: white; margin: 0; font-weight: 500;">01</p>
                </div>
                
                <!-- Categoría -->
                <div style="margin-bottom: 20px;">
                  <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Categoría</p>
                  <p style="font-size: 16px; color: white; margin: 0; font-weight: 500;">Muebles hogar</p>
                </div>
              </div>
              
              <!-- Cantidad (ocupa todo el ancho) -->
              <div>
                <p style="font-size: 14px; color: #aaaaaa; margin: 0 0 5px 0;">Cantidad</p>
                <p style="font-size: 24px; color: white; margin: 0; font-weight: 600;">5</p>
              </div>
            </div>
            
            <!-- Botones de acción -->
            <div style="display: flex; justify-content: flex-end; gap: 15px; ">
              <button style="background-color: #2A2A2A; color: white; border: 1px solid #3B3B3B; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'Poppins', sans-serif;">
                Cancelar
              </button>
              <button style="background-color: #D6F277; color: #222222; border: none; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'Poppins', sans-serif; display: flex; align-items: center;">

                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>