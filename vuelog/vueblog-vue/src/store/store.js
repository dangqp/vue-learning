import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/**
 * 共享数据
 * @type {Vuex.Store}
 */
const store = new Vuex.Store({
    state: { /* 存放数据 */
        token:localStorage.getItem('token'),
        userInfo:JSON.parse(localStorage.getItem('userInfo') || "{}")

    },
    mutations: { /* 方法 修改数据 */
        SET_TOKEN:(state,token) => {
          state.token = token;
            localStorage.setItem('token',token)
        },
        SET_USERINFO:(state,userInfo) => {
            state.userInfo = userInfo;
            localStorage.setItem('userInfo',JSON.stringify(userInfo))
        },
        REMOVE_INFO:(state) => {
            state.userInfo = {};
            state.token = '';
            localStorage.setItem('userInfo','')
            localStorage.setItem('token','')
        }
    },getters:{
        getToken(state){
           return state.token
        },
        GET_USERINFO:(state)=>{
            return state.userInfo
        }
    },actions:{}
})

export default store