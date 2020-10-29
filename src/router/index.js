import Vue from 'vue'
import VueRouter from 'vue-router'
// Home from '../views/Home.vue'
import About from '../components/about'
import Student from '../components/student'
import AddStudent from '../components/addStudent'
import AnotherContent from '../components/anotherContent'
import VuexClass from '../components/vuexClass'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is vi/sited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },

  {
    path: '/Student',
    name: 'Student',
    component: Student
  },

  {
    path: '/addstudent',
    name: 'addstudent',
    component: AddStudent
  },

  {
    path: '/anotherContent',
    name: 'anotherContent',
    component: AnotherContent
  },
  {
    path: '/vuexclass',
    name: '',
    component: VuexClass
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
