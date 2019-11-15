import Vue from 'vue';
import VueRouter from 'vue-router';

// 组件模块
import Home from 'home/index.vue';
import Detail from 'detail/index.vue';

const Comment = () => import('comment/index.vue');
const Collect = () => import('collect/index.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    meta: {
      keepAlive: true,
      isBack: false,
    },
  },
  {
    path: '/comment/:id',
    name: 'comment',
    component: Comment,
  },
  {
    path: '/collect',
    name: 'collect',
    component: Collect,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
