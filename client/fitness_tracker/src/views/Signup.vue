<template>
  <div class="signup">
    <form>
      <div class="field">
        <label class="label">Please Enter a Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <label class="label">Please Enter a Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" />
        </div>
      </div>
      <div class="submit">
        <div class="control">
          <input id="submit" class="button is-link" type="submit" value="Sign Up">
        </div>
      </div>
    </form>
  </div>
</template>


<style>
.signup,
#submit {
  width: 300px;
  margin: auto;
}
</style>