<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Welkom App met less</h1>
  <p class="bordered">Dit is een paragraafje</p>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}


@hoofdkleur: #4CAF50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @hoofdkleur;
  margin-top: 60px;
  p {
    .bordered();
  }
}

</style>
