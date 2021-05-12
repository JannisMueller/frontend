<template>
  <nav>
    <h1>JavaJourney</h1>
    <ul
        :class="{ active: isActive }"
    >
      <li
          v-for="(link, index) in links"
          :key="index"
          @click="toggleNavbar"
      >
        <router-link
            :to="link.path"
        >
          {{ link.name}}
        </router-link>
      </li>
      <li @click="toggleNavbar">
        <a v-if="user" @click="logout">Log Out</a>
        <router-link v-else to="/login">Log In</router-link>
      </li>
      <li @click="toggleTheme">
        <font-awesome-icon class="moon_btn" :icon="['fas', 'moon']" size="lg" v-if="!darkMode" />
        <font-awesome-icon class="sun_btn" :icon="['fas', 'sun']" size="lg" v-else />
      </li>
    </ul>
    <font-awesome-icon class="toggle_btn" :icon="['fas', 'bars']" size="2x" @click="toggleNavbar" />
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NavBar',
  props: ['links'],
  data() {
    return {
      isActive: false,
      user: null,
      darkMode: false
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.user = user;
        console.log('logged in');
      }
      else {
        this.user = null;
        console.log('logged out');
      }
    });
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive;
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login').catch(() => {});
        // https://stackoverflow.com/questions/62462276/how-to-solve-avoided-redundant-navigation-to-current-location-error-in-vue
      });
    },
    toggleTheme() {
      const bodyEl = document.querySelector('body');
      bodyEl.classList.toggle('dark');
      this.darkMode = !this.darkMode;
      // TODO: localstorage
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Norwester;
  src: url("../assets/norwester.otf");
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 60px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: #B3B3B3;
}
h1 {
  font-family: Norwester, 'Roboto', sans-serif;
  letter-spacing: 2px;
  margin: 15px 0 15px 20px;
}
ul {
  display: none;
}
ul.active {
  display: block;
}
li {
  list-style-type: none;
  text-align: center;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: #181818;
  cursor: pointer;
}
.toggle_btn {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}
@media screen and (min-width: 1025px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: inline-block;
  }
  li {
    display: inline-block;
    margin-right: 40px;
    margin-bottom: 0;
  }
  .toggle_btn {
    display: none;
  }
}

</style>