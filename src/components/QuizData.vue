<template>
  <div>
    <ul>
      <li v-for="(question,index) in questions"
          v-bind:key="question.questionId"

          class="question_grid">

        <div v-show="index === questionIndex">

        <h1>{{question.questionTitle}}</h1>
        <h2>{{question.question}}</h2>

        <form class="radio_button_grid">

          <input type="radio" id="one" v-bind:value="question.answerOne" v-model="picked">
          <label for="one">{{question.answerOne}}</label>

          <input type="radio" id="two" v-bind:value="question.answerTwo" v-model="picked">
          <label for="two">{{question.answerTwo}}</label>

          <input type="radio" id="three" v-bind:value="question.answerThree" v-model="picked">
          <label for="three">{{question.answerThree}}</label>

          <span >Your Answer is: {{ picked }} </span>

        </form>
        </div>
      </li>
    </ul>
    <button v-if="questionIndex > 0" v-on:click="prev">
      prev
    </button>

    <button v-on:click="next">
      next
    </button>

<!--    -->
  </div>
</template>
<script>
export default {
  name: "QuizData",

  data: function () {
    return {
      questions: [],
      questionIndex: 0,
      picked:'',
      points: 0,

    }
  },
  methods: {

    next: function() {
      this.questionIndex++;
      let correctedAnswer = this.questions[this.questionIndex-1].correctAnswer
      if(this.picked === correctedAnswer){
        this.points++;
      }
      console.log("question Index: " + this.questionIndex)
      console.log("picked: " + this.picked)
      console.log("points: " + this.points)
      console.log("correct Answer: " + correctedAnswer)
      this.picked='';

    },
    prev: function() {
      this.questionIndex--;
    },

  },
  mounted(){
    fetch('http://localhost:3000/api/question/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.questions = data;
        });
  }
}
</script>
<style scoped>
h1{
  font-size: 48px;
  text-decoration: underline;
  margin-top: 75px;
}
h2 {
  font-size: 36px;
  border-bottom: 2px solid;
  margin-left: 175px;
  margin-right: 175px;
  padding: 25px;
}
li{
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  margin-bottom: 50px;
}
label {
  margin-bottom: 10px;
}
.question_grid {
  display: grid;
  grid-template-columns: 1fr;
}
.radio_button_grid {
  margin: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#button_submit {
  width: fit-content;
  height: fit-content;
  font-size: 28px;
  margin: 25px;
  border-radius: 5px;
}
</style>