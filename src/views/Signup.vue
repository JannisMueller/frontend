<template>
  <div class="signup">
    <router-link to="/"><font-awesome-icon :icon="['fas', 'angle-left']" size="2x" class="back_btn" /></router-link>
    <form @submit.prevent="signUp">
      <h2>Create Account</h2>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="signup_btn">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace('quiz');
          })
          .catch(err => {
            alert(err.message);
          });
    }
  }
}
</script>

<style scoped>
.back_btn {
  color: #B3B3B3;
}

h2 {
  font-weight: bold;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: normal;
  color: #606060;
  border-radius: 5px;
  border: 2px solid rgba(0,0,0,0.2);
  padding-left: 10px
}

input:focus {
  outline: none;
}

.signup_btn {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #50C594;
  color: #181818;
  width: 400px;
  height: 60px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.signup_btn:focus {
  outline: none;
}

</style>