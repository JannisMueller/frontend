<template>
  <div class="signup">
    <form @submit.prevent="signup">
      <h2>Create Account</h2>
      <input type="text" placeholder="Username" v-model="user.username">
      <input type="email" placeholder="Email" v-model="user.email">
      <input type="password" placeholder="Password" v-model="user.password">
      <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
      <button class="signup_btn">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebaseInit'

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            firebase.auth().currentUser.updateProfile({
              displayName: this.user.username
            }).then(() => {
              db.collection("users").doc(firebase.auth().currentUser.uid).set({
                username: this.user.username,
                email: this.user.email
              }).then(() => {
                this.$router.push('/profile').catch(() => {});
              });
            }).catch((err) => {
              alert(err.message);
            });
          }).catch((err) => {
        alert(err.message);
      });
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 70px 0 70px 0;
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