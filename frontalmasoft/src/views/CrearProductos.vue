
<template>
    <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
      <!-- Contenido principal (sin navbar como solicitado) -->
      <div style="padding: 16px 30px;">
        <!-- Encabezado de la página -->
        <div style="margin-bottom: 20px;">
          <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Crear Productos</h1>
          <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">Complete el formulario para crear un nuevo producto.</p>
        </div>
        
        <!-- Card del formulario -->
        <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
          <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
            <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Detalles</h2>
          </div>
          
          <form @submit.prevent="crearProducto" style="padding: 20px;">
          
            
            <!-- Segunda fila: Nombre y Categoría -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <!-- Nombre -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Nombre</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M10.0082 19.7509H12.4255C14.4672 19.7509 15.4882 19.7509 16.3404 19.2625C17.1927 18.7742 17.7337 17.8791 18.8159 16.0889L19.44 15.0564C20.3504 13.5503 20.8056 12.7973 20.8056 11.9593C20.8056 11.1213 20.3504 10.3682 19.44 8.86209L18.8159 7.82969C17.7337 6.03946 17.1927 5.14435 16.3404 4.65598C15.4882 4.1676 14.4672 4.1676 12.4255 4.1676H10.0082C6.45577 4.1676 4.67952 4.1676 3.5759 5.30867C2.47229 6.44973 2.47229 8.28624 2.47229 11.9593C2.47229 15.6323 2.47229 17.4688 3.5759 18.6099C4.67952 19.7509 6.45576 19.7509 10.0082 19.7509Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M7.05566 7.82983V16.0843" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </span>
                  <input 
                   input v-model="producto.nombre" placeholder="Nombre" required 
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
              
              <!-- Categoría -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Categoría</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2796 3.10018L16.1129 4.06227C18.0853 5.09731 19.0715 5.61483 19.6191 6.5448C20.1667 7.47477 20.1667 8.63199 20.1667 10.9464V11.0537C20.1667 13.3681 20.1667 14.5254 19.6191 15.4553C19.0715 16.3853 18.0853 16.9027 16.1129 17.9378L14.2796 18.8999C12.6703 19.7444 11.8656 20.1667 11 20.1667C10.1344 20.1667 9.32978 19.7444 7.72047 18.8999L5.88714 17.9378C3.91478 16.9027 2.9286 16.3853 2.38099 15.4553C1.83337 14.5254 1.83337 13.3681 1.83337 11.0537V10.9464C1.83337 8.63199 1.83337 7.47477 2.38099 6.5448C2.9286 5.61483 3.91478 5.09731 5.88714 4.06227L7.72047 3.10018C9.32978 2.25565 10.1344 1.83337 11 1.83337C11.8656 1.83337 12.6703 2.25565 14.2796 3.10018Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M19.25 6.875L15.5833 8.70833M15.5833 8.70833C15.5833 8.70833 15.304 8.84801 15.125 8.9375C13.5141 9.74297 11 11 11 11M15.5833 8.70833V11.9167M15.5833 8.70833L6.875 4.125M11 11L2.75 6.875M11 11V19.7083" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </span>
                  <input v-model="producto.categoria" placeholder="Categoría" required
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
            </div>
            
            <!-- Tercera fila: Stock y Precio -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
              <!-- Stock -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Stock</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M14.6667 3.66846C16.6604 3.67956 17.7402 3.76797 18.4445 4.47232C19.25 5.27778 19.25 6.57414 19.25 9.16685V14.6669C19.25 17.2596 19.25 18.556 18.4445 19.3614C17.6391 20.1669 16.3427 20.1669 13.75 20.1669H8.25C5.65727 20.1669 4.36091 20.1669 3.55546 19.3614C2.75 18.556 2.75 17.2596 2.75 14.6669V9.16685C2.75 6.57414 2.75 5.27778 3.55546 4.47232C4.25981 3.76797 5.33956 3.67956 7.33333 3.66846" stroke="#8B8B8B" stroke-width="1.5"/>
                        <path d="M7.33337 12.8334H14.6667" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M6.41663 9.625H15.5833" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M8.25 16.0416H13.75" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M7.33337 3.20837C7.33337 2.44898 7.94898 1.83337 8.70837 1.83337H13.2917C14.0511 1.83337 14.6667 2.44898 14.6667 3.20837V4.12504C14.6667 4.88443 14.0511 5.50004 13.2917 5.50004H8.70837C7.94898 5.50004 7.33337 4.88443 7.33337 4.12504V3.20837Z" stroke="#8B8B8B" stroke-width="1.5"/>
                        </svg>
                  </span>
                  <input v-model.number="producto.stock" placeholder="Stock" required
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
              
              <!-- Precio -->
              <div>
                <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Precio</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 55%; transform: translateY(-50%); color: #888888;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4.33442 14.7922C2.91769 13.3755 2.20931 12.6671 1.94574 11.748C1.68215 10.829 1.90741 9.85283 2.35793 7.90056L2.61774 6.77473C2.99677 5.13229 3.18629 4.31105 3.74864 3.7487C4.31099 3.18635 5.13222 2.99683 6.77467 2.6178L7.9005 2.35799C9.85277 1.90747 10.8289 1.68221 11.748 1.9458C12.667 2.20937 13.3754 2.91775 14.7921 4.33448L16.4693 6.01165C18.9342 8.47656 20.1666 9.70901 20.1666 11.2405C20.1666 12.772 18.9342 14.0044 16.4693 16.4693C14.0044 18.9343 12.7719 20.1667 11.2404 20.1667C9.70895 20.1667 8.4765 18.9343 6.01159 16.4693L4.33442 14.7922Z" stroke="#8B8B8B" stroke-width="1.5"/>
                    <path d="M14.1069 14.1067C14.6438 13.5697 14.7163 12.7717 14.2689 12.3242C13.8214 11.8768 13.0234 11.9493 12.4864 12.4862C11.9495 13.0232 11.1514 13.0958 10.7039 12.6483C10.2564 12.2008 10.329 11.4027 10.866 10.8659M14.1069 14.1067L14.431 14.4308M14.1069 14.1067C13.7393 14.4743 13.2494 14.6243 12.8333 14.5388M10.866 10.8659L10.5418 10.5417M10.866 10.8659C11.1696 10.5622 11.5567 10.4071 11.9167 10.4105" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M9.18633 9.4354C9.90229 8.71944 9.90229 7.55864 9.18633 6.84268C8.47037 6.12671 7.30956 6.12671 6.5936 6.84268C5.87764 7.55864 5.87764 8.71944 6.5936 9.4354C7.30956 10.1514 8.47037 10.1514 9.18633 9.4354Z" stroke="#8B8B8B" stroke-width="1.5"/>
                    </svg>
                  </span>
                  <input v-model.number="producto.precio" placeholder="Precio" required 
                    style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px; outline: none; font-family: 'Poppins', sans-serif;"
                  />
                </div>
              </div>
            </div>
            
            <!-- Botones de acción -->
            <div style="display: flex; justify-content: flex-end; gap: 15px;">
              <button onclick="window.location.href='/productos'" style="background-color: #2A2A2A; color: white; border: 1px solid #3B3B3B; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif;">
                Cancelar
              </button>
              <button style="background-color: #d6f277; color: #222222; border: none; border-radius: 10px; padding: 10px 20px; font-size: 15px; font-weight: 400; cursor: pointer; font-family: 'Poppins', sans-serif; display: flex; align-items: center;">
                Confirmar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      producto: {
        nombre: '',
        categoria: '',
        stock: null,
        precio: null
      }
    };
  },
  methods: {
    async crearProducto() {
      await axios.post('http://localhost:4000/producto', this.producto);
      alert('Producto creado');
      this.$router.push('/productos');
    }
  }
};
</script>
