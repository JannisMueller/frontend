<template>
  <div>
    <button v-on:click="getReferenceData">Get Reference Data</button>
    <div>{{ referenceDataList }}</div>
  </div>
</template>

<script>
export default {
  name: "ReferenceList",
  data() {
    return {
      referenceDataList: []
    };
  },
  methods: {
    getReferenceData() {
      fetch('./assets/reference-list.json')
          .then(response => response.json())
          .then(data => (this.referenceDataList = data));
    }
  }
}
</script>

<style scoped>

</style>