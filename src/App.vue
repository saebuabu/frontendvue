<template>
  <main>
  <MoviesList />
  </main>
</template>

<script>
import MoviesList from './components/MoviesList.vue'

export default {
  name: 'App',
  components: {
    MoviesList
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
