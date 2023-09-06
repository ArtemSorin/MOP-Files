<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300,400,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300,400,700&display=swap" rel="stylesheet">
  <div class="file-container">
    <div v-for="file in files" :key="file.id">
      <div class="rectangle">
        <div class="rectangle-left">
          <div class="icon-container">
            <img v-for="icon in file.icons" :src="icon" :alt="icon" :key="icon" class="icon" />
          </div>
          <span class="textmain">{{ file.name }}</span>
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
  align-items: left;
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
}

.icon-container {
  display: flex;
}

.icon {
  width: 30px;
  height: 30px;
  padding-top: 0%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.w-icon {
  width: 100%;
  height: 100%;
}

.textmain {
  padding-left: 0px;
  padding-top: 10px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.text {
  padding-left: 0px;
  padding-top: 10px;
  font-size: 14px;
  font-family: 'Merriweather', serif;
}

.button {
  color: white;
  font-weight: bold;
  font-size: large;
  background-color: #FE1507;
  border: none;
  width: 100%;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
}
</style>
  
<script>
export default {
  data() {
    return {
      files: [{
        id: 1,
        name: 'Образец отчёта МОП ЭВМ',
        url: 'https://disk.yandex.ru/i/vtWuZApuTHSqKQ',
        description: 'Шаблон отчёта по лабораторным работам.',
        icons: ['icons/word.svg'],
        btncolor: '',
      }, {
        id: 2,
        name: 'Cisco Packet Tracer',
        url: 'https://disk.yandex.ru/d/nqeNDikLX0b3RQ',
        description: 'Симулятор сети передачи данных, выпускаемый фирмой Cisco Systems. Позволяет делать работоспособные модели сети, настраивать маршрутизаторы и коммутаторы, взаимодействовать между несколькими пользователями.',
        icons: ['icons/windows.svg', 'icons/macos.svg', 'icons/linux.svg'],
        btncolor: '',
      }, {
        id: 3,
        name: 'NxtStudio',
        url: 'https://disk.yandex.ru/d/4gSYm9tzs79cwA',
        description: 'Симулятор программирования и настройки элементов промышленной автоматики с использованием стандарта IEC 61669.',
        icons: ['icons/windows.svg'],
        btncolor: '',
      }, {
        id: 4,
        name: 'Spin',
        url: 'https://disk.yandex.ru/d/BJbWMbQOj4w87g',
        description: 'Комплексное средство для верификации и симуляции описаний на языке Promela. iSpin был создан разработчиками Spin и распространяется по той же лицензии.',
        icons: ['icons/windows.svg', 'icons/macos.svg', 'icons/linux.svg'],
        btncolor: '',
      }, {
        id: 5,
        name: 'VisualDSP++',
        url: 'https://disk.yandex.ru/d/zH_rkQWFKuw_CA',
        description: 'Интегральная Среда Разработки и Отладки (IDDE). Она позволяет удобно управлять разработкой прикладной программы для ЦСП ADSP-21xx от начала до конца.',
        icons: ['icons/windows.svg'],
        btncolor: '',
      }, {
        id: 6,
        name: 'DOSBox',
        url: 'https://disk.yandex.ru/d/56a5k7D_lkahzQ',
        description: 'Эмулятор ПК под управлением старой операционной системы MS DOS.',
        icons: ['icons/windows.svg', 'icons/macos.svg', 'icons/linux.svg'],
        btncolor: '',
      }, {
        id: 7,
        name: 'STM32Cube IDE 1.7.0',
        url: 'https://disk.yandex.ru/d/OatZkQWKtcrFcA',
        description: 'Универсальный инструмент разработки для нескольких ОС, который является частью программной экосистемы STM32Cube.',
        icons: ['icons/windows.svg', 'icons/macos.svg', 'icons/linux.svg'],
        btncolor: '',
      },],
    };
  },
  methods: {
    downloadFile(url) {
      window.location.href = url;
    }
  }
};
</script>