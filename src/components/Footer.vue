<template>
  <footer class="footer">
    <ul>
      <li><font-awesome-icon :icon="['fab', 'instagram']" size="2x" /></li>
      <li><font-awesome-icon :icon="['fab', 'facebook']" size="2x" /></li>
      <li><font-awesome-icon :icon="['fab', 'youtube']" size="2x" /></li>
      <li><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></li>
      <li><font-awesome-icon :icon="['fab', 'github']" size="2x" /></li>
    </ul>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #B3B3B3;
  height: 80px;
}

li {
  display: inline-block;
  list-style-type: none;
  cursor: pointer;
}

li:not(:last-of-type) {
  margin-right: 60px;
}

</style>