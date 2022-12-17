<template>
<section class="section">
  <div class="container">    
    <nav class="navbar" role="navigation" aria-label="Leiðarkerfi">
      <div class="navbar-brand">        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div id="navbar" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <router-link
            to="/velkomin"
            class="navbar-item"
            active-class="is-active"
            role="link"
          >
            Velkomin
          </router-link>

          <router-link
            to="/um"
            class="navbar-item"
            active-class="is-active"
            role="link"
          >
            Um Stuðningsbankann
          </router-link>

          <router-link
            to="/upplysingar"
            class="navbar-item"
            active-class="is-active"
            role="link"
          >
            Nytsamlegar upplýsingar
          </router-link>
        </div>
      </div>
    </nav>

    <Search :places="places" @select="selectPlace" class="search" />
    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
      <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Hlustaðu á þessa síðu lesna af ReadSpeaker webReader" :href="'https://app-eu.readspeaker.com/cgi-bin/rsent?customerid=13106&lang=is_is&readid=main&url=' + encodeUrl">
        <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Hlusta</span></span></span>
        <span class="rsbtn_right rsimg rsplay rspart"></span>
      </a>
    </div>
    <br />
    <main id="main" role="main" aria-label="Meginmál">
      <router-view />
    </main>
  </div>

</section>
</template>

<script>
import agent from 'superagent'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search
  },
  data () {
    return {
      places: [],
      encodeUrl: '',
      showNav: false,
      showSkip: false,
    }
  },
  methods: {
    selectPlace (place) {
      this.$router.push({
        name: 'School',
        params: { id: place.id}
      })
    },
    getPlaces () {
      return agent
        .get(process.env.STUDNINGSBANKINN_API_URL + '/places')
        .then(data => {
          this.places = data.body
        })
    }
  },
  created () {
    this.getPlaces()
  },
  mounted() {
    this.encodeUrl = encodeURI(window.location.href)
  }
}

</script>

<style>
html, body {
  margin: 0 auto;
  padding: 0;
  min-height: 100%;
  background: #F2F6FA
}
.section {
  padding : 0;
}

section .container { 
  padding: 3rem;
  background: #FFFFFF;
}

.sif-color, .is-active {
  color: #00a4e3;
}

.fa-thumbs-down {
  color: rgb(196, 26, 0);
}

.fa-thumbs-up {
  color: rgb(82, 150, 0);
}

.search {
  margin-bottom: 1rem;
}

.skipLinkVisible {
  top: 0;
}

.skipLinkHidden {
  position: relative;
  top: -200px;
}

</style>

