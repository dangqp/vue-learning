<template>
    <!--可以使用watch监听父组件传来的值max，不管触发几次，最后一次一定时个合法的max数值-->
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="cnt" @change="cntChg" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    /* eslint-disable semi */
    import mui from '../../lib/mui/js/mui.js'
    export default {
        mounted(){
            mui(".mui-numbox").numbox()
        },methods:{
            cntChg(){
                this.$store.commit('updatGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value})
            }

        },props:['cnt','goodsid']
    }
</script>

<style lang="scss" type="text/scss" scoped>
</style>
