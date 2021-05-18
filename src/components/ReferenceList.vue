<template>
  <div class="reference_flex">
    <h2>References</h2>
    <button @click="toggleReferences" >Get References</button>
    <ul
        :class="{ active: isActive }"
    >
      <li
          v-for="referenceData in referenceDataList"
          :key="referenceData.referenceId"
      >
        {{ referenceData.referenceName }}
        <a :href="referenceData.referenceURL" target="_blank">{{ referenceData.referenceURL }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import referenceList from '@/assets/reference-list.json'

export default {
  name: "ReferenceList",
  data() {
    return {
      referenceDataList: referenceList,
      isActive: false
    }
  },

  methods: {
    toggleReferences() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.reference_flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 30px 0 30px 0;
  color: var(--color-text-primary);
}

button {
  padding: 20px;
  border: 0;
  border-radius: 10px;
  color: var(--color-text-button);
  background-color: var(--color-bg-button);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: background-color 500ms ease-in-out;
}

button:hover {
  background-color: var(--color-text-secondary);
}

ul {
  display: none;
}
ul.active {
  display: block;
}
li {
  color: var(--color-text-secondary);
  list-style-type: none;
  font-size: 18px;
  margin-bottom: 20px;
}
a {
  color: var(--color-bg-button);
}

</style>