<template>
  <div class="signup">
      <div class="field">
        <label class="label">Please Enter a First name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First name" v-model="firstname" />
        </div>
      </div>

      <div class="field">
        <label class="label">Please Enter a Last name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last name" v-model="lastname" />
        </div>
      </div>

      <div class="field">
        <label class="label">Please Enter a Age</label>
        <div class="control">
          <input class="input" type="number" placeholder="Age" v-model="age" />
        </div>
      </div>

      <div class="field">
        <label class="label">Gender</label>
        <div class="control">
          <div class="select">
            <select id="select" v-model="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </div>
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
          <button id="submit" class="button is-link" v-on:click="createUser">Sign Up</button>
        </div>
      </div>
      <p class="status">{{ status }}</p>
  </div>
</template>


<style>
.signup,
#submit {
  width: 300px;
  margin: auto;
}
.status {
  color: red;
}
</style>


<script>
const axios = require('axios');
const root = 'http://localhost:3001/users';
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
      username: '',
      password: '',
      status: ''
    }
  },
  computed: {
    formIsValid: function () {
      return (this.firstname && this.lastname && this.age && this.gender && this.username && this.password);
    },
    user: function () {
      return {
        authentication: {
          username: this.username,
          password: this.password
        },
        profile: {
          firstname: this.firstname,
          lastname: this.lastname,
          age: this.age,
          gender: this.gender
        }
      }
    }
  },
  methods: {
    createUser: async function () {
      const username = this.user.authentication.username;
      let response;
      try {
        response = await axios.get(root + '/' + username);
      } catch (error) {
        console.log(error);
      }
      if (response) {
        console.log('true');
        this.status = 'Username already exists!';
      } else {
        console.log('false');
        this.status = '';
        try {
          response = await axios.post(root, {
            user: this.user
          });
          console.log(response);
        } catch (error) {
          console.log(error)
          this.status = 'Could not connect to server!';
        }
      }
    }
  }
}
</script>