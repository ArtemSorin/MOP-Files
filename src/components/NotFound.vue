<template>
  <div class="error-container">
    <div class="image-container">
      <img src="@/assets/khus.svg" alt="Your Image">
    </div>
    <div class="error-text">404 not found</div>
  </div>
</template>

<script>
export default {
  // ...
}
</script>

<style>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 50px auto;
}

.image-container {
  width: 100%;
  height: auto;
}

.error-text {
  font-family: 'Inter', sans-serif;
  width: 100%;
  font-weight: 900;
  text-align: center;
  color: red;
  font-size: 24px;
  margin-top: 16px;
}
</style>
