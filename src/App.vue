<template>
<section class="section">
  <div class="container">
    <a href="#main" :class="{ skipLinkVisible: showSkip, skipLinkHidden: !showSkip }" @focus="showSkip = true" @blur="showSkip = false">Beint í meginmál</a>
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
      showNav: false,
      showSkip: false,
    }
  },
  created () {
    this.getPlaces()
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
        .set('Authorization', 'Bearer ' + process.env.STUDNINGSBANKINN_API_KEY)
        .then(data => {
          this.places = data.body
        })
    }
  } 
}

</script>

<style>
html, body {
  margin: 0 auto;
  padding: 0;
  height: 100%;
  background: #F2F6FA
}
.section {
  padding : 0;
  height: 100%;
}

section .container { 
  padding: 3rem;
  background: #FFFFFF;
  height: 100%;
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

.radarchart {
  max-height: 400px;
  display: block;
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

