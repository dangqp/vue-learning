<template>
    <div>
        <Header></Header>
        <div class="block-container">
            <h2>{{blog.title}}</h2>
            <el-link icon="el-icon-edit" v-show="flag">
<!--                <router-link :to="'/blog/'+blog.id+'/edit'">编辑</router-link>-->
                <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">编辑</router-link>
            </el-link>
            <el-divider></el-divider>
            <div class="markdown-body" v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import "github-markdown-css/github-markdown.css"
    import Header from "@/components/Header";
    export default {
        data(){
            return {
                blog:{
                    userId:null,
                    title:'',
                    content:''
                },
                flag:false //默认不展示
            }
        },
        components:{
            Header
        },created() {
            const blogId = this.$route.params.blogId;
            console.log(blogId)
            if (blogId) {
                this.$axios.get("/blog/blog/"+blogId).then(res=>{
                    const blog = res.data.data;
                    this.blog.id = blog.id
                    this.blog.title = blog.title
                    var MardownIt = require('markdown-it')
                    var it = new MardownIt();

                    // this.blog.content = blog.content

                    this.blog.content = it.render( blog.content);
                    this.flag = (blog.userId === this.$store.getters.GET_USERINFO.id)
                    // console.log(blog.userId)
                    // console.log(this.$store.getters.GET_USERINFO.id)
                    // console.log(this.flag)
                })
            }
        }
    };
</script>
<style scoped>
    .block-container{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 100%;
        min-height: 500px;
        padding: 20px 15px;
    }
</style>