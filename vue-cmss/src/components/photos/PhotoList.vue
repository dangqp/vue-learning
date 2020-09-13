<template>
    <div>
        <!--<div id="slider" class="mui-slider mui-fullscreen">-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0?'mui-active':'']" v-for="item in photolist">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>

        <ul>
            <li v-for="item in list">
                <img src="" v-lazy="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        data(){
            return{
                photolist:[],
                list:[]
            }
        },
        mounted() {//如果要操作dom元素，最好在mount阶段进行，此时页面元素已经加载，初始化滚动条，要在页面加载完毕后进行
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.photolist=[
                    {title:'全部',id:0},
                    {title:'推荐',id:1},
                    {title:'热点',id:2},
                    {title:'北京',id:3},
                    {title:'郑州',id:4},
                    {title:'社会',id:5},
                    {title:'娱乐',id:6},
                    {title:'娱乐',id:7},
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>
    *{
        touch-action: pan-y;
    }
    img[lazy="loading"]{
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>
