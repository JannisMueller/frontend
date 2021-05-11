<template>
  <div class="quiz">
    <h1>Welcome, User</h1>
    <QuizData/>

    <h2>Welcome, User</h2>
  </div>
</template>

<script>
import QuizData from "@/components/QuizData";

export default {
  name: 'Quiz',
  components: {QuizData}

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

h2 {
  font-weight: bold;
  color: #FFFFFF;
  margin: 70px 0 40px 0;
}



</style>