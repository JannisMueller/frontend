<template>
  <div class="login">
    <form @submit.prevent="login">
      <h2>Welcome Back!</h2>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="login_btn">Log in</button>
      <p>New to Java Journey? <router-link to="/signup">Sign Up</router-link></p>
      <router-link class="close_btn" to="/">&times;</router-link>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

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
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push('/quiz').catch(() => {});
      });
    }
  }
}
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}
form {
  position: relative;
  width: 400px;
  height: 500px;
  background-color: #B3B3B3;
  padding: 50px 30px;
  border-radius: 10px;
}
h2 {
  text-align: center;
  margin-bottom: 70px;
}
input {
  font-weight: normal;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
}
input:first-of-type {
  margin-bottom: 20px;
}
input:last-of-type {
  margin-bottom: 50px;
}
input:focus {
  outline: none;
}
.login_btn {
  width: 100%;
  height: 60px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #50C594;
  color: #181818;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
}
.login_btn:focus {
  outline: none;
}
p {
  text-align: center;
}
.close_btn {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 28px;
  color: #181818;
}

</style>