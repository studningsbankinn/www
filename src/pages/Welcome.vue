<template>
<div>
  <div class="columns">
    <div class="column is-12">
      <Welcome /> 
      <FindSchool :statements="statements" :show="showTest"/>
    </div>
  </div>
  <div class="columns has-text-centered">
    <div class="column is-12">
      <h2 class="title is-2">Einkunnagjöf skóla</h2>
      <p>Við spurðum alla framhaldsskóla landsins já eða nei spurninga varðandi aðgengi, aðstoð og aðbúnað. Á grafinu hér fyrir neðan sést hvaða skólar standa sig best.</p>
      <div style="min-height:600px;margin-top:1rem;">
        <Chart :series="scores" labelKey="placeName" orderKey="placeName" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import agent from 'superagent'
import Welcome from '../components/Welcome'
import FindSchool from '../components/FindSchool'
import Chart from '../components/Chart'

export default {
  name: 'WelcomePage',
  components: {
    Welcome,
    FindSchool,
    Chart,
  },
  data() {
    return {
      places: [],
      scores: [],
      statements: [],
      showTest: false
    }
  },
  created() {
    this.showTest = Boolean(this.$route.query.test)
    agent
      .get(process.env.STUDNINGSBANKINN_API_URL + '/places')
      .withCredentials()
      .then(data => {
        this.places = data.body
      })        
    
    agent
      .get(process.env.STUDNINGSBANKINN_API_URL + '/scores/')
      .withCredentials()
      .then(data => {
        this.scores = data.body
      })

    agent
      .get(process.env.STUDNINGSBANKINN_API_URL + '/statements/')
      .withCredentials()
      .then(data => {
        this.statements = data.body
      })
  }
}
</script>

