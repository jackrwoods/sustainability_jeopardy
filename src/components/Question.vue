<template>
<div>
  <el-card :class="{ active: !answered, answered: answered, 'box-card': true }" shadow="hover" @click.native="dialogVisible = !answered">
    <h1 :style="{ lineHeight: '8vh' }">{{ points }}</h1>
  </el-card>
  <!-- Hidden question dialog -->
  <el-dialog
    :title="category + ' for ' + points + ' Points'"
    :visible.sync="dialogVisible"
    width="50%"
    center>
    <div style="word-break: normal; text-align: center;">
      {{ questionData.questionText }}
    </div>
    <span slot="footer" class="dialog-footer">
      <el-radio-group @change="handleAnswer" v-model="selectedAnswer" size="mini">
        <el-radio border v-for="(answer, index) in questionData.answers" :key="index" :label="index" @click="handleAnswer">{{ answer.answerText }}</el-radio>
      </el-radio-group>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Question',
  computed: {
    questionData: function () {
      return this.$store.getters.questions(this.category)[0].questions.filter(question => question.pointValue === this.points)[0]
    }
  },
  data () {
    return {
      answered: false,
      dialogVisible: false,
      selectedAnswer: null
    }
  },
  methods: {
    handleAnswer: function () {
      this.answered = true
      if (this.questionData.answers[this.selectedAnswer].isCorrect) {
        this.$store.commit('addPoints', this.points)
        this.$message({
          message: 'Correct!',
          type: 'success',
          duration: 3000
        })
      } else {
        this.$message.error('Incorrect! The correct answer was: "' + this.questionData.answers.filter(answer => answer.isCorrect)[0].answerText + '"', 3000)
      }
      this.$store.commit('answered')
      this.dialogVisible = false
    }
  },
  props: {
    category: String,
    points: Number
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/style-variables.scss';

.box-card {
  text-align: center;
  height: 13vh;
  margin: .5em;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.active {
  cursor: pointer;
}
.active:hover {
  border-color: $--color-primary;
}
.answered {
  background-color: rgb(211,211,211);
}
</style>
