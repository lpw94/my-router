<template>
  <el-container>
    <el-aside width="200px">

		<p>{{navName}}</p>

    </el-aside>
    <el-main>{{navName}}


    <p>总计： {{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>




    </el-main>
  </el-container>

</template>


<script>

  var buttonCounter = {
      template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
      data: function () {
        return {
          counter: 0
        }
      },
      methods: {
        incrementCounter: function () {
          this.counter += 1
          this.$emit('increment')
        }
      }
  }
  export default {
    name: 'Full',
  	props: {
        routes: {
          type: Array
        },
        navName: {
          type: String
        }
      },
    data() {
      return {
         total: 0
      }
    },
    components: {
      buttonCounter
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }

    }

  }
</script>



<style>


</style>
