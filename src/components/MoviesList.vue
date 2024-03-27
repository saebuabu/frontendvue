<template>
  <div v-if="toegang">
    <h2>Films overzicht</h2>
    <div class="container-fluid">
      <div v-for="movie in moviesList" :key="movie.id" class="row">
        <div class="col col-12 col-md-4">
          <MovieCard :movie="movie" />
        </div>
        <div class="col col-12 col-md-6">
          <p><span>{{ movie.regisseur }}</span> - <em>
          {{ movie.genre }}</em></p>
          <p>{{ movie.samenvatting }}</p></div>
        <div class="col col-12 col-md-2">===</div>
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
</style>
