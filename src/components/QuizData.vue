<template>
  <div class="question_flex">
    <div class="questions">
      <div
          v-for="(question, index) in questions"
          :key="question.questionId">
        <div v-show="index === questionIndex">
          <h2 class="question_title"> {{ question.questionTitle }}/{{ questions.length }} </h2>
          <h3 class="question"> {{ question.question }} </h3>
          <figure>
            <img :src="getImage(question.questionImg)" alt="code">
          </figure>
          <div class="alt_answers">
            <input type="radio" id="one" :value="question.answerOne" v-model="picked[questionIndex]"  >
            <label for="one" >{{ question.answerOne }}</label>
          </div>
          <div class="alt_answers">
            <input type="radio" id="two" :value="question.answerTwo" v-model="picked[questionIndex]" >
            <label for="two" >{{ question.answerTwo }}</label>
          </div>
          <div class="alt_answers">
            <input type="radio" id="three" :value="question.answerThree" v-model="picked[questionIndex]" >
            <label for="three" >{{ question.answerThree }}</label>
          </div>
          <button class="prev_btn" v-if="questionIndex > 0" @click="prev">Back</button>
          <button class="next_btn" @click="next">Next</button>
        </div>
      </div>

      <div v-show="questionIndex === questions.length">
        <div v-if="points === 0">
          <p class="result_img">&#128533;</p>
          <p class="result_message">Did you even try?</p>
        </div>
        <div v-else-if="points === 5">
          <p class="result_img">&#127942;</p>
          <p class="result_message">Congrats!</p>
        </div>
        <div v-else>
          <p class="result_img">&#128578;</p>
          <p class="result_message">Not bad!</p>
        </div>
        <p id="score">Total score: {{ points }}/{{ questions.length }} {{bonusMessage}}</p>
        <ul>
          <li v-for="score in scoreList"
              :key="score.id">
            {{ score.title }}
            <span v-if="score.correct">✔️</span>
            <span v-else>❌</span>
          </li>
        </ul>
        <button class="restart_btn" @click="tryAgain">Restart</button>
      </div>
    <div class="clock_flex">
      <p id="time">{{ formattedElapsedTime }}</p>
    </div>
      <p>{{ifNotBonus}}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebaseInit'
import axios from 'axios'
export default {

  name: "QuizData",

  data() {
    return {
      questions: [],
      questionIndex: 0,
      picked: [],
      points: 0,
      scoreList: [],
      isCorrect: false,
      username: '',
      elapsedTime: 0,
      timer: undefined,
      timePassed: null,
      timeInterval: null,
      bonusMessage: null,
      ifNotBonus: null
    }
  },

  created() {
    const user = firebase.auth().currentUser;

    if (user != null) {
      this.username = user.displayName;
    }
  },

  computed: {

    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },

  methods: {

//////clock////////
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
      this.timeInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
    stop() {
      clearInterval(this.timer);
      clearInterval(this.timeInterval)
      console.log(this.timePassed);
    },
    reset() {
      this.elapsedTime = 0;
      this.timePassed = 0;
    },
    checkTime() {
      if (this.points === 5) {
        if (this.timePassed <= 120) {
          this.bonusMessage = "(Time Bonus = 2 points!)"
          this.ifNotBonus = null
          return this.points += 2
        }
        if (this.timePassed > 120 && this.timePassed < 180) {
          this.bonusMessage = "(Time Bonus = 1 point!)"
          this.ifNotBonus = null
          return this.points += 1
        }
        else if (this.timePassed == 360) {
          this.ifNotBonus = null
          //pop-up + end game then restart option or exit
        }
        else {
          this.bonusMessage = "(No time bonus)"
          this.ifNotBonus = null
        }
      }
      else {
        this.bonusMessage = null
        this.ifNotBonus = "(You need all answers to be correct to qualify for the time bonus!)"
      }
    },
//////////////////

    saveToHighScore() {
      this.checkTime();
      let higScore = {
        score: this.points.toString(),
        name: this.username,
        date: new Date().toISOString().slice(0, 10)
      }
      axios.post('http://188.150.101.33:3000/api/highscore/', higScore)
          .catch(err => console.log(err.message));
    },

    tryAgain() {
      this.questionIndex = 0
      this.picked = []
      this.points = 0
      this.scoreList = []
      this.bonusMessage = null
      this.ifNotBonus = null
      this.reset()
      this.start()
    },

    getImage(image) {
      return require('@/assets/quiz/' + image);
    },

    next() {
      if (this.picked[this.questionIndex] === undefined) {
        alert('Please choose an answer!');
        return;
      }
      this.questionIndex++;
      if (this.picked[this.questionIndex - 1] === this.questions[this.questionIndex - 1].correctAnswer) {
        this.points++;
        this.isCorrect = true;
        console.log("Correct answer : " + this.points);
      } else {
        this.isCorrect = false;
        console.log("Wrong answer : " + this.points);
      }
      this.checkScore();

      if (this.questionIndex === this.questions.length) {
        this.saveScore();
        this.saveToHighScore();
        this.stop();
      }
    },

    checkScore() {
      let answer = {
        id: this.questionIndex - 1,
        title: this.questions[this.questionIndex - 1].questionTitle,
        correct: this.isCorrect
      };
      return this.scoreList.push(answer);
    },

    prev() {
      this.questionIndex--;
      this.scoreList.splice(this.questionIndex, 1);
    },

    saveScore() {
      db
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("scores")
          .add({
            score: this.points,
            date: new Date().toISOString().slice(0, 10)
          });
    }
  },
    mounted() {
      fetch('http://188.150.101.33:3000/api/question/')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.questions = data;
          });
      this.start()
    }

}
</script>

