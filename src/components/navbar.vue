<template>
	<div class="navbar">
		<nav>
		  <div class="nav-wrapper">
		    <a href="#" class="brand-logo">
		     <img class="app-logo" :src="logo" alt="知乎日报" title="首页">
		    </a>
		    <ul id="nav-mobile" class="right hide-on-med-and-down">
		      <li><a href="sass.html">Sass</a></li>
		      <li><a href="badges.html">Components</a></li>
		      <li><a href="collapsible.html">JavaScript</a></li>
		    </ul>
		  </div>
		</nav>
	</div>	
</template>
<script>
import logo from  '../assets/imgs/brand_logo.png'

export default {
  name: 'navbar',
  data () {
    return {
      logo
    }
  }
}

</script>
<style lang="scss" scoped>
.navbar {
	.app-logo {
	  padding-top: 10px;
	  padding-left: 10px;
	}
	nav {
		background-color: #009dd7 !important;
	}
}
</style>