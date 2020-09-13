<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
            <!--<router-link class="mui-tab-item-lib mui-active" to="/home">-->
            <router-link class="mui-tab-item-lib " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/shopcart">
                <span class="mui-icon mui-icon-extra  mui-icon-extra-cart">
                    <span class="mui-badge" id="mui-badge">{{$store.getters.getAllCnt}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default{
    props:['cnt'],

}
</script>
<style>
    .mui-bar-tab .mui-tab-item-lib.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-lib {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-lib .mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>