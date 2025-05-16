<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
        <!-- Encabezado de la página -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Movimientos</h1>
            <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Gestiona todos tus movimientos en un solo lugar.</p>
          </div>
          
          <div style="display: flex; gap: 10px;">
            <button onclick="window.location.href='/movimientos/registrar-entrada'"  style="background-color: #56B94F; color: white; border: none; border-radius: 10px; padding: 8px 15px; font-size: 15px; font-weight: 500; display: flex; align-items: center; cursor: pointer; font-family: 'Poppins', sans-serif;">
              <span style="margin-right: 8px; display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z" stroke="white" stroke-width="2"/>
                <path d="M10 13.3333V6.66666M10 6.66666L12.5 9.16666M10 6.66666L7.5 9.16666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              Registrar Entrada
            </button>
            
            <button onclick="window.location.href='/movimientos/registrar-salida'" style="background-color: #C14444; color: white; border: none; border-radius: 10px; padding: 8px 15px; font-size: 15px; font-weight: 500; display: flex; align-items: center; cursor: pointer; font-family: 'Poppins', sans-serif;">
              <span style="margin-right: 8px; display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px;">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z" stroke="white" stroke-width="2"/>
                <path d="M10 6.66666V13.3333M10 13.3333L12.5 10.8333M10 13.3333L7.5 10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              Registrar Salida
            </button>
          </div>
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
                  placeholder="Buscar por producto, usuario o motivo" 
                  style="width: 100%; padding: 8px 8px 8px 35px; font-family: 'Poppins', sans-serif; background-color: #2A2A2A; border: 1px solid #d6f277; border-radius: 10px; color: white; font-size: 14px; outline: none;"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Card de Listado de movimientos -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 15px; border-bottom: 1px solid #3B3B3B; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Listado de movimientos</h2>
            
            <div style="display: flex; align-items: center; gap: 10px; ">
              <span style="color: #888888; font-size: 14px;">
              </span>
              <span style="color: white; font-size: 14px;"></span>
            </div>
          </div>
          
          <div style="overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
              <!-- Encabezado de la tabla -->
              <thead>
                <tr style="background-color: #2A2A2A; text-align: left;">
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 15%;">Fecha</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 20%;">Producto</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 10%;">Cantidad</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 10%;">Tipo</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 20%;">Usuario</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 20%;">Motivo</th>
                  <th style="padding: 12px 15px; font-size: 14px; font-weight: 500; color: white; border-bottom: 1px solid #3B3B3B; width: 10%; text-align: center;">Acciones</th>
                </tr>
              </thead>
              
              <!-- Cuerpo de la tabla -->
              <tbody>
                <!-- Fila 1 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 10:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Mueble Personalizado
                    <p style="color: #8b8b8b;">01</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">5</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #4CAF50; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Entrada</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Carlos Méndez</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Compra a proveedor</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                
                <!-- Fila 2 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 08:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Cama Personalizada
                    <p style="color: #8b8b8b;">02</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #C14444; color: white; padding: 4px 15px; border-radius: 4px; font-size: 12px;">Salida</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">María López</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Venta</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                
                <!-- Fila 3 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 10:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Mueble Personalizado
                    <p style="color: #8b8b8b;">01</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">5</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #4CAF50; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Entrada</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Carlos Méndez</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Compra a proveedor</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                
                <!-- Fila 2 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 08:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Cama Personalizada
                    <p style="color: #8b8b8b;">02</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #C14444; color: white; padding: 4px 15px; border-radius: 4px; font-size: 12px;">Salida</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">María López</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Venta</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                
                <!-- Fila 5 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 10:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Mueble Personalizado
                    <p style="color: #8b8b8b;">01</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">5</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #4CAF50; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Entrada</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Carlos Méndez</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Compra a proveedor</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                
                <!-- Fila 2 -->
                <tr style="background-color: #333333; border-bottom: 1px solid #3B3B3B;">
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15/04/2025 08:30</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    Cama Personalizada
                    <p style="color: #8b8b8b;">02</p>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">15</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">
                    <span style="background-color: #C14444; color: white; padding: 4px 15px; border-radius: 4px; font-size: 12px;">Salida</span>
                  </td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">María López</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white;">Venta</td>
                  <td style="padding: 12px 15px; font-size: 14px; color: white; text-align: center;">
                    <button style="background: #2A2A2A; border: 1px solid #3B3B3B; width: 40px; height: 40px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0 auto;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="white" stroke-width="1.5"/>
                      <path d="M7.3335 12.8333H14.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M6.4165 9.625H15.5832" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M8.25 16.0417H13.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M7.3335 3.20834C7.3335 2.44895 7.9491 1.83334 8.7085 1.83334H13.2918C14.0512 1.83334 14.6668 2.44895 14.6668 3.20834V4.12501C14.6668 4.8844 14.0512 5.50001 13.2918 5.50001H8.7085C7.9491 5.50001 7.3335 4.8844 7.3335 4.12501V3.20834Z" stroke="white" stroke-width="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Sin lógica compleja como solicitado
  </script>