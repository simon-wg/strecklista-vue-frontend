<script setup lang="ts">
// Handle form submission with a function

const emits = defineEmits(['login'])

const handleSubmit = (event: Event) => {
  // Prevent default behaviour of form submission
  event.preventDefault()

  // Get the username and password from the form
  const username = (document.getElementById('username') as HTMLInputElement).value
  const password = (document.getElementById('password') as HTMLInputElement).value

  // Log the username and password to the console
  emits('login', {'username': username, 'password': password})
}
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit="handleSubmit">
      <span class="left-align">Username</span>
      <input id="username" type="text" autocomplete="username"/>
      <span class="left-align">Password</span>
      <input id="password" type="password" autocomplete="current-password"/>
      <button class="submit" type="submit">
        <i class="fas fa-arrow-right"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.left-align {
  align-self: flex-start;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  place-content: center;

  max-width: 500px;

  border-radius: 1em;
  background-color: var(--color-background);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
form {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 100%;
}
input {
  font-size: 15px;
  width: 100%;
  padding: 1em;
  margin-bottom: 2em;
  border-radius: 0.5em;
  border: none;
  background-color: var(--color-primary);
  color: var(--color-text);
}
.submit {
  margin-top: 1em;
  padding: 1em;
  border-radius: 0.5em;
  border: none;
  background-color: var(--color-primary);
  color: var(--color-text);
  font-size: 2em;
  font-weight: 600;
}
.submit:active {
  filter: brightness(0.9);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  transform: translateY(4px);

}
input, button {
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
}


</style>