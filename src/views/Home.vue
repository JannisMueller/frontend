<template>
  <div class="home">
    <header class="logo">
      <h1>JavaJourney</h1>
      <p>No teacher, no books, learn on the fly</p>
    </header>
    <figure></figure>
    <div>
      <router-link to="/login" tag="button" class="login_btn">Login</router-link>
      <router-link to="/signup" tag="button" class="signup_btn">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
@font-face {
  font-family: Norwester;
  src: url("../assets/norwester.otf");
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  text-align: center;
  margin-top: 70px;
}

h1 {
  color: #FFFFFF;
  margin-bottom: 20px;
  font-family: Norwester, sans-serif;
  font-size: 36px;
  letter-spacing: 2px;
}

header p {
  font-size: 18px;
  color: #B3B3B3;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 30px;
}

figure {
  width: 300px;
  height: 300px;
  background-image: url("../assets/landingpage.png");
  background-size: cover;
  margin-bottom: 30px;
}

.login_btn {
  display: block;
  margin-bottom: 20px;
}

.login_btn, .signup_btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #181818;
  background-color: #50C594;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  padding: 20px 140px;
  border-radius: 10px;
  border: 0;
}

.login_btn:focus, .signup_btn:focus {
  outline: none;
}

.login_btn:hover, .signup_btn:hover {
  background-color: #B3B3B3;
}

</style>