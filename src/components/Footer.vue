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
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-secondary);
  border-top: 2px solid rgba(0,0,0,0.1);
}

li {
  display: inline-block;
  list-style-type: none;
  cursor: pointer;
  color: var(--color-text-secondary);
}

li:not(:last-of-type) {
  margin-right: 60px;
}

</style>