// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入vux
import { CellBox,  Group, XButton, Icon  } from 'vux'

//引入全局组件
import VDistpicker from 'v-distpicker'
Vue.component('cell-box', CellBox);
Vue.component('group', Group);
Vue.component('x-button', XButton);
Vue.component('icon', Icon);
Vue.component('v-distpicker', VDistpicker);

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
