<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <span class="red-text">МОП</span><span class="black-text">Files</span>
      </div>
      <ul class="nav-buttons">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ANavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #FFFFFF;
  height: 80px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 20px;
  color: black;
}

.red-text {
  color: red;
}

.black-text {
  color: black;
}

.nav-buttons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-buttons li {
  display: inline-block;
  margin: 40px;
}

.nav-buttons a {
  background-color: transparent;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.nav-buttons a:hover {
  color: red;
}
</style>
