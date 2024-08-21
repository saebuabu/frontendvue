<template>
  <main class="Contact formulier">
    <h1>Contact pagina</h1>
    <form class="formulier">
      <label for="name">Naam:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="message">Bericht:</label>
      <textarea id="message" v-model="message" required></textarea>
      <button @click="submitForm" >Verstuur</button>
    </form>
    <div>
      <p>{{ getMsg }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      msg: ''
    }
  },
  computed: {
    getMsg() {
      return this.msg;
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      // check fields
      if (this.name === '' || this.email === '' || this.message === '') {
        this.msg = 'Vul alle velden in';
      } else {
        this.msg = 'Formulier is verstuurd en we reageren zo snel mogelijk';
        // clear fields
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
}
</script>

<style scoped>
.formulier {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>