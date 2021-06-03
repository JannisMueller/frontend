<template>
  <div>
    <h2>Top 3
      <span>&#127942;</span>
    </h2>
    <table>
      <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="hs in highscore"
          :key="hs.id"
      >
        <td></td>
        <td>{{ hs.name }}</td>
        <td>{{ hs.score }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HighScoreList",
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
h2 {
  margin-bottom: 20px;
  color: var(--color-text-primary);
  font-weight: bold;
}
table tr:first-of-type {
  counter-reset: rowNumber;
}
table tr {
  counter-increment: rowNumber;
}
table tr td:first-of-type::before {
  content: counter(rowNumber);
}
table {
  border-collapse: collapse;
  font-size: 18px;
  width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}
th {
  background-color: var(--color-bg-button);
  color: var(--color-text-button);
  text-align: left;
  letter-spacing: 2px;
}
th, td {
  padding: 15px 18px;
}
tbody tr {
  color: var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
tbody tr:last-of-type {
  border-bottom: 2px solid var(--color-bg-button)
}

</style>