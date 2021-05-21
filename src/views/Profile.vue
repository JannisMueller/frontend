<template>
  <div class="profile">
    <h2>Hello {{ username }}!</h2>
    <ScoreList />
    <HighscoreList />
    <LastPlayedQuiz />
  </div>
</template>

<script>
import ScoreList from '@/components/ScoreList'
import firebase from 'firebase'
import HighscoreList from "@/components/HighscoreList";
import LastPlayedQuiz from "@/components/LastPlayedQuiz";

export default {
  name: "Profile",
  components: {
    ScoreList,
    LastPlayedQuiz,
    HighscoreList
  },
  data() {
    return {
      username: ''
    }
  },
  created() {
    const user = firebase.auth().currentUser;

    if (user != null) {
      this.username = user.displayName;
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 30px 0 30px 30px;
}

</style>