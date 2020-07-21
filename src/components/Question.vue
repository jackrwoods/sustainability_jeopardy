<template>
  <div>
    {{points}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Question',
  computed: {
    ...mapGetters([
      'points'
    ])
  }
}
</script>

<style scoped>

</style>
