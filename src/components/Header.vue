<template>
  	<ul class="head-ul">
  		<li>
  			<router-link to='/Main'>关于我们</router-link> 
  		</li>
  		<li>
  			<router-link to='/home'>首页</router-link> 
  		</li>
  		<li>
  			<router-link to='/news'>新闻</router-link> 
  		</li>
  	</ul>
</template>

<script>
</script>

<style scoped>
.head-ul li{
    list-style: none;
    display: inline-block;
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
  }
</style>
