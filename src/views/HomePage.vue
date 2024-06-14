<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300,400,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Merryweather:wght@300,400,700&display=swap" rel="stylesheet">
  <div class="file-container">
    <div v-for="file in files" :key="file.name">
      <div class="rectangle">
        <div class="rectangle-left">
          <div class="icon-container">
            <img v-for="icon in file.icons" :src="icon" :alt="icon" :key="icon" class="icon" />
          </div>
          <span class="text-main">{{ file.name }}</span>
          <span class="text">{{ file.description }}</span>
        </div>
        <div class="rectangle-right">
          <button class="button" @click="downloadFile(file.url)">Скачать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.file-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.rectangle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 175px;
  height: 350px;
  background-color: #eeeeee;
  padding: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.rectangle-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.rectangle-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.icon-container {
  display: flex;
}

.icon {
  width: 30px;
  height: 30px;
  padding-top: 0;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-main {
  padding-left: 0;
  padding-top: 10px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.text {
  padding-left: 0;
  padding-top: 10px;
  font-size: 14px;
  font-family: 'Merriweather', serif;
}

.button {
  color: white;
  font-weight: bold;
  font-size: large;
  background-color: #FE1507;
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
}
</style>

<script>
import jsonData from '@/jsons/applications.json';
export default {
  data() {
    return jsonData
  },
  methods: {
    downloadFile(url) {
      window.location.href = url;
    }
  }
};
</script>
