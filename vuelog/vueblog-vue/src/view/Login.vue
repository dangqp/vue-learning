<template>
    <div>
        <el-container>
            <el-header>
                <img class="logo" src="https://avatars1.githubusercontent.com/u/36261555?s=400&u=678ff84716baa7802ac76cab934d2c7acbed3fc4&v=4">
            </el-header>
            <el-main>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" @keyup.enter.native="submitForm('ruleForm')">
<!--                        <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>-->
                        <el-input type="password" v-model="ruleForm.password" ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="register">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' },
                        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(1111)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        const _this = this;
                        this.$axios.post("/login",this.ruleForm).then(res=>{
                            console.log(res)
                            //console.log(res.headers)
                            //获取token
                            const jwt = res.headers['authorization']
                            console.log(jwt)
                            //axios拦截，如果报错，就会不会走下去
                            if(res.data.code === "200"){
                                const userInfo = res.data.data
                                _this.$store.commit('SET_USERINFO',userInfo)
                                _this.$store.commit('SET_TOKEN',jwt)
                                _this.$router.push('/blogs')
                            }

                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register() {
                this.$router.push("/register")
            }
        },created(){
            let userinfo = JSON.parse(localStorage.getItem('userInfo') || "{}")
            console.log(userinfo)
            console.log(userinfo.username)
            console.log(userinfo.password)
            this.ruleForm.username=userinfo.username
            this.ruleForm.password=userinfo.password
        }
    }
</script>

<style scoped>
    .logo{
        height: 60%;
        margin-top:10px;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .demo-ruleForm{
        max-width: 50%;
        /*居中*/
        margin: 0 auto;
    }
</style>