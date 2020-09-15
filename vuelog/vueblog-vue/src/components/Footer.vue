<template>
    <div class="m-container">
        <el-footer></el-footer>
    </div>
</template>

<script>
    export default {
        data() {

        },
        props: {
            msg: String
        },
        created() {

        }
        , methods: {

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
