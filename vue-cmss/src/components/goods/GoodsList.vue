<template>
    <div class="goods-list">
        <!--老方式-->
        <!--<router-link class="goods-item" :to="'/home/goodsinfo'+1" tag="div">
            <img src="//img10.360buyimg.com/babel/s160x160_jfs/t1/128784/17/9413/96141/5f32361dE4701ca60/b58ab2d79b859f39.jpg"
                 alt="">
            <h1 class="title">小米10 至尊纪念版</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>-->

        <div class="goods-item" @click="goDetail(1)" >
            <img src="//img10.360buyimg.com/babel/s160x160_jfs/t1/128784/17/9413/96141/5f32361dE4701ca60/b58ab2d79b859f39.jpg"
                 alt="">
            <h1 class="title">小米10 至尊纪念版</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <!--<img src="//img11.360buyimg.com/cms/jfs/t1/99710/26/1538/76543/5dc006eaE25719e6b/0fd323d246a3e5db.png!q95.webp"-->
            <img src="//img13.360buyimg.com/n7/jfs/t1/113329/6/17229/127508/5f56f747E3b3bb2ee/7ccdc98e4b425ff9.jpg"

                 alt="">
            <h1 class="title">【佳能专卖店】佳能EOS 5D4 Mark IV专业级高级单反摄影像照相机 单机身/拆单机</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="//img10.360buyimg.com/babel/s160x160_jfs/t1/128784/17/9413/96141/5f32361dE4701ca60/b58ab2d79b859f39.jpg"
                 alt="">
            <h1 class="title">小米10 至尊纪念版</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        /*组件加载时就加载*/
        data(){
            return {}
        },
        created() {

        },
        methods: {
            //使用方法进行页面跳转
            goDetail(id){
                console.log(this)
                //最简单
                /*this.$router.push("/home/goodsinfo/"+id)*/
                //专递参数
//                this.$router.push({path:'/home/goodsinfo/'+id})
                //传递命名路由
//                this.$router.push({name:'goosinfo',params:{id:id}})
                this.$router.push({name:"goosinfo",params:{id}})
            }
        }
    }
</script>

<!--<style type="text/scss" scoped>-->
<style lang="scss" type="text/scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-top: 5px;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
        }
        .title {
            font-size: 25px;
        }
        .info {
            background-color: #efeff4;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .new {
                    color: red;
                    font-weight:bold;
                    font-size: 16px;

                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
            }
        }

    }
</style>
<!--<style  scoped>-->
    <!--.goods-list {-->
        <!--display: flex;-->
        <!--flex-wrap: wrap;-->
        <!--padding: 10px;-->
        <!--justify-content: space-between;-->
    <!--}-->

    <!--.goods-list .goods-item {-->
        <!--width: 49%;-->
        <!--border: 1px solid #ccc;-->
        <!--box-shadow: 0 0 8px #ccc;-->
        <!--margin-top: 5px;-->
        <!--padding: 2px;-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--justify-content: space-between;-->
        <!--min-height: 293px;-->
    <!--}-->

    <!--.goods-item .title {-->
        <!--font-size: 25px;-->
    <!--}-->

    <!--.info {-->
        <!--background-color: #efeff4;-->

    <!--}-->

    <!--.info p{-->
        <!--margin: 0;-->
        <!--padding: 5px;-->
    <!--}-->

    <!--.info .price {-->
        <!--/*display: flex;*/-->
        <!--/*justify-content: space-between;*/-->
    <!--}-->
    <!--.info .price .new {-->
        <!--color: red;-->
        <!--font-weight:bold;-->
        <!--font-size: 16px;-->

    <!--}-->

    <!--.info .price .old {-->
        <!--text-decoration: line-through;-->
        <!--font-size: 12px;-->
        <!--margin-left: 10px;-->
    <!--}-->

    <!--.info .sell {-->
        <!--display: flex;-->
        <!--justify-content: space-between;-->
    <!--}-->
<!--</style>-->
