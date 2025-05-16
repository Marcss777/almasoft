<template>
  <div style="background-color: #2E2E2E; min-height: 100vh; width: 100%;">
    <!-- Contenido principal -->
    <div style="padding: 16px 30px;">
      <!-- Encabezado -->
      <div style="margin-bottom: 20px;">
        <h1 style="font-size: 34px; font-weight: 600; color: white; margin: 0;">Editar Productos</h1>
        <p style="font-size: 18px; color: #ffffff; margin: 2px 0 0 0; font-weight: 300;">
          Complete el formulario para editar un producto existente.
        </p>
      </div>

      <!-- Card -->
      <div style="background-color: #333333; border-radius: 10px; border: 1px solid #3B3B3B;">
        <div style="padding: 13px 0 5px 22px; border-bottom: 1px solid #3B3B3B;">
          <h2 style="font-size: 16px; color: white; margin: 0; font-weight: 600;">Detalles</h2>
        </div>

        <div style="padding: 20px;">
      

          <!-- Nombre y Categoría -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Nombre</label>
              <input v-model="producto.nombre" placeholder="Nombre" required
                style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px;" />
            </div>
            <div>
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Categoría</label>
              <input v-model="producto.categoria" placeholder="Categoría" required
                style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px;" />
            </div>
          </div>

          <!-- Stock y Precio -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
            <div>
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Stock</label>
              <input v-model="producto.stock" placeholder="Stock" required type="number"
                style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px;" />
            </div>
            <div>
              <label style="display: block; font-size: 14px; color: white; font-weight: 500; margin-bottom: 8px;">Precio</label>
              <input v-model="producto.precio" placeholder="Precio" required type="number"
                style="width: 100%; padding: 10px 10px 10px 35px; background-color: #444444; border: 1px solid #3B3B3B; border-radius: 11px; color: white; font-size: 15px;" />
            </div>
          </div>

          <!-- Botón Actualizar -->
          <button @click="actualizarProducto"
            style="background-color: #8dda91; color: black; font-weight: bold; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;">
            Actualizar Producto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    const id = this.$route.params.id;
    fetch(`http://localhost:4000/producto/porid/${id}`)
      .then(res => res.json())
      .then(data => this.producto = data)
      .catch(err => console.error('Error al obtener producto:', err));
  },
  methods: {
    actualizarProducto() {
      const id = this.$route.params.id;
      fetch(`http://localhost:4000/producto/actualizar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.producto)
      })
        .then(res => res.json())
        .then(() => {
          alert('Producto actualizado');
          this.$router.push('/productos');
        })
        .catch(err => console.error('Error al actualizar:', err));
    }
  }
};
</script>
