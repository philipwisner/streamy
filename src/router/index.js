import Vue from 'vue';
import VueRouter from 'vue-router';
import Library from '../views/Library.vue';
import SelectedSong from "../pages/LibraryChildPage.vue";
import Artists from "../views/Artists.vue";
import SelectedArtist from "../pages/ArtistsChildPage.vue";
import Categories from "../views/Categories.vue";
import SelectedCategory from "../pages/CategoriesChildPage.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/library",
    name: "library",
    component: Library
  },
  {
    path: "/library",
    name: "library",
    component: Library
  },
  {
    path: "/library/:id",
    component: SelectedSong
  },
  {
    path: "/artists",
    name: "artists",
    component: Artists
  },
  {
    path: "/artists/:id",
    component: SelectedArtist
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories
  },
  {
    path: "/categories/:id",
    component: SelectedCategory
  }
];

const router = new VueRouter({
  routes
})


export default router
