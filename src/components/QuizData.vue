<template>
  <div>
    <ul>
      <li v-for="question in questions"
          v-bind:key="question.questionId"
          v-bind:answer="question.answerOne"
          class="question_grid">
        <h1>{{question.questionTitle}}</h1>
        <h2>{{question.question}}</h2>
        <form class="radio_button_grid">
          <label for="input_answer_one">{{question.answerOne}}</label>
          <input id="input_answer_one" type="radio">
          <label for="input_answer_two">{{question.answerTwo}}</label>
          <input id="input_answer_two" type="radio">
          <label for="input_answer_three">{{question.answerThree}}</label>
          <input id="input_answer_three" type="radio">
        </form>
      </li>
    </ul>
    <button  @click="correctAnswers" type="submit">Submit</button>
  </div>
</template>
<script>
export default {
  name: "QuizData",
  data: function () {
    return {
      questions: [],
    }
  },
  methods: {
    correctAnswer: function () {


    }

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