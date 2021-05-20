<template>
  <div class="score_flex">
    <ul id="scores">
      <li
          v-for="score in scores"
          :key="score.id"
      >
        {{ score.score }} | {{ score.date }}
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
    .collection('scores').orderBy("score", "desc").get()
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
#scores {
  margin-left: 30px;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
}

</style>