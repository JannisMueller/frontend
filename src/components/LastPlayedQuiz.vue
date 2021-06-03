<template>
  <div class="last_played">
    <h2>Last Played</h2>
    <ul>
      <li v-for="hs in highscore"
          :key="hs.id"
      >
        {{ hs.name }}
        <span>{{ hs.score }}</span>
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
    fetch('http://188.150.101.33:3000/api/highscore/')
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
.last_played {
  width: 400px;
  height: 500px;
  padding: 40px;
  border-radius: 10px;
  border: 2px solid var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
h2 {
  color: var(--color-bg-button);
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
ul {
  overflow-y: auto;
  height: 350px;
}
li {
  list-style-type: none;
  margin-bottom: 20px;
  width: 100%;
  font-size: 18px;
  color: var(--color-text-secondary);
}
span {
  float: right;
}
ul::-webkit-scrollbar {
  width: 0;
}

</style>