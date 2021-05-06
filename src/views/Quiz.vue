<template>
  <div class="quiz">
    <h2>Welcome, User</h2>
    <button class="logout_btn" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Quiz',
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => {
            alert(err.message)
          });
    }
  }
}
</script>
<style scoped>
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: bold;
}

.logout_btn {
  background-color: #50C594;
  color: #181818;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.logout_btn:focus {
  outline: none;
}

</style>