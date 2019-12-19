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
              <input class="input" type="text" v-model="firstname">
            </div>
          </td>
        </tr>
        <tr>
          <td>Last name</td>
          <td>
            <div class="control">
              <input class="input" type="text" v-model="lastname">
            </div>
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td>
            <div class="control">
              <input class="input" type="number" v-model="age">
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
      lastname: '',
      age: '',
      gender: ''
    }
  },
computed: {
    profile: function () {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        gender: this.gender
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
      this.gender = response.data.gender;
    } catch (error){
      console.log(error);
    }
    },

    methods: {
  submit: async function () {
    console.log(this.profile);
      let response;
      try {
        response = await axios.post(root + '/' + this.username + '/profile', {
          profile: this.profile
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const Autocompletee = {
  name: "autocomplete",
  template: "#autocomplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: 0
    };
  },

  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.search);

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's search our flat array
        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {
      // first uncapitalize all the things
      this.results = this.items.filter(item => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};

</script>

<style>
.table {
  margin: auto;
}
#submit {
  width: 300px;
}
</style>