<template>
	<div class="navbar">
		<nav>
		  <div class="nav-wrapper">
		  	<router-link to='/' class="left brand-logo">
		     <img class="app-logo" :src="logo" alt="知乎日报" title="首页">
		    </router-link>
		    <!-- route-name -->
        <span class="brand-logo center app-route-name" v-if="this.$route.name === 'favorites'">
        共计: {{ this.$store.getters.getFavoritesStoryNum }}篇文章
        </span>
        <span class="brand-logo center app-route-name" v-else-if="this.$route.name === 'hot'">
          热门文章
        </span>
        <span class="brand-logo center app-route-name" v-else>
          {{ this.$route.params.id | routeName }}
        </span>
		    <ul id="nav-mobile" class="right">
		      <li><a class="dropdown-button" data-activates="subjects">主题日报</a></li>
          <li><a class="dropdown-button" data-activates="others">
            <i class="material-icons">more_vert</i></a>
          </li>
		    </ul>
		    <ul id="others" class="dropdown-content">
          <li class="waves-effect waves-light"><router-link class="app-route-link" to="/favorites">我的收藏</router-link></li>
          <li class="waves-effect waves-light"><router-link class="app-route-link" to="/hot">热门文章</router-link></li>
        </ul>
        <ul id="subjects" class="dropdown-content">
          <li class="waves-effect waves-light" :key="subject.id" v-for="subject of subjects">
            <router-link class="app-route-link" :title="subject.description"
            :to="{name: 'subject', params: {id: subject.id}}">{{ subject.name }}</router-link>
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
  created () {
    this.getSubjects()
  },
  data () {
    return {
      logo,
      subjects: [{id: 1, name: '首页', description: '知乎日报'}]
    }
  },
  methods: {
    getSubjects () {
      this.$http(`${this.$url}/api/4/themes`)
          .then(res => {
            res.data.others.map(subject => {
              this.subjects.push(subject)
            })
          })
          .catch(e => {
            console.log(e)
          })
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
	.brand-logo {
		font-size: 1.5rem;
	}
	nav {
		background-color: #009dd7 !important;
	}
	.dropdown-content li a {
		color: #009dd7;
	}
	.dropdown-button, .app-favorites {
    padding: 0 36px;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>