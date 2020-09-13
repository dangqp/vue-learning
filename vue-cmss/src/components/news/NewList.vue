<template>
<div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
            <router-link :to="'/home/newsInfo/'+ 1">
                <img class="mui-media-object mui-pull-left" src="images/shuijiao.jpg">
                <div class="mui-media-body">
                    <h1>{{article.title}}</h1>
                    <p class='mui-ellipsis'>
                        <span >评论时间：{{article.time | dateFormat}}</span>
                        <span>点击：{{article.clkCnt}}次</span>
                    </p>

                </div>
            </router-link>
        </li>

    </ul>
</div>
</template>

<script>
export default{
    data(){
        return{
            article:{
                title:'你好',
                time:'2020-09-09',
                clkCnt:'20'
            },
            id:1
        }
    },
    method:{

    }
}
</script>

<style scoped>
    .mui-table-view li h1{
        font-size: 40px;
    }

    .mui-table-view li .mui-ellipsis{
        font-size: 27px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    /*.mui-table-view{
        li{
            h1{
                font-size: 20px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color:#226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }*/
</style>
