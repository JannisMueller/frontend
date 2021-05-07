<template>
<div>

<ul>

  <li v-for="question in questions"
      v-bind:key="question.questionId"
      v-bind:answer="question.answerOne"
  >
    {{ question.questionTitle + ": " }} {{question.question + "?" }}

  </li>

</ul>

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

</style>