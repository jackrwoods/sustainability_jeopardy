<template>
  <div>
    <el-row v-for="pointValue in [100, 200, 300, 400, 500]" :key="pointValue">
      <el-col :span="4" v-for="category in categories" :key="category">
        <question :category="category" :points="pointValue" />
      </el-col>
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
      'points',
      'questions'
    ])
  },
  components: {
    question
  }
}
</script>

<style scoped>

</style>
