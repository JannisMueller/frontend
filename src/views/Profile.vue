<template>
  <div class="profile">
    <h2>Hello {{ username }}!</h2>
    <ScoreList />
  </div>
</template>

<script>
import ScoreList from '@/components/ScoreList'
import firebase from 'firebase'

export default {
  name: "Profile",
  components: {
    ScoreList
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