<template>
  <div class="quiz">
    <h1>Welcome, User</h1>
    <QuizData/>

  </div>
</template>

<script>
import QuizData from "@/components/QuizData";

export default {
  name: 'Quiz',
  components: {QuizData},
}
</script>
<style scoped>
/*

.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #FFFFFF;
  margin: 70px 0 40px 0;
}

.logout_btn {
  background-color: #50C594;
  color: #181818;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  padding: 20px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.logout_btn:focus {
  outline: none;
}

.logout_btn:hover {
  background-color: #B3B3B3;
}
*/

</style>