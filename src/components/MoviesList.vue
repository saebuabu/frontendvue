<template>
  <div v-if="toegang">
    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-10">
          <h1>Films overzicht</h1>
        </div>
      </div>
      <div v-for="movie in moviesList" :key="movie.id" class="row justify-content-start">
        <div class="col col-12 col-md-4">
          <MovieCard :movie="movie" />
        </div>
        <div class="p-3 col col-12 col-md-6">
          <p><span>{{ movie.regisseur }}</span> - <em>
          {{ movie.genre }}</em></p>
          <p>{{ movie.samenvatting }}</p></div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>
      </div>
      <button type="button" @click="login" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import movies from "@/assets/data/movies";

import MovieCard from "@/components/MovieCard";

export default {
  name: "MoviesList",
  components: {
    MovieCard,
  },
  data() {
    return {
      email: "",
      password: "",
      credentials: {
        email: "abcd",
        password: "1234",
      },
      toegang: true,
      moviesList: movies,
    };
  },
  methods: {
    login() {
      if (
        this.email === this.credentials.email &&
        this.password === this.credentials.password
      ) {
        this.toegang = true;
        alert("Welkom!");
      } else {
        alert("Verkeerde gegevens ingevoerd!");
      }
    },
  },
};
</script>

<style>
body {
  background-color: #f8aeda;
  background-image: url('https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#loginForm {
  align-items: center;
  margin-top: 50px;
}

#loginForm input {
  margin-bottom: 10px;
}
#loginForm button {
  margin-top: 10px;
}
#loginForm label {
  display: inline-block;
  width: 100px;
  margin-bottom: 5px;
}
/* col styling with border and a background color */
.col {
  background-color: #f8aeda;
}

.col p, .col h1 {
  text-align: start;
}
</style>
