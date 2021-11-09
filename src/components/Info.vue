<template>
<div>
  <h1 class="title is-1">{{ place.name}}</h1>
  <div class="content" v-html="place.description">
  </div>
  <table class="table">
    <tbody>
      <tr v-if="place.contact">
        <th>
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-user"></i>
            </span>
            <span>Tengiliður:</span>
          </span>
        </th>
        <td>{{ place.contact }}</td>
      </tr>
      <tr>
        <th>
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-phone"></i>
            </span>
            <span>Sími:</span>
          </span>
        </th>
        <td>{{ place.phone }}</td>
      </tr>   
      <tr>
        <th>
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Netfang:</span>
          </span>
        </th>
        <td>{{ place.email }}</td>
      </tr>   
      <tr>
        <th>
         <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-globe"></i>
            </span>
            <span>Heimasíða:</span>
          </span>
        </th>
        <td>{{ place.website }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'Info',
  props: ['place']
}
</script>