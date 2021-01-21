
import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../views/Customers.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
