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
          {{ link.text }}
        </router-link>
      </li>
    </ul>
    <font-awesome-icon class="toggle_btn" :icon="['fas', 'bars']" size="2x" @click="toggleNavbar" />
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      isActive: false
    }
  },
  props: ['navLinks'],
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
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #B3B3B3;
}

h1 {
  font-family: Norwester;
  letter-spacing: 2px;
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
}

a {
  text-decoration: none;
}

.toggle_btn {
  position: absolute;
  top: 0;
  right: 0
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
    margin-right: 20px;
  }

  .toggle_btn {
    display: none;
  }
}

</style>