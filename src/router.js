import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['./views/Home.vue'], resolve)
const Login = resolve => require(['./views/Login.vue'], resolve)
const Person = resolve => require(['./views/Person.vue'], resolve)
const Activity = resolve => require(['./views/Activity.vue'], resolve)
const ActivityDetail = resolve => require(['./views/ActivityDetail.vue'], resolve)
Vue.use(Router)

const routers = {
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/activity_detail/:pid',
      component: ActivityDetail
    },
    {
      path: '/activity',
      component: Activity
    }
  ]
};
const router = new Router(routers);
export default router;
