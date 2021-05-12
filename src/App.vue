<template>
  <div id="app">
    <Navbar :links="navLinks" />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      navLinks: [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Learn', path: '/learn'},
        {name: 'Quiz', path: '/quiz'},
        {name: 'References', path: '/references'}
      ]
    }
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
  scroll-behavior: smooth;
}

:root {
  --color-bg-primary: #F9F9F9;
  --color-bg-secondary: #FFFFFF;
  --color-text-primary: #181818;
  --color-text-secondary: #606060;
  --color-bg-button: #50C594;
  --color-text-button: #FFFFFF;
}

.dark {
  --color-bg-primary: #181818;
  --color-bg-secondary: #282828;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B3B3B3;
  --color-bg-button: #03DAC5;;
  --color-text-button: #181818;
}

/*#4DE4B4*/

body {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-primary);
}

#app {
  margin: 60px 0 80px 0;
}

</style>