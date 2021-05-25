<template>
  <div class="reference_flex">
    <h2>References</h2>
    <figure></figure>
    <ul
        id="text"
    >
      <li
          v-for="referenceData in referenceDataList"
          :key="referenceData.referenceId"
      >
        {{ referenceData.referenceName }}<br>
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
      referenceDataList: referenceList
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
li {
  color: var(--color-text-secondary);
  list-style-type: none;
  font-size: 18px;
  margin-bottom: 20px;
}
a {
  color: var(--color-bg-button);
  font-weight: bold;
}
.dark a {
  font-weight: normal;
}
#text {
  max-width: 700px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
}
figure {
  width: 375px;
  height: 250px;
  background-image: url("../assets/reference-illustration.jpg");
  background-size: cover;
  margin-bottom: 30px;
}
</style>