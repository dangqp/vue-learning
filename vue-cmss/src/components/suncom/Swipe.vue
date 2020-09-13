<template>
    <div>
        <!--轮播图-->
        <mt-swipe>
            <mt-swipe-item v-for="item in lunbotoList" :key="item">
                <img :src="item" :class="{full:isFull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    /* eslint-disable semi */
    export default {
        props:['lunbotoList','isFull']
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe-item {
        text-align: center;

        /*& :nth-child(1) {*/
            /*background-color: coral;*/
        /*}*/

        /*& :nth-child(2) {*/
            /*background-color: red;*/
        /*}*/

        /*& :nth-child(3) {*/
            /*background-color: blue;*/
        /*}*/

        img {
            /*width: 100%;*/
            height: 100%;
        }
        .full{
            width: 100%;
        }

    }
</style>
