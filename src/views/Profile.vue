<template>
  <div class="profile">
    <h1>Hello {{ username }}!</h1>
    <div class="profile_flex">
      <HighScoreList class="top_3" />
      <ScoreList class="my_scores"/>
      <LastPlayedQuiz class="last_played" />
    </div>
  </div>
</template>

<script>
import LastPlayedQuiz from '@/components/LastPlayedQuiz'
import HighScoreList from '@/components/HighScoreList'
import ScoreList from '@/components/ScoreList'
import firebase from 'firebase'

export default {
  name: "Profile",
  components: {
    ScoreList,
    HighScoreList,
    LastPlayedQuiz
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
h1 {
  color: var(--color-text-primary);
  margin: 30px 0 50px 40px;
  letter-spacing: 2px;
}
.profile_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_3, .my_scores {
  margin-bottom: 30px;
}
.last_played {
  margin-bottom: 50px;
}

@media screen and (min-width: 1025px) {
  .profile_flex {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .top_3, .my_scores, .last_played {
    margin-bottom: 0;
  }
}

</style>