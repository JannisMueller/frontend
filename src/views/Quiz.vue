<template>
  <div class="quiz">
    <QuizNavBar />
    <h2>Welcome, User</h2>
  </div>
</template>

<script>
import QuizNavBar from '@/components/QuizNavbar'

export default {
  name: 'Quiz',
  components: {
    QuizNavBar
  }
}
</script>
<style scoped>
/*.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: bold;
}
}*/

</style>