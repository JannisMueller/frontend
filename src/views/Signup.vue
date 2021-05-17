<template>
  <div class="signup">
    <form @submit.prevent="signup">
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

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push('/quiz').catch(() => {});
      });
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 70px 0 110px 0;
  font-weight: bold;
  color: var(--color-text-primary);
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
  background-color: transparent;
  color: var(--color-text-secondary);
  border-radius: 5px;
  border: 2px solid var(--color-text-secondary);
  padding-left: 10px;
  margin-bottom: 20px;

}
input:focus {
  outline: none;
}
p {
  width: 400px;
  margin-bottom: 50px;
  color: var(--color-text-secondary);
}
.signup_btn {
  width: 400px;
  height: 60px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  background-color: var(--color-bg-button);
  color: var(--color-text-button);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}
.signup_btn:focus {
  outline: none;
}

</style>