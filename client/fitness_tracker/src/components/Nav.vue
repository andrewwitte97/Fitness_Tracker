<template>
  <div id="app">
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
            <router-link class="navbar-item" to ="/profile"><i class="fas fa-id-card"></i>Profile</router-link>
            <router-link class="navbar-item" to ="/excersize"><i class="fas fa-dumbbell"></i>Excersize</router-link>
            

          </div>

          <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="button is-primary" to="/signup">Sign Up</router-link>
              <router-link class="button is-light" to="/login">Log in</router-link>
              <router-link class="button is-light">Log out</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
  </div>
</template>