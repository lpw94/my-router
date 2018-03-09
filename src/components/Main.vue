<template>
<el-container>
  <el-header>
  	<Header></Header>
  </el-header>
  <!-- <el-container>
    <el-aside width="200px">新闻</el-aside>
    <el-main>新闻</el-main>
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
        console.log(this.$route);
    },
    methods: {

    },
    data() {
      return {
         navName: '主页'
      }
    }
  }
</script>




