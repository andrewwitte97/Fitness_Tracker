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
    <p style="color: red">{{ test }}</p>
  </div>
</template>

<style>
.login,
#submit {
  width: 300px;
  margin: auto;
}
.error {
  color: "red"
}
</style>

<script>
const axios = require('axios');
const root = 'http://localhost:3001/users';
export default {
  data () {
    return {
      loggedIn: false,
      username: 'test',
      password: 'test',
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
        .get(`${root}/${this.username}/authentication`)
        .then((response) => {
          const auth = response.data;
          if (this.password === auth.password) {
            this.$emit('loggedIn', auth.username);
            this.$router.replace({ path: '/' });
          } else {
            this.test = 'Username or password is incorrect!';
          }
        })
        .catch(this.test = 'Could not connect to server!');
    }
  }
}
</script>