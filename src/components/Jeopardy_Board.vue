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
    <el-dialog
      title="Thanks for Playing!"
      :visible.sync="answeredAll"
      width="50%"
      center>
      <div style="word-break: normal; text-align: center;">
        You scored: {{ points }}!
      </div>
      <span slot="footer" class="dialog-footer">
        Share your score on: <br />
        <twitter-button
        v-bind:hasIcon="false"
        class="share-button--outline"
        url="https://beav.es/o4o"
        :description="'@OSUsustainable I just scored ' + points + ' points on OSU\'s Sustainability Jeopardy!'"></twitter-button> &nbsp;
        <facebook-button
        class="share-button--outline"
        url="https://beav.es/o4o"
        :description="'@OSUsustainable I just scored ' + points + ' points on OSU\'s Sustainability Jeopardy!'"></facebook-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TwitterButton from 'vue-share-buttons/src/components/TwitterButton'
import FacebookButton from 'vue-share-buttons/src/components/FacebookButton'

import question from './Question.vue'
export default {
  name: 'Jeopardy',
  computed: {
    ...mapGetters([
      'answeredAll',
      'categories',
      'points'
    ])
  },
  components: {
    question,
    TwitterButton,
    FacebookButton
  }
}
</script>

<style scoped>

</style>
