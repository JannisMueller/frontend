<template>
  <div id="app">
    <NavigationBar
        :nav-links="navLinks"
    />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'About',
        path: '/about'
      },
      {
        text: 'Learn',
        path: '/learn'
      },
      {
        text: 'Quiz',
        path: '/quiz'
      },
      {
        text: 'References',
        path: '/references'
      },
      {
        text: 'Log In',
        path: '/login'
      }
    ]
  })
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
  display: flex;
  flex-direction: column;
  background-color: beige;
  min-height: 100%;
  position: relative;
}

#app {
  margin-top: 60px;
  margin-bottom: 80px;
}

</style>

