import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Cart from '@/components/Cart'
import Success from '@/components/Success'
import Referrer from '@/components/Referrer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/referrer',
      name: 'Referrer',
      component: Referrer
    },
    {
      path: '/code/:code',
      beforeEnter: (to, from, next) => {
        let code = to.params['code']
        next({name: 'Cart', query: {code: code}})
      }
    }
  ]
})
