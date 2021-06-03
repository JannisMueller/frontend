<template>
  <div class="score_flex">
    <h2>My Scores</h2>
    <ul>
      <li
          v-for="score in scores"
          :key="score.id">
        {{ score.score }}
        <span>{{ score.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import db from '@/firebaseInit'
import firebase from 'firebase'

export default {
  name: "ScoreList",
  data() {
    return {
      scores: []
    }
  },
  created() {
    db.collection('users').doc(firebase.auth().currentUser.uid)
    .collection('scores').orderBy("score", "desc").limit(5).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let score = doc.data()
        score.id = doc.id
        this.scores.push(score);
      })
    })
  }
}
</script>

<style scoped>
.score_flex {
  width: 400px;
  height: 500px;
  padding: 40px;
  border-radius: 10px;
  border: 3px solid var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
ul {
  overflow-y: auto;
  height: 350px;
}
h2 {
  color: var(--color-bg-button);
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
li {
  list-style-type: none;
  margin-bottom: 20px;
  width: 100%;
  font-size: 18px;
  color: var(--color-text-secondary);
}
span {
  float: right;
}
ul::-webkit-scrollbar {
  width: 0;
}

</style>