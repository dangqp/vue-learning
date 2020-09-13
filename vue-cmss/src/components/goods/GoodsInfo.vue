<template>
<div class="goodsinf-container">
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
    >
        <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
    <!--商品录播图-->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <!--轮播图-->
                <swipe :lunbotoList="lubolist" :full="false"></swipe>
            </div>
        </div>
    </div>
    <!--商品购买-->

    <div class="mui-card">
        <div class="mui-card-header">手机 5G</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <p class="price">
                   市场价:<del>￥2399</del>&nbsp;&nbsp;销售价:<span class="now_price">￥2199</span>
               </p>
                <!--stockCnt 如果为调用一个服务，异步获取，页面加载时，还没拿到，就会是undefined-->
                <p>购买数量: <numberbox @getCnt="getSelectCount" :max="stockCnt"></numberbox></p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCart">加入购物车</mt-button>
                </p>
            </div>
        </div>
    </div>
    <!--商品参数-->
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>商品货号:0001</p>
                <p>库存情况:{{stockCnt}}</p>
                <p>上架时间：2020-09-11</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
            <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
    </div>
</div>
</template>

<script>
    /* eslint-disable semi */
    import swipe from '../suncom/Swipe.vue'
    import numberbox from './Goodsinfo_Numberbox.vue'
    export default {
        data(){
            return {
                id:this.$route.params.id,
                ballflag:false, //控制小球显示表示
                selectCnt:1,//数量默认为1
                stockCnt:60,
                lubolist:[
                    {id:1,url:'https://img14.360buyimg.com/n0/jfs/t1/31698/11/11865/218814/5cb68870Ebf26e1bd/dbe080c29fb0aeff.jpg'},
                    {id:2,url:'http://img14.360buyimg.com/n5/s54x54_jfs/t1/19337/33/12577/136511/5c98c9b3Ebc1747bb/3202e5ea16311ae9.jpg'},
                    {id:3,url:'https://img14.360buyimg.com/n0/jfs/t1/30093/23/7652/122592/5c98c9b4Ed7cec342/b8774146d845829e.jpg'},
                    {id:4,url:'https://img14.360buyimg.com/n0/jfs/t1/15275/12/12370/109142/5c98c9b5E82b13def/c382a88cb0118bff.jpg'}
                ]
            }
        },
        created(){
            this.dealList()
        },
        components:{
            swipe,
            numberbox
        },methods:{
            dealList(){
                let delist = [];
                this.lubolist.forEach(item=>{
                    delist.push(item.url)
                })
                this.lubolist = delist
            },
            addToShopCart(){
                this.ballflag=!this.ballflag;
                var goodsinfo={id:this.id,count:this.selectCnt,price:100,selected:true};
                //调用方法
                this.$store.commit('add2Car',goodsinfo)
            },
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth //必须加上，否则不生效
                //小球优化思路
                //1、小球动画 不准确，原因：小球位置最终位移的位置已经局限在某一分辨率下
                //2、测试，只要分辨率不一样，滚动条有一定距离，有问题
                //3、不能把小球位置写死，应该依据不同情况，动态计算小球位置
                //4、解决方法：先得到徽标横纵坐标及小球的横纵坐标，然后让x及y值求差，得到的差就是坐标要移动的距离
                //5、获取小球位置 domObject.getBoundingClientRect()
                //获取小球在页面位置 ref获取组件内部元素
                const ballposition = this.$refs.ball.getBoundingClientRect();
                const badegeposition=document.getElementById("mui-badge").getBoundingClientRect();
                const xDist = badegeposition.left - ballposition.left;
                const yDist = badegeposition.top - ballposition.top;
//                el.style.transform="translate(217px, 315px)"
                el.style.transform=`translate(${xDist}px, ${yDist}px)`
                //el.style.transition="all 1s ease"
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)"
                done()
            },
            afterEnter(el){
                this.ballflag=!this.ballflag
            },
            getSelectCount(count){
                //子传给父类时
                this.selectCnt=count;
                console.log(this.selectCnt)
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .goodsinf-container{
        background-color: #eeeeee;
        overflow: hidden;
        .now_price{
            font-weight: bold;
            color: red;
        }
        .mui-card-footer{
            //br 不生效，说明父类采用flex布局
            display: block;
            button{
                margin: 15px 0;
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top:390px;
            left: 143px;
            /*调试小球位置*/
            /*transform: translate(217px, 315px);*/
        }
    }
</style>
