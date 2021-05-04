<template>
  <div class="login">
    <router-link to="/"><font-awesome-icon :icon="['fas', 'angle-left']" size="2x" class="back_btn" /></router-link>
    <form @submit.prevent="login">
      <h1>Welcome Back!</h1>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="login_btn">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
  margin: 10px 0 70px 20px;
  color: #B3B3B3;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 60px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input:first-of-type {
  margin-bottom: 20px;
}

input:last-of-type {
  margin-bottom: 60px;
}

input {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: #606060;
  width: 350px;
  height: 50px;
  border-radius: 7px;
  padding-left: 10px;
  border: 0;
}

input:focus {
  outline: none;
}

.login_btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #50C594;
  color: #181818;
  font-size: 18px;
  width: 350px;
  padding: 20px 0;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.login_btn:focus {
  outline: none;
}

.login_btn:hover {
  background-color: #B3B3B3;
}

</style>