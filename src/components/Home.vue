<template>
<el-container>
  
  <el-header>
  	<Header></Header>
  </el-header>
  <!-- <el-container>
    <el-aside width="200px">首页</el-aside>
    <el-main>首页</el-main>
  </el-container> -->

  <Full :navName="name"></Full>


</el-container>
</template>

<script>
  import Full from './Full'
  import Header from './Header'
  export default {
    components: {
      Full,
      Header
    },
    computed: {
      name () {
        return this.$route.name
      },

      list () {
        return this.$route.matched
      }
    },
    mounted() {
        console.log(this.$route.matched);
        console.log(this.$route.name);
    },
    methods: {

    },
    data() {
      return {
        navName: '啊啊啊啊'
      }
    }
  }
</script>

<style scoped>
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
