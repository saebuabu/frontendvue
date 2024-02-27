<template>
  <h1>Hallo wereld</h1>
  <div>
    <p>
    Dit is mijn eerste Vue app, met mijn eigen tekst.<br>
    <button @click="groet">Klik me {{ naam }}</button>
    </p>
    <div>
    <label for="naam">Naam:</label>
    <input type="text" id="naam" v-model="naam">
    </div>
    <h2>Taken</h2>
    <ul>
      <li v-for="taak in taken" :key="taak">
        {{ taak }}
      </li>
    </ul>
  </div>
  <PageFooter />
</template>
<script>
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageFooter
  },
  data() {
    return {
      naam: '',
      taken: ['Een taak', 'Een tweede taak', 'Een derde taak']
    }
  },
  methods: {
    groet() {
      alert('Hallo!');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
