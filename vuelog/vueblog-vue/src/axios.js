import axios from 'axios'
import Element from 'element-ui'
import router from './router/router.js'
import store from "./store/store.js";

//配置前缀
axios.defaults.baseURL = 'http://127.0.0.1:8081'

//前置拦截
axios.interceptors.request.use(config => {
    return config;
})
//后置拦截
axios.interceptors.response.use(response => {

        let data = response.data;
        console.log(data)
        if (data.code === "200") {
            return response
        } else {
            Element.Message.error(data.msg, {duration: 2000})
            //已经出错，跳转
            return Promise.reject(response.data.msg)
        }
    }, error => {
        console.log(error)
        if (error.response.data) {
            error.message = error.response.data.msg
        }
        if (error.response.status === 401) {
            store.commit('REMOVE_INFO');
            router.push('/login')
            error.message = '请重新登录';
        }

        Element.Message.error(error.message, {duration: 2000})
        return Promise.reject(error)
    }
)