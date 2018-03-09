<template>
  <div class="hello">
  <p>{{msg}}</p>
   <h1 @click="bb">标题</h1>
    

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '你好这里是欢迎页面'
    }
  },
  methods: {
    bb: function () {
      alert('aaaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  background: red;
}

a {
  color: #42b983;
}
</style>
