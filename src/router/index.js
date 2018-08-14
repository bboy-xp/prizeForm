import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/view/Form/Form';
import Report from '@/view/Report/Report';
import Report2 from '@/view/Report2/Report2';
import AdminLogin from '@/view/Admin/AdminLogin/AdminLogin';
import Links from '@/view/Admin/Links/Links';
import Order from '@/view/Admin/Order/Order';
import AddStaff from '@/view/Admin/AddStaff/AddStaff';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/report2',
      name: 'Report2',
      component: Report2
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
