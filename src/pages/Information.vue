<template>
<div>
  <div class="columns">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered">Nytsamlegar upplýsingar</h1>
      <Tabs :list="tabs" :default="tab" @select="selectTab" />
      <component :is="item"></component>
    </div>
  </div>
</div>
</template>

<script>
import UNCRC from '../components/UNCRC'
import Help from '../components/Help'
import Organizations from '../components/Organizations'
import Tabs from '../components/Tabs'
export default {
  name: 'InformationPage',
  components: {
    UNCRC,
    Help,
    Organizations,
    Tabs
  },
  data () {
    return {
      content: [
        {
          label: 'Aðstoð við námið', 
          component: 'Help'
        },
        {
          label: 'Lög og Barnasáttmáli SÞ', 
          component: 'UNCRC'
        },
        {
          label: 'Stofnanir og félagasamtök',
          component: 'Organizations'
        }
      ],
      tab: 'Aðstoð við námið'
    }
  },
  computed: {
    tabs () {
      return this.content.map(c => c.label)
    },
    item () {
      return this.content.find(c => c.label === this.tab)?.component
    }
  },
  methods: {
    selectTab (tab) {
      this.tab = tab
    },
  }
}
</script>
