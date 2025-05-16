<template>
    <div>
      <NavbarComponent />
        <main>
          <router-view />
        </main>
    </div>
  </template>
  
  <script>
  import NavbarComponent from '../components/NavbarComponent.vue'

    export default {
      components: {
        NavbarComponent
      }
    }
  </script>
  
  <style scoped>
  </style>
  