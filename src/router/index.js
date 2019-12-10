import Vue from 'vue'
import VueRouter from 'vue-router'
import Library from '../views/Library.vue'
import Artists from "../views/Artists.vue";
import Categories from "../views/Categories.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/library',
    name: "library",
    component: Library
  },
  {
    path: "/library",
    name: "library",
    component: Library
  },
    {
    path: '/artists',
    name: 'artists',
    component: Artists
  },
    {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
})


export default router
