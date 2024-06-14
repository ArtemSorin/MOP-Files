<template>
  <div class="about-container">
    <div class="about-title">
      <span class="red-text">МОП</span><span class="black-text">Files</span>
    </div>
    <p class="about-text">Сайт для удобного скачивания и активации необходимых программ для учебных курсов на мопе.</p>
  </div>
</template>

<script>
export default {
  // ...
}
</script>

<style>
.about-container {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.about-title {
  font-weight: bold;
  font-size: 2.4em;
  margin-left: 20px;
  color: black;
}

.red-text {
  color: red;
}

.black-text {
  color: black;
}

.about-text {
  font-size: 1.2rem;
}
</style>
