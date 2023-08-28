<template>
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <router-link to="/"><span class="red-text">МОП</span> <span class="black-text">ЭВМ</span></router-link>
        </div>
        <ul class="nav-links">
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
  
  .nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-links li {
    display: inline;
    margin: 40px;
  }
  
  .nav-links a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    background-color: #ddd;
    color: black;
  }
  </style>