import Vue from 'vue'

//1
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import member from './components/Member.vue'
import shopcart from './components/ShopCart.vue'
import search from './components/Search.vue'
import newslist from './components/news/NewList.vue'
import newsInfo from './components/news/NesInfo.vue'
import photolist from './components/photos/PhotoList.vue'
import goodslist from './components/goods/GoodsList.vue'
import goodsinfo from './components/goods/GoodsInfo.vue'
//2
// Vue.use(VueRouter)
//3
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcart',component:shopcart},
        {path:'/search',component:search},
        {path:'/home/newlist',component:newslist},
        {path:'/home/newsInfo/:id',component:newsInfo},
        {path:'/home/photolist',component:photolist},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsinfo/:id',component:goodsinfo,name:'goosinfo'}
    ],
    linkActiveClass:'mui-active' //覆盖默认的高亮 router-link-active
})

export default router