<template>
    <div class="app-container">
        <!--顶部header-->
        <!--<mt-header fixed title="Vue项目练习">-->
        <!--</mt-header>-->
        <!--<header id="header" class="mui-bar mui-bar-transparent">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" ></a>
        <h1 class="mui-title">Vue项目练习</h1>
        </header>-->


        <mt-header fixed title="Vue项目">
           <span slot="left" @click="goBack" v-show="flag">
                <mt-button icon="back">返回</mt-button>
           </span>
        </mt-header>

        <!--中间的 路由router-view-->
        <transition>
            <router-view></router-view>
        </transition>
        <!--底部 table区域-->
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import footBar from './components/FootBar.vue'
    export default {
        data() {
            return {
                flag: false
            };
        },
        created() {
            this.flag = this.$route.path === "/home" ? false : true;
        },
        components: {
            footBar
        }, methods: {
            goBack() {
                // 点击后退
                this.$router.go(-1);
            }
        },watch: {
            "$route.path": function(newVal) {
                if (newVal === "/home") {
                    this.flag = false;
                } else {
                    this.flag = true;
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .app-container {
        padding-top: 40px;
        overflow-x: hidden;
    }

    .mui-bar mui-bar-transparent {
        background-color: #26a2ff;
    }

    /*右进左出*/
    .v-enter {
        opacity: 0;
        transition: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transition: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transform: all 1s ease;
    }
</style>
