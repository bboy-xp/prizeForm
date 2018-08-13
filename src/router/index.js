import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/view/Form/Form';
import AdminLogin from '@/view/Admin/AdminLogin/AdminLogin';
import Links from '@/view/Admin/Links/Links';
import Order from '@/view/Admin/Order/Order';
import AddStaff from '@/view/Admin/AddStaff/AddStaff';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/admin/adminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admin/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/admin/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/admin/addStaff',
      name: 'AddStaff',
      component: AddStaff
    },

  ]
})
