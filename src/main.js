import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


// 引入规范CSS
import 'styles/reset.css';
// 解决高分辨率下的1px显示多像素
import 'styles/border.css';
// 解决点击延迟问题
import fastClick from 'fastclick';
// 引入阿里巴巴图标
import 'styles/iconfont.css';

fastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
