<template>
    <div class="container">
      <div class="left-panel">
        <h1>Bienvenido a tu Sistema de Inventario</h1>
        <p>Gestiona, organiza y mantén un control eficiente de tus productos con nuestra plataforma.</p>
        <button class="btn">Comenzar Ahora</button>
      </div>
      <div class="right-panel">
        <img src="/inventory-landing-illustration.png" alt="Landing Illustration" class="illustration" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
    background-color: #2E2E2E;
    color: #FFFFFF;
  }
  
  .left-panel {
    flex: 1;
    background-color: #D6F277;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .left-panel h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color: #2E2E2E;
    margin-bottom: 1rem;
  }
  
  .left-panel p {
    font-size: 1.2rem;
    text-align: center;
    color: #4A4A4A;
    margin-bottom: 1.5rem;
  }
  
  .left-panel .btn {
    padding: 0.75rem 1.5rem;
    background-color: #2E2E2E;
    color: #D6F277;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .left-panel .btn:hover {
    background-color: #242424;
  }
  
  .right-panel {
    flex: 1;
    background-color: #2E2E2E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .right-panel .illustration {
    max-width: 90%;
    height: auto;
  }
  </style>
  