<template>
	<div class="navbar">
		<nav>
		  <div class="nav-wrapper">
		  	<router-link to='/' class="left brand-logo">
		     <img class="app-logo" :src="logo" alt="知乎日报" title="首页">
		    </router-link>
		    <ul id="nav-mobile" class="right hide-on-med-and-down">
		      <li><a class="dropdown-button" data-activates="subjects">主题日报</a></li>
          <li><a class="dropdown-button" data-activates="others">
            <i class="material-icons">more_vert</i></a>
          </li>
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
	  padding-bottom: 5px;
	  padding-left: 10px;
	}
	nav {
		background-color: #009dd7 !important;
	}
}
</style>