import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';

import MovimientosPage from '../views/MovimientosPage.vue';
import RegistrarEntradaPage from '../views/R-EntradaPage.vue';
import RegistrarSalidaPage from '../views/R-SalidaPage.vue';
import ProductosPage from '../views/ProductosPage.vue';
import UsuariosPage from '../views/UsuariosPage.vue';
import RegistroPage from '../views/RegistroPage.vue';
import LoginPage from '../views/LoginPage.vue';
import InicioPage from '../views/InicioPage.vue';

import CrearUsuarios from '@/views/CrearUsuarios.vue';
import EditarUsuarios from '@/views/EditarUsuarios.vue';

import CrearProductos from '@/views/CrearProductos.vue';
import EditarProductos from '@/views/EditarProductos.vue';

import DetallesMovimientosPage from '../views/D-Movimientos.vue';

const routes = [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: InicioPage},    
      ]
    },
    {
      path: '/registro',
      component: AuthLayout,
      children: [
        { path: '', component: RegistroPage },    
      ]
    },
    {
      path: '/entrar',
      component: AuthLayout,
      children: [
        { path: '', component: LoginPage },    
      ]
    },
    {
      path: '/usuarios',
      component: MainLayout,
      children: [
        { path: '', component: UsuariosPage },
        { path: 'crear-usuarios', component: CrearUsuarios },
        { path: 'editar-usuarios', component: EditarUsuarios }
            
      ]
    },
    {
      path: '/productos',
      component: MainLayout,
      children: [
        { path: '', component: ProductosPage },
        { path: 'crear-productos', component: CrearProductos },
        { path: 'editar-productos/:id', component: EditarProductos }   
         
      ]
    },
    {
      path: '/movimientos',
      component: MainLayout,
      children: [
        { path: '', component: MovimientosPage },
        { path: 'registrar-entrada', component: RegistrarEntradaPage },
        { path: 'registrar-salida', component: RegistrarSalidaPage },
        { path: 'detalles-movimientos', component: DetallesMovimientosPage}
      ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  