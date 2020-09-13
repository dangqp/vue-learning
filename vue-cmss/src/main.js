import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
//全局设置请求根路径
// Vue.$http.options.root=""
import momemt from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function (dateStr,patterm='YYYY-MM-DD HH:mm:ss') {
    return momemt(dateStr).format(patterm)
})

import Vuex from 'vuex'
Vue.use(Vuex)

//每次进入网站，调用main，先从本地加载，放在store里
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
    state: { /* 存放数据 */
        // car:[] //商品列表 {id:1,count:1,price:100,selected:true}
        car:car //商品列表 {id:1,count:1,price:100,selected:true}

    },
    mutations: { /* 方法 修改数据 */
        add2Car(state,goodsinfo){
            //1、已经存在购物车，数量更新
            //2、没有，直接放入
            var flag = false; //默认购物车没有对应商品
            state.car.some(items=>{
                if(items.id == goodsinfo.id){
                    items.count += parseInt(goodsinfo.count)
                    flag=true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            //更新car后，存储到本地
            localStorage.setItem('car',JSON.stringify(state.car))

        },
        updatGoodsInfo(state,goodsinfo){
            state.car.some(items=>{
                if(items.id == goodsinfo.id){
                    items.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        delStore(state,id){
            //依据id删除购物车中的数据
            // debugger
            state.car.some(items=>{
                if(items.id == id){
                    state.car.splice(id, 1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },updateGoodsSelect(state,info){
            state.car.some(items=>{
                if(items.id == info.id){
                    items.selected = info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },getters:{
        getAllCnt(state){
            var c = 0;
            state.car.forEach(items=>{
                c+=items.count
            })
            return c
        },
        //{id:cnt}
        getGoodsCnt(state){
            var obj = [];
            state.car.forEach(items=>{
                obj[items.id] = items.count
            })
            return obj
        },
        getGoodsSelected(state){
            var obj = [];
            state.car.forEach(items=>{
                obj[items.id] = items.selected
            })
            return obj
        },
        getGoodCntAmt(state){
            var obj = {count:0,amt:0};
            state.car.forEach(item=>{
                if (item.selected){
                    obj.count += item.count
                    obj.amt += item.count * item.price
                }
            })
            return obj
        }
    }
})

//按需导入mint 组件  如果要lazy加载生效，需要全量导入mint-ui
//import  {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
import MintUI from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
import app from './APP.vue'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
Vue.use(MintUI)
var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router,
    store
})