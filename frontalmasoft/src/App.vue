<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Aquí puedes aplicar estilos globales si lo deseas */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #2E2E2E;
  overflow-x: hidden;
}

  /* Para Chrome, Edge, Safari 
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para Firefox 
  input[type="number"] {
    -moz-appearance: textfield;
  }*/
</style>
