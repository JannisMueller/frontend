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
.login {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

form {
  position: relative;
  flex-basis: 400px;
  background-color: #B3B3B3;
  padding: 20px;
}

h2 {
  text-align: center;
}

input {
  font-weight: normal;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 20px;
}

input:focus {
  outline: none;
}

.login_btn {
  font-weight: bold;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  background-color: #50C594;
  color: #181818;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.login_btn:focus {
  outline: none;
}

p {
  text-align: center;
}

.close_btn {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  text-decoration: none;
}

</style>