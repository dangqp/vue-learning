<template>
    <div>
        <h3>欢迎注册博客</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="登录名称" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="注册时间" prop="created">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.created" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item class="btn-css">
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    date1: '',
                    email: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' },
                        { min: 6, max: 25, message: '长度在 6 到 5 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { type: 'email', required: true, message: '请输入邮箱', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post("/register",this.ruleForm).then(res=>{// eslint-disable-line no-unused-vars
                            console.log(res)
                            this.$store.commit('SET_USERINFO',this.ruleForm)
                            this.$router.push("/login",)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
    }
    /*.btn-css{*/
    /*    margin: 0 auto;*/
    /*    text-align: center;*/
    /*}*/
    .demo-ruleForm{
        width: 50%;
        text-align: center;
        margin: 0 auto;
    }
</style>