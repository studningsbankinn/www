<template>
<div>
  <div class="columns">
    <div class="column is-12">
      <Welcome /> 
    </div>
  </div>
  <div class="columns has-text-centered">
    <div class="column is-12">
      <h2 class="title is-2">Einkunnagjöf skóla</h2>
      <p>Við spurðum alla framhaldsskóla landsins já eða nei spurninga varðandi aðgengi, aðstoð og aðbúnað. Á grafinu hér fyrir neðan sést hvaða skólar standa sig best.</p>
      <div style="min-height:600px;margin-top:1rem;">
        <Chart :series="answers" labelKey="placeName" orderKey="placeName" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import agent from 'superagent'
import Welcome from '../components/Welcome'
import Chart from '../components/Chart'

export default {
  name: 'WelcomePage',
  components: {
    Welcome,
    Chart,
  },
  data() {
    return {
      places: [],
      answers: [],
    }
  },
  created() {
    agent
      .get(process.env.STUDNINGSBANKINN_API_URL + '/places')
      .set('Authorization', 'Bearer ' + process.env.STUDNINGSBANKINN_API_KEY)
      .then(data => {
        this.places = data.body
      })        
    
    agent
      .get(process.env.STUDNINGSBANKINN_API_URL + '/answers/')
      .set('Authorization', 'Bearer ' + process.env.STUDNINGSBANKINN_API_KEY)
      .then(data => {
        this.answers = data.body
      })      
  }
}
</script>
