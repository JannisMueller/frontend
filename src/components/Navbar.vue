<template>
  <nav>
    <h1>JavaJourney</h1>
    <ul
        :class="{ active: isActive }"
    >
      <li
          v-for="(link, index) in navLinks"
          :key="index"
          @click="isActive = false"
      >
        <router-link
            :to="link.path"
        >
          {{ link.name}}
        </router-link>
      </li>
    </ul>
    <font-awesome-icon class="toggle_btn" :icon="['fas', 'bars']" size="2x" @click="toggleNavbar" />
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: false,
      navLinks: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Learn',
          path: '/learn'
        },
        {
          name: 'Quiz',
          path: '/quiz'
        },
        {
          name: 'References',
          path: '/references'
        },
        {
          name: 'Log In',
          path: '/login'
        }
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive;
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
  font-family: Norwester;
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