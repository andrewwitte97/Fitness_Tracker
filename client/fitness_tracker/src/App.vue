<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/"><i class="fas fa-home"></i>Home</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
            <router-link class="navbar-item" to ="/friends"><i class="fas fa-user-friends"></i>Friends</router-link>
            <router-link class="navbar-item" :to="{ name: 'profile', params: { username: username} }" v-if="loggedIn"><i class="fas fa-id-card"></i>Profile</router-link>
            <router-link class="navbar-item" to ="/excersize"><i class="fas fa-dumbbell"></i>Excersize</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
               <router-link class="button is-info" to="/signup" v-if="!loggedIn">Sign Up</router-link>
                <router-link class="button is-light" to="/login" v-if="!loggedIn">Log in</router-link>
                <button class="button is-light" to="/" v-if="loggedIn" v-on:click="logOut">Log out</button>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <Autocomplete></Autocomplete>

    <router-view @loggedIn="onLogIn" />
    <Footer></Footer>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #ffaf01;
}
#nav a.router-link-exact-active {
  color: #73ee00;
}
</style>




<script>
import Footer from './components/Footer';
import Header from './components/Header';
import Autocomplete from './components/Autocomplete';

export default {
    name: 'app',
    components: {
      Footer,
      Header,
      Autocomplete
    },
    data () {
    return {
      loggedIn: false,
      username: ''
    };
  },
  methods: {
    onLogIn: function  (username) {
      this.loggedIn = true;
      this.username = username;
    },
    logOut: function () {
      this.loggedIn = false;
      this.username = '';
      this.$router.replace({ path: '/' })
    }
  }
};
</script>
