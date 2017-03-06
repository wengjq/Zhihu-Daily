<template>
	<div class="zd-head">
		<div class="zd-title p2 bold white bg-blue">{{msg}}</div>
	</div>
</template>

<script>
export default {
  name: 'ZhihuDailyHead',
  data () {
    return {
      msg: '知乎日报'
    }
  }
}
</script>

<style>
.zd-head {
	width: 100%;
	height: 3.5rem;
	background-color: white;
	border-bottom: 2px solid #F5F4F4;
}
</style>
