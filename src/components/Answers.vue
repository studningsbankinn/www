<template>
<table class="table is-striped is-fullwidth">
  <thead>
    <tr>
      <th width="50%">
        Spurning
      </th>
      <th width="5%">
        Svar
      </th>
      <th width="45%">
        Athugasemd
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="row in list"
      :key="row.id"
    >
      <td>{{ row.question }}</td>
      <td v-if="row.answer === true">
        <i class="fas fa-thumbs-up" />
        Já
      </td>
      <td v-else>
        <i class="fas fa-thumbs-down" />
        Nei
      </td>
      <td>{{ row.comment }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'Answers',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>