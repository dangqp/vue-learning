<template>
    <div class="m-container">
        <h3>欢迎来到博客列表</h3>
        <div class="block">
            <el-avatar :size="50" :src="user.avatr"></el-avatar>
            <div>{{user.username}}</div>
        </div>
        <div class="maction">
            <span><el-link href="/blogs">主页</el-link></span>
            <el-divider direction="vertical"></el-divider>
            <span><el-link type="success" href="/blog/add">发表博客</el-link></span>
            <el-divider direction="vertical"></el-divider>
            <span v-show="!hasLogin"><el-link type="primary" href="/login">登录</el-link></span>
            <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                user: {
                    username: '请先登录',
                    avatr: 'https://avatars1.githubusercontent.com/u/36261555?s=400&u=678ff84716baa7802ac76cab934d2c7acbed3fc4&v=4'
                },
                hasLogin:false //默认没有登录
            }
        },
        props: {
            msg: String
        },
        created() {
            //页面加载时获取用户信息
            if (this.$store.getters.GET_USERINFO.username){
                this.user.username = this.$store.getters.GET_USERINFO.username
                this.user.avatr = this.$store.getters.GET_USERINFO.avatr
                this.hasLogin = true
            }
        }
        , methods: {
            logout() {
                const _this = this;
                _this.$axios.get("/logout", {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(res => {// eslint-disable-line no-unused-vars
                    _this.$store.commit("REMOVE_INFO")
                    _this.$router.push("/login")
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .m-container {
        /* 居中*/
        margin: 0 auto;
        text-align: center;
        max-width: 960px;
    }

    .maction {
        margin: 10px 0;
    }
</style>
