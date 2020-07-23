<template>
  <div>
    <el-row v-for="pointValue in [100, 200, 300, 400, 500]" :key="pointValue">
      <el-col :span="8" v-for="category in categories" :key="category">
        <center><h1 v-if="pointValue === 100">{{ category }}</h1></center>
        <question v-bind:category="category" v-bind:points="pointValue" />
      </el-col>
    </el-row>
    <el-row :style="{textAlign: 'center', margin: '.5em', fontSize: '1.5em'}">
      Your Score: {{points}}
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import question from './Question.vue'
export default {
  name: 'Jeopardy',
  computed: {
    ...mapGetters([
      'categories',
      'points'
    ])
  },
  components: {
    question
  }
}
</script>

<style scoped>

</style>
