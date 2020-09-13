<template>
    <!--可以使用watch监听父组件传来的值max，不管触发几次，最后一次一定时个合法的max数值-->
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="cntChg" ref="numbox"/>
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
                //数值变化后，立即通过事件把数据传给父类
                this.$emit('getCnt',parseInt(this.$refs.numbox.value))
            }
        },
        props:['max'],
        watch:{
            'max':function (newVal,oldVal) {
//                mui(".mui-numbox").numbox().setOption('max',newVal)
                mui(".mui-numbox").numbox().setOption('max',60)
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
</style>