<style scoped>
.question_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 100%;
}
.question_title {
  color: var(--color-bg-button);
  font-weight: bold;
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.question {
  margin-bottom: 18px;
  color: var(--color-text-primary);
  font-weight: normal;
  font-size: 20px;
}
.alt_answers {
  width: 400px;
  padding: 15px 0 15px 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 3px solid var(--color-bg-button);
}
figure {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-bottom: 20px;
  border: 3px solid var(--color-text-secondary);
  border-radius: 5px;
  background-color: var(--color-bg-secondary);
}
input {
  appearance: none;
  border: 2px solid var(--color-bg-button);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: bottom;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
input:checked::after {
  display: block;
}
input:checked ~ label {
  color: var(--color-bg-button);
  font-weight: bold;
}
input::after {
  content: '';
  display: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-bg-button);
}
label {
  font-size: 18px;
  margin-left: 15px;
  color: var(--color-text-secondary);
}
.prev_btn, .next_btn {
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  background-color: var(--color-text-secondary);
  color: var(--color-text-button);
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  letter-spacing: 2px;
}
.restart_btn {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  width: 100%;
  padding: 10px 0;
  color: var(--color-text-button);
  letter-spacing: 2px;
}
.restart_btn:focus {
  outline: 0;
}
.restart_btn {
  background-color: var(--color-bg-button);
}
.prev_btn {
  transition: background-color 500ms ease-in-out;
  float: left;
}
.next_btn {
  transition: background-color 500ms ease-in-out;
  float: right;
}
.prev_btn:hover, .next_btn:hover {
  background-color: var(--color-bg-button);
}
.prev_btn:focus, .next_btn:focus {
  outline: 0;
}
.result_img {
  margin: 70px 0 50px 0;
  font-size: 100px;
  text-align: center;
}
.result_message {
  font-size: 28px;
  font-weight: bold;
  color: var(--color-text-primary);
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
}
#score {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 3px;
}
ul {
  margin-bottom: 30px;
  margin-left: 50px;
}
li {
  font-size: 18px;
  color: var(--color-text-primary);
  list-style-type: none;
}
li:not(:last-of-type) {
  margin-bottom: 10px;
}
#time {
  color: var(--color-text-primary);
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
  letter-spacing: 2px;
}
</style>