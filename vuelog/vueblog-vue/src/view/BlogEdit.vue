<template>
    <div class="e-container">
        <Header></Header>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="摘要" prop="description">
                <el-input type="textarea" v-model="ruleForm.description"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <mavon-editor v-model="ruleForm.content"></mavon-editor>
            </el-form-item>
            <el-form-item class="btn-class">
                <el-button type="primary" @click="submitForm('ruleForm')">发表</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        data() {
            return {
                ruleForm: {
                    id: '',
                    title: '',
                    description: '',
                    content: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                        {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入摘要', trigger: 'change'}
                    ],
                    content: [
                        {trequired: true, message: '请输入内容', trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this;
                        _this.$axios.post("/blog/blog/edit", this.ruleForm, {
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        }).then(res => {// eslint-disable-line no-unused-vars
                            this.$alert('操作成功', '提示', {
                                confirmButtonText: '确定',
                                callback: action => {// eslint-disable-line no-unused-vars
                                    _this.$router.push('/blogs')
                                }
                            })
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
        },
        components: {
            Header
        },
        created() {
            const blogId = this.$route.params.blogId;
            console.log(blogId)
            if (blogId) {
                this.$axios.get("/blog/blog/"+blogId).then(res=>{
                    const blog = res.data.data;
                    this.ruleForm.id = blog.id
                    this.ruleForm.title = blog.title
                    this.ruleForm.description = blog.description
                    this.ruleForm.content = blog.content

                })
            }
        }
    };
</script>
<style scoped>
    .btn-class {
        margin: 0 auto;
        text-align: center;
    }
</style>