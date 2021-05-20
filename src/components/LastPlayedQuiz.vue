<template>
  <div>
    <h2>Last Played:</h2>
      <ul>
        <li v-for="hs in highscore"
            :key="hs.id">
          <p>Name: {{hs.name}}</p>
          <p>Score: {{hs.score}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "LastPlayedQuiz",
  data() {
    return {
      highscore: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/highscore/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.highscore = data;
        });
  }
}
</script>

<style scoped>
ul {
  height: 250px;
  border: 1px solid;
  overflow-y: auto;
}
li {
  padding-bottom: 10px;
  padding-left: 5px;
}
</style>