<template>
  <div class="home">
    <h2>Welcome to JAVA JOURNEY</h2>
    <p>No teacher, no books, learn on the fly</p>
    <figure></figure>
    <router-link to="/login" tag="button" class="start_btn">Start Quiz</router-link>
    <router-view></router-view>

<!--    <highscore-list></highscore-list>-->
<!--    <LastPlayedQuiz></LastPlayedQuiz>-->

  </div>
</template>

<script>
// import HighscoreList from "@/components/HighscoreList";
// import LastPlayedQuiz from "@/components/LastPlayedQuiz";
export default {
  name: 'Home'
  // components: {LastPlayedQuiz, HighscoreList}
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 30px 0 10px 0;
  color: var(--color-text-primary);
}

p {
  margin-bottom: 30px;
  color: var(--color-text-secondary);
  font-weight: bold;
}

figure {
  width: 300px;
  height: 300px;
  background-image: url("../assets/landing-page.png");
  background-size: cover;
  margin-bottom: 30px;
}

.start_btn {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 40px;
  border: 0;
  cursor: pointer;
  color: var(--color-text-button);
  background-color: var(--color-bg-button);
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}

.start_btn:hover {
  transform: scale(1.1);
}

.dark .start_btn {
  box-shadow: none;
}

.start_btn:focus {
  outline: 0;
}

</style>