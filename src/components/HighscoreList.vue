<template>
  <div>
      <ol>
        <li v-for="hs in highscore"
            :key="hs.id">
              <p>{{hs.name}}</p>
              <p>{{hs.score}}</p>
              <p>{{hs.date}}</p>
        </li>
      </ol>
  </div>
</template>

<script>
export default {
  name: "HighscoreList",
  data() {
    return {
      placeCount: 0,
      highscore: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/highscore/top3/')
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

</style>