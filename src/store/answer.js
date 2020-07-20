export default class Answer {
  constructor (answerText, isCorrect) {
    this.answerText = answerText
    this.isCorrect = isCorrect
  }

  // Getters for retrieving class member variables
  get text () {
    return this.answerText
  }

  get isCorrect () {
    return this.isCorrect
  }
}
