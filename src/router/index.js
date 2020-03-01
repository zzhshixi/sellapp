import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[{
      //商品二级页面
      path:'/goods',
      name:'Goods',
      component:() => import('../pages/Goods.vue'),
    },
    {
      path:'/appraise',
      name:'Appraise',
      component:() => import('../pages/Appraise.vue')
    },
    //商家二级页面
    {
      path:'/merchant',
      name:'Merchant',
      component:() => import('../pages/Merchant.vue')
    },
    
  ]
  },
  {
  path:'/goods/goods-details',
  name:'goods-details',
  component:() => import('../pages/Goodes-details.vue'),
  },
  

]

const router = new VueRouter({
  routes
})

export default router
