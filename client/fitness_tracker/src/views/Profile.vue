<template>
  <div class="profile">
    <h1>Profile</h1>
    <p>{{ username }}</p> 
    <form id="form">
      <table class="table">
        <tr>
          <td>First name</td>
          <td>
            <div class="control">
              <input class="input" type="text" :value="firstname"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Last name</td>
          <td>
            <div class="control">
              <input class="input" type="text" :value="lastname"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td>
            <div class="control">
              <input class="input" type="number" :value="age"/>
            </div>
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <div class="control">
              <div class="select">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <button id="submit" class="button is-link" type="submit">Submit Changes</button>
    </form>
  </div>
</template>

<script>
const axios = require('axios');
const root = 'http://localhost:3001/users';
export default {
  data () {
    return {
      username: '',
      firstname: '',
      lastname: ''
    }
  },
computed: {
    profile: function () {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age
      }
    }
  },




  async created () {
    this.username = this.$parent.username;

    let response;
    try {
      response = await axios.get(root + '/' + this.username + '/Profile');
      this.firstname = response.data.firstname;
      this.lastname = response.data.lastname;
      this.age = response.data.age;
    } catch (error){
      console.log(error);
    }
    },

    methods: {
  submit: async function () {
      let response;
      try {
        response = await axios.put(root + '/' + this.username + '/profile', {
          profile: this.profile
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

</script>

<style>
.table {
  margin: auto;
}
#submit {
  width: 300px;
}
</style>