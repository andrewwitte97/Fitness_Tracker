<template>
  <div class="excersize">
    Excersize log
    <br>
    <p>{{ username }}</p>
    <br>
    <label class="option-label">Date:</label>
    <input class="option-field" type="date" v-model="date"/>
    <label class="option-label">Activity:</label>
    <input class="option-field" type="text" v-model="activity"/>
    <label class="option-label">Description:</label>
    <input class="option-field" type="text" v-model="description"/>
    <button v-on:click="createEntry">Add Entry</button>
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
.add-button {
  margin-right: 10px;
  width: 60px;
}
.option-label {
  margin-right: 10px;
}
.option-field {
  margin-right: 20px;
}



</style>

<script>
  const axios = require('axios');
  const root = 'http://localhost:3001/users';

export default {



  data () {
    return {
        username: '',
        date: '',
        activity: '',
        description: '',
        log: []
    }
  },
  async created () {
    this.username = this.$parent.username;
    const response = await axios.get(root + '/' + this.username + '/log');
    this.log = response.data;
  },
  methods: {
    createEntry: async function () {
      console.log(this.log);
      const newEntry = {
        date: this.date,
        activity: this.activity,
        description: this.description
      }
      this.log.push(newEntry);
      let response;
      try {
        response = await axios.post(root + '/' + this.username + '/log', {
          log: this.log
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    deleteEntry: async function (index) {
      this.log.splice(index, 1);
let response;
      try {
        response = axios.post(root + '/' + this.username + '/log', {
          log: this.log
        });
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>