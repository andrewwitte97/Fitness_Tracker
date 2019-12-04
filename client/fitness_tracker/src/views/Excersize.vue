<template>
  <div class="excersize">
    Excersize log
    <br>
    <p>{{ username }}</p>
    <br>
    <form>
      <label for="date">Select Date:</label>
      <input type="date" id="date" name="log-date" />
      <br>
      <br>
      <input id="button" class="button is-link" type="submit" value="Get Entries"/>
      <br>
      <br>
      <button id="button" class="button is-primary">Show All</button>
    </form>
    <table class="table">
      <thead>
        <tr>
          <th>
            Date
          </th>
          <th>
            Activity
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tr v-for="entry in log" v-bind:key="entry.date">
        <td>
          {{ entry.date }}
        </td>
        <td>
          {{ entry.activity }}
        </td>
        <td>
          {{ entry.description }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
#button {
  width: 200px;
}
.table {
  margin: auto;
}
</style>

<script>
  const axios = require('axios');
  const root = 'http://localhost:3001/users';

export default {



  data () {
    return {
        username: '',
        log: []
    }
  },
  async created () {
    this.username = this.$parent.username;
    const response = await axios.get(root + '/' + this.username + '/log');
    this.log = response.data;
  }
}
</script>