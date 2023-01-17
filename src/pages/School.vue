<template>
<div>
  <div class="columns">
    <div class="column is-6">
      <Info :place="place" />
    </div>  
    <div class="column is-6">
      <Chart :series="scores" />
    </div>
  </div>

  <div class="columns">
    <div class="column is-12">
      <Tabs :list="categoryTabs" @select="selectTab" />
      <Answers :list="categoryAnswers" />
    </div>
  </div>
</div>
</template>


<script>
import agent from 'superagent'
import Info from '../components/Info'
import Chart from '../components/Chart'
import Tabs from '../components/Tabs'
import Answers from '../components/Answers'

export default {
  name: 'App',
  components: {
    Info,
    Chart,
    Tabs,
    Answers,
  },
  data () {
    return {
      answers: [],
      scores: [],
      tab: undefined,
      place: {},
    }
  },
  computed: {
    categoryAnswers () {
      return this.answers.filter(item => item.questionCategoryName === this.tab)
    },
    categoryTabs () {
      return this.answers
        .map(item => item.questionCategoryName)
        .filter((item, index, self) => self.indexOf(item) === index)
    }
  },
  mounted () {
    const placeId = this.$route.params.id
    this.getPlace(placeId).then(() => {
      this.getAnswers(placeId)
      this.getScores(placeId)
    })
  },
  beforeRouteUpdate (to, from, next) {
    const placeId = to.params.id
    this.getPlace(placeId).then(() => {
      this.getAnswers(placeId)
      this.getScores(placeId)
      next()
    })
  },
  methods: {
    selectTab (tab) {
      this.tab = tab
    },
    getPlace (id) {
      return agent
        .get(process.env.STUDNINGSBANKINN_API_URL + '/places?id='+id)
        .withCredentials()
        .then(data => {
          this.place = data.body[0]
        })
    },
    getAnswers (id) {
      return agent
        .get(process.env.STUDNINGSBANKINN_API_URL + '/answers?placeId=' + id)
        .withCredentials()
        .then(data => {
          this.answers = data.body
          this.selectedTab = this.selectedTab = this.categoryTabs[0]
        })
    },
    getScores (id) {
      return agent
        .get(process.env.STUDNINGSBANKINN_API_URL + '/scores?placeId=' + id)
        .withCredentials()
        .then(data => {
          this.scores = data.body
        })
    }    
  }
}

</script>
