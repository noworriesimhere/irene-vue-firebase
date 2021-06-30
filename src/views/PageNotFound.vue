<template>
  <main>
    <h1>Oh no!</h1>
    <p>Seems like this page doesn't exist</p>
    <router-link :to="{ name: 'Home' }">Back to the main page</router-link>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>