<template>
  <div class="signup">
    <NavBar />
    <form @submit.prevent="signUp">
      <h2>Create Account</h2>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
      <button class="signup_btn">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import NavBar from '@/components/Navbar'

export default {
  name: 'SignUp',
  components: {
    NavBar
  },
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
h2 {
  margin: 30px 0 50px 0;
  font-weight: bold;
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
  font-weight: normal;
  color: #606060;
  border-radius: 5px;
  border: 2px solid #B3B3B3;
  padding-left: 10px
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
p {
  width: 400px;
  margin-bottom: 20px;
}
.signup_btn {
  width: 400px;
  height: 60px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #50C594;
  color: #181818;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}
.signup_btn:focus {
  outline: none;
}

</style>