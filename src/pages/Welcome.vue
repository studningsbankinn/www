<template>
<div>
  <div class="columns">
    <div class="column is-12">
      <Welcome />
    </div>
  </div>
</div>
</template>

<script>
import Welcome from '../components/Welcome'
export default {
  name: 'WelcomePage',
  components: {
    Welcome
  }
}
</script>