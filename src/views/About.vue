<template>
  <form @submit.prevent="fetchMetar">
    <input type="text" v-model="icaoCode" placeholder="icao code" />
  </form>
</template>

<script>
import MetarService from '@/services/MetarService.js'

export default {
  data() {
    return {
      icaoCode: null
    }
  },
  methods: {
    fetchMetar() {
      MetarService.getMetar(this.icaoCode)
    }
  }
}
</script>
