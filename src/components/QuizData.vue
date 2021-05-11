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
      <div v-show="questionIndex === questions.length">
        <h2>
          Quiz finished
        </h2>
        <p>
          Total score: {{ points }} / {{ questions.length }}
        </p>

        <ul>
          <li v-for="list in scoreList"
          v-bind:key="list.id">
            <p>{{list.id+1}}</p>
            <p>{{list.title}}</p>

            <p>{{list.correct}}</p>

          </li>


          <router-link to="/" tag="button" class="start_btn">Back to home</router-link>

          <router-view> </router-view>

          <button @click="tryAgain"> Try Again!</button>

        </ul>

      </div>
    </ul>
    <button v-if="questionIndex > 0 && questionIndex < questions.length" v-on:click="prev">
      prev
    </button>

    <button v-show="questionIndex < questions.length" v-on:click="next">
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
      isCorrect: "wrong answer",
      scoreList: []

    }
  },
  methods: {

    tryAgain: function () {

          this.questionIndex= 0,
          this.picked='',
          this.points= 0,
          this.isCorrect= "wrong answer",
          this.scoreList= []

    },

    checkScore: function () {
      let x = {
        id: this.questionIndex-1,
        title: this.questions[this.questionIndex-1].questionTitle,
        correct: this.isCorrect
      }
      console.log("x: " + x)
      return this.scoreList.push(x);

    },

    next: function() {
      this.questionIndex++;

      let correct = (this.questions[this.questionIndex-1].correctAnswer).toString();
      if(this.picked === correct){
        this.points++;
        this.isCorrect= "correct answer";
        console.log("inloop")
      }
      this.checkScore();
      console.log("question Index: " + this.questionIndex)
      console.log("picked: " + this.picked)
      console.log("points: " + this.points)
      console.log("correct Answer: " + this.questions[this.questionIndex-1].correctAnswer)
      console.log ("correct: "  + correct)
      this.picked='';
      this.isCorrect= "wrong answer";

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