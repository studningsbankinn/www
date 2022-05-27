<template>
  <div class="card">
  <div class="card-content">
    <div class="content">
       <slot />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.card { margin-bottom: 2em; }
</style>