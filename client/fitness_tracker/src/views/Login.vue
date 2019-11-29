<template>
  <div class="login">
      <form v-on:submit="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="username"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="password"/>
        </div>
      </div>
      <div class="submit">
        <div class="control">
          <button id="submit" class="button is-link" type="submit">Log in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.login,
#submit {
  width: 300px;
  margin: auto;
}
</style>

<script>
const axios = require('axios');
const root = 'http://localhost:3000/users';
const errorMessage = 'Username or password is incorrect!'
export default {
  data () {
    return {
      loggedIn: false,
      username: '',
      password: '',
      test: ''
    }
  },
  computed: {
    formIsValid: function () {
      return (this.username && this.password);
    }
  },
  methods: {
    login: function () {
      axios
        .get(`${root}/${this.username}`)
        .then((response) => {
          const user = response.data;
          if (this.password === user.password) {
            this.$emit('loggedIn', user.username);
            this.$router.replace({ path: '/' });
          } else {
            this.test = errorMessage
          }
        })
        .catch(this.test = errorMessage);
    }
  }
}
</script>