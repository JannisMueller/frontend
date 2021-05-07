<template>
  <div class="about">
    <h2>About JAVA JOURNEY</h2>
    <figure></figure>
    <div id="text">
      <p>
        Programming has exploded in recent years, and quite a lot of people have started thinking about switching their careers to something related to it.
        We assume that you are interested in learning coding, but don't know where to start, do you?
        Then we very much welcome you here.<br>
        <br>
        This course is focused on one of the popular programming language "Java".
        Java is a class-based, object-oriented language that is designed to have as few implementation dependencies as possible.<br>
        <br>
        What is "class-based"? What is "object-oriented"?
        Don't worry, we would like to introduce you these Java basics here with simple materials and quizzes, so that you can have a quick overview of Java.<br>
        <br>
        You've got more interested in and excited?
        Then let's go to  <router-link to="/learn">Learn</router-link> and start now!
        You can also start taking quizzes right away from <router-link to="/quiz">Quiz</router-link>.<br>
        <br>
        We recommend you to <router-link to="/signup">sign up</router-link> with us to get to know more about Java, if you'd like to!
        Or in <router-link to="/references">References</router-link> page, you will see some useful information links to learn more by yourself as well.<br>
        <br>
        Thank you for visiting us, and enjoy!
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#text {
  max-width: 500px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
}

h2 {
  margin-top: 30px;
  margin-bottom: 30px;
}

p {
  margin-top: 20px;
  margin-bottom: 20px;
}

figure {
  width: 250px;
  height: 250px;
  background-image: url("../assets/about-illustration.png");
  background-size: cover;
}

</style>