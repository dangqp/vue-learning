<template>
<div>
    <!--轮播图-->
    <!--<mt-swipe>-->
        <!--<mt-swipe-item v-for="item in lunbotoList" :key="item">-->
            <!--<img :src="item">-->
        <!--</mt-swipe-item>-->
    <!--</mt-swipe>-->
    <swipe :lunbotoList="lunbotoList" :isFull="true"></swipe>
    <!--九宫格-到6宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newlist">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photolist">
                <span class="mui-icon mui-icon-image">
                    <span class="mui-badge">9</span>
                </span>
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist">
                <span class="mui-icon mui-icon-extra  mui-icon-extra-cart"></span>
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-chatboxes-filled"></span>
                <div class="mui-media-body">意见反馈</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <!--可以放置自定义图片-->
                <span class="mui-icon mui-icon-videocam"></span>
                <div class="mui-media-body">视频专区</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div>
            </a>
        </li>
    </ul>
</div>
</template>

<script>
    import swipe from './suncom/Swipe.vue'
export default {
    data() {
        return {
            lunbotoList: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599235478238&di=27d2b02264ad7dbdb07ecedb91d4363b&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3774364957%2C3569687609%26fm%3D193%26app%3D53%26size%3Dw828%26n%3D0%26g%3D0n%26f%3Djpeg%3Fsec%3D1601817397%26t%3D4fd1011a92f9183c9a981b0b06df5e8e',
                'https://t8.baidu.com/it/u=817611282,1169741527&fm=193&app=53&size=w414&n=0&g=0n&f=jpeg?sec=1601817397&t=845883c60bd25fdebe8f372671084f37',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599235847074&di=326b6279900973013bf227cf3238de5b&imgtype=0&src=http%3A%2F%2Fp1.gexing.com%2FG1%2FM00%2F67%2F5F%2FrBACJlUp12bBN2VXAAIi-4AZf14052.jpg'
            ]
        };
    },
    methods: {
        getPigList() {
            //            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
            //                console.log(result.body)
            //            });
        }
    },
    created() {
        //        this.getPigList()
    },
    components:{
        swipe
    }
}
</script>

<style lang="scss" scoped>
/*.mint-swipe {*/
    /*height: 200px;*/
/*}*/

/*.mint-swipe-item {*/

    /*& :nth-child(1) {*/
        /*background-color: coral;*/
    /*}*/

    /*& :nth-child(2) {*/
        /*background-color: red;*/
    /*}*/

    /*& :nth-child(3) {*/
        /*background-color: blue;*/
    /*}*/

    /*img {*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/

/*}*/

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    background-color: white;
    border: 0;
    width: 326px
}
</style>
