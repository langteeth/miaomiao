import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movieRouter'
import cinemaRouter from './cinemaRouter'
import mineRouter from './mineRouter'


Vue.use(VueRouter)



export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
      movieRouter,
      cinemaRouter,
      mineRouter,
      {
          path: '/*',
          redirect:'/movie'
      }

  ]


})
