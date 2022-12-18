<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div v-if="step === 0">
          <h2 class="title is-4 has-text-centered ">Taktu prófið!</h2>
          <p>Nú getur þú fundið skóla sem hentar þér best með að svara nokkrum fullyrðingum um sjálft þig.</p>        
          <div class="buttons is-justify-content-center mt-4">
            <button class="button is-medium" @click="move()">Byrja</button>
          </div>
        </div>
        <div v-for="(statement, index) in statements" :key="statement.id">
          <div v-if="step === (index+1)">
            <h2 class="title is-4 has-text-centered ">{{ statement.statement }}</h2>
            <div class="buttons is-justify-content-center">
              <button class="button is-medium is-danger" @click="move()">Nei</button>
              <button class="button is-medium is-success" @click="move(statement.id)">Já</button>
            </div>
          </div>
        </div>
        <div v-if="lastStep">
          <h2 class="title is-4 has-text-centered ">Niðurstöður</h2>
          <table class="table is-striped is-fullwidth">
            <thead>
              <th width="90%">Skóli</th>
              <th width="10%" class="has-text-right">Stig</th>
            </thead>
            <tbody>
              <tr v-for="place in results" :key="place.id">
                <td>{{ place.name }}</td>
                <td class="has-text-right">{{ place.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <progress v-if="step > 0" class="progress mt-4" :value="step-1" :max="statements.length">15%</progress>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import agent from 'superagent'
export default {
  name: 'FindShool',
  props: {
    statements: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      step: 0,
      answers:  [],
      results: []
    }
  },  
  computed: {
    lastStep() {
      return this.step === this.statements.length + 1
    }    
  },
  methods: {
    getResults() {
      agent
        .post(process.env.STUDNINGSBANKINN_API_URL + '/statements/score')
        .withCredentials()
        .send({
          statementIds: this.answers
        })
        .then(data => {
          this.results = data.body
        })
    },
    move (statementId) {
      this.step = this.step + 1
      
      if (statementId) {
        this.answers.push(statementId)
      }

      if (this.lastStep) {
        this.getResults()
      }
    }
  }  
}
</script>

<style scoped>

</style>