<template>
  <div id="app">
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
}

html {
  height: 100%;
}

body {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: beige;
}

#app {
  margin: 60px 0 80px 0;
}

</style>