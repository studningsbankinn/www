<template>
  <div class="tabs is-boxed">
  <ul>
    <li
      v-for="tab in list"
      :key="tab"
      :class="{ 'is-active' : tab === selected }"
    >
      <a @click="select(tab)">
          <span class="icon is-small" :style="{ color: colors[tab] }">
            <i :class="icons[tab]"></i>
          </span>
          <span>{{ tab }}</span>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    default: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      selected: undefined,
      icons: {
        'Aðgengi': 'fab fa-accessible-icon',
        'Félagslífið': 'fas fa-users',
        'Heimavist': 'fas fa-school',
        'Námið': 'fas fa-university',
        'Próftaka': 'fas fa-user-edit',
        'Réttindi': 'fas fa-universal-access',
        'Starfsemi': 'fas fa-hands-helping',
      },
      colors: {
        'Aðgengi': '#e69f00',
        'Félagslífið': '#56b4e9',
        'Heimavist': '#f0e442',
        'Námið': '#019e73',
        'Próftaka': '#0072b2',
        'Réttindi': '#d55e00',
        'Starfsemi': '#cc79a7',
      }
    }
  },
  mounted() {
    this.selected = this.default
  },
  watch: {
    list (val) {
      this.select(val[0])
    }
  },
  methods: {
    select (tab) {      
      this.selected = tab
      this.$emit('select', tab)
    }
  }
}
</script>