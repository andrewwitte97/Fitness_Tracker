<template>
  <div class="login">
    <form>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" />
        </div>
      </div>
      <div class="submit">
        <div class="control">
          <input id="submit" class="button is-link" type="submit" value="Log in">
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.login,
#submit {
  width: 300px;
  margin: auto;
}
</style>