<template>
  <div class="about">
    <h1>Welcome to Fitness Tracker!<br>
    </h1>

    <section class="hero is-small is-info is-bold">
  <div class="hero-body">
     <div class="container">
       <v-select :options="options"></v-select>

    <p>

      This is an application developed to keep track of Fitness.<br>
      Within this app you will be able to keep track of your fitness,<br>
      as well as see what your friends have been doing.
      
      </p>
    </div>
    </div>


  <figure class="image is-128x128 " >
  <img src="https://www.shareicon.net/data/256x256/2016/08/03/806247_people_512x512.png">
</figure>
</section>
    

  </div>
</template>

<script>

const axios = require('axios');
const root = 'http://localhost:3001/users';

export default {
  data: ()=> ({
    options: ['user', 'firstname']
  })
}
</script>