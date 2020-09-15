import Vue from 'vue'
import momemt from 'moment'
//定义全局时间过滤器
Vue.filter('dateFormat',function (dateStr,patterm='YYYY-MM-DD HH:mm:ss') {
    return momemt(dateStr).format(patterm)
})