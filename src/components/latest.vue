<template lang="html">
	<div class="container latest">
		<div class="preloader-wrapper big active app-loading" v-if="loading">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <!-- top_stories -->
	    <div class="col s12">
		    <div class="carousel carousel-slider center" style="height: 640px;" data-indicators="true">
			    <router-link :to="{name: 'story', params: {id: topStory.id }}" class="carousel-item white-text" :key="topStory.id"  v-for="topStory of topStories">
		        <div class="card horizontal">
		          <div class="card-image waves-effect waves-block waves-light">
		            <img :src="topStory.image | imageUrlPrefix">
		          </div>
		          <div class="card-stacked">
			          <div class="card-content">
				        	{{ topStory.title }}
			        	</div>
				    	</div>
		        </div>
			    </router-link>
				</div>
				<div class="divider"></div>
        <nav class="purple lighten-2">
          <div class="nav-wrapper app-change-date">
            <i class="left large material-icons app-date-prev" @click="prev">keyboard_arrow_left</i>
            <span class="brand-logo center flow-text app-date">{{ this.date }}</span>
            <i class="right large material-icons app-date-next" @click="next">keyboard_arrow_right</i>
          </div>
        </nav>
	      <!-- stories -->
        <router-link  :key="story.id" :to="{name: 'story', params: {id: story.id }}" v-for="story of stories">
          <div class="card horizontal hoverable">
            <div class="card-image"><img :src="story.images[0] | imageUrlPrefix"></div>
            <div class="card-stacked">
              <div class="card-content"><p class="flow-text">{{ story.title }}</p></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	created () {
    this.getLatest();
  },
	data () {
    return {
      date: null,
      stories: [],
      topStories: [],
      loading: true
    }
  },
  watch: {
    'date': 'getStoriesBydate'
  },
  methods:{
    getLatest () {
      this.$http.get(`${this.$url}/api/4/news/latest`)
                .then(res => {
                    this.date = parseInt(res.data.date, 10) + 1
                    this.stories = res.data.stories
                    this.topStories = res.data.top_stories
                    this.loading = false
                }).then(() => {
                    if (!this.loading) {
											$('.carousel.carousel-slider').carousel({fullWidth: true});      
										}
                })
                .catch(e => {
                  console.log(e)
                })
    },
    getStoriesBydate () {
      const date = new Date().getDate()
      if (parseInt(('' + this.date).slice(-2)) > date) {
        return
      } else {
        this.$http.get(`${this.$url}/api/4/news/before/${this.date}`)
                      .then(res => {
                          this.stories = res.data.stories
                      })
                      .catch(e => {
                        console.log(e)
                    })
      }
    },
    getStoriesBydate () {
      const date = new Date().getDate();
      if (parseInt(('' + this.date).slice(-2)) > date) {
        return;
      } else {
        this.$http.get(`${this.$url}/api/4/news/before/${this.date}`)
                      .then(res => {
                          this.stories = res.data.stories
                      })
                      .catch(e => {
                        console.log(e)
                    })
      }
    },
    prev () {
      this.date -= 1
    },
    next () {
      this.date += 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .latest {
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    .spinner-blue {
    	border-color: #009dd7 !important;
    }
    .card-content {
    	color: #009dd7 !important;
    }
    .carousel-slider {
    	max-height: 640px;
    }
    .card-content {
    	font-size: 24px;
    	font-weight: 300;
    }
    .divider {
    	height: 10px;
    }
    .app-change-date {
      display: flex;
      justify-content: space-around;
      background-color: #009dd7 !important;
      .app-date-prev,.app-date-next {
        display: block;
        width: 100px;
        cursor: pointer;
        text-align: center;
      }
      .app-date-prev {
        margin-right: -270px;
      }
      .app-date-next {
        margin-left: -270px;
      }
    }
  }
</style>