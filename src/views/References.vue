<template>
  <div id="app">
    <h2>References</h2>
    <ReferenceList />
  </div>
</template>

<script>
import ReferenceList from "@/components/ReferenceList";

export default {
  name: 'app',
  components: {
    ReferenceList
  }
}
</script>

<style scoped>

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  color: var(--color-text-primary);
  margin: 30px 0 30px 0;
}

/*figure {*/
/*  width: 250px;*/
/*  height: 250px;*/
/*  background-image: url("../assets/about-illustration.png");*/
/*  background-size: cover;*/
/*  margin-bottom: 20px;*/
/*}*/

/*#text {*/
/*  color: var(--color-text-secondary);*/
/*  max-width: 500px;*/
/*  margin: 0 30px 50px 30px;*/
/*}*/

a {
  text-decoration: none;
  font-weight: bold;
  color: var(--color-bg-button);
}

</style>