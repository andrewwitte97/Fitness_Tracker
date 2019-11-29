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
              <input class="input" type="number"/>
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
const root = 'http://localhost:3000/users';
export default {
  data () {
    return {
      username: '',
      firstname: '',
      lastname: ''
    }
  },
  created () {
    this.username = this.$route.params.username;
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