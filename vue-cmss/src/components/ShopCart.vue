<template>
    <div class="shopcart">
        <div class="good-list">
            <div class="mui-card">
                <div class="mui-card-content" v-for="(item,i) in cars">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                                   @change="selectChg(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img src="//img10.360buyimg.com/cms/s80x80_jfs/t1/94428/33/6843/129595/5df752ecE819fc2d2/164854c9f2f007a5.jpg">
                        <div class="info">
                            <h1>测试手机 5G 全网通</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numberbox :cnt="$store.getters.getGoodsCnt[item.id]" :goodsid="item.id"></numberbox>
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jesuan">
                        <div class="left">
                            <p>总计（不包含运费）</p>
                            <p>已勾选商品<span class="red">{{ $store.getters.getGoodCntAmt.count }}</span>件，总价￥<span
                                    class="red">{{ $store.getters.getGoodCntAmt.amt }}</span>元</p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numberbox from './suncom/ShopCart_Numberbox.vue'
    export default{
        data(){
            return{
                cars:[]
            }
        },
        components:{
            numberbox
        },
        created(){
            this.getAllGoods()
        },methods:{
           getAllGoods(){
               var ids = [];
               ids = this.$store.state.car.forEach(item => ids.push(item.id));
               //依据ID获取商品信息数据  TODO
               this.cars = this.$store.state.car;
               console.log(this.cars)
           },
            remove(id,i){
               // id 删除数据库  i 删除组件cars列表
                this.cars.splice(i, 1);
                //删除store理数据
                this.$store.commit('delStore',id)

            },
            selectChg(id,flag){
                //把状态同步给store
                console.log(id, flag)
                //updateGoodsSelect
                this.$store.commit('updateGoodsSelect',{id, selected:flag})
            }
        }
    }

</script>
<style lang="scss" type="text/scss" scoped>
    .shopcart{
        background-color: #eeeeee;
        //overflow 属性规定当内容溢出元素框时发生的事情
        overflow: hidden;
        .good-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
            }
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .price{
                    color:red;
                    font-weight: bold;
                }
            }
        }
        .jesuan{
            display: flex;
            justify-content: space-between;
            /*align-items: center;*/
            .red{
                color:red;
                font-weight: bold;
            }
        }
    }
</style>