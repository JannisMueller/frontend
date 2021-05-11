<template>
  <div class="home">
    <h2>Welcome to JAVA JOURNEY</h2>
    <p>No teacher, no books, learn on the fly</p>
    <figure></figure>
    <router-link to="/login" tag="button" class="start_btn">Start Quiz</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

figure {
  width: 300px;
  height: 300px;
  background-image: url("../assets/landingpage.png");
  background-size: cover;
}

.start_btn:focus {
  outline: none;
}

</style>