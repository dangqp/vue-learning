<template>
    <div >
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽129字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户
                </div>
                <div class="cmt-body">
                    工在地一上是中中的地在
                    在地仍人欠在地一在大要
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {

        /*组件加载时就加载*/
        data(){
            return{
                pageIn:1
            }
        },
        created() {
            this.getComs()
        },
        methods:{
            getComs(){
                alert('传过来的'+this.id)
                console.log(this.id)
            }
        },
        props:['id']
    }
</script>

<style lang="scss" scoped>
    h3{
      font-size: 20px;
    }
    textarea{
        font-size: 20px;
        height: 85px;
        margin: 0;
    }
</style>
