<template>
    <div class="file-container">
      <div v-for="file in files" :key="file.id">
        <div class="rectangle">
          <div class="rectangle-left">
            <i class="icon"></i>
            <span class="text">{{ file.name }}</span>
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
    }
    
    .rectangle-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .icon {
      background-image: '/icons/apple.png';
      background-color: #FE1507;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      padding-top: 0%;
    }
    
    .text {
      padding-left: 0px;
      padding-top: 10px;
      font-size: 14px;
    }
    
    .button {
      color: white;
      font-weight: bold;
      font-size: large;
      background-color: #FE1507;
      border: none;
      width: 100%;
      padding: 10px 20px;
    }
  </style>
  
  <script>
    export default {
      data() {
          return {
            files: [{
              id: 1,
              name: 'Образец отчёта МОП ЭВМ',
              url: '/files/Образец отчёта МОП ЭВМ.docx',
              description: 'Шаблон отчёта по лабораторным работам.',
              icon: '',
              btncolor: '',
            }, {
              id: 2,
              name: 'Cisco Packet Tracer 6.2',
              url: '/files/Cisco Packet Tracer 6.2.zip',
              description: 'Симулятор сети передачи данных, выпускаемый фирмой Cisco Systems. Позволяет делать работоспособные модели сети, настраивать маршрутизаторы и коммутаторы, взаимодействовать между несколькими пользователями.',
              icon: '',
              btncolor: '',
            }, {
              id: 3,
              name: 'NxtStudio',
              url: '/files/NxtStudio.zip',
              description: 'Симулятор программирования и настройки элементов промышленной автоматики с использованием стандарта IEC 61669.',
              icon: '',
              btncolor: '',
            }, {
              id: 4,
              name: 'Spin',
              url: '/files/Spin.zip',
              description: 'Комплексное средство для верификации и симуляции описаний на языке Promela. iSpin был создан разработчиками Spin и распространяется по той же лицензии.',
              icon: '',
              btncolor: '',
            }, {
              id: 5,
              name: 'VisualDSP++',
              url: '/files/VisualDSP++.zip',
              description: 'Интегральная Среда Разработки и Отладки (IDDE). Она позволяет удобно управлять разработкой прикладной программы для ЦСП ADSP-21xx от начала до конца.',
              icon: '',
              btncolor: '',
            }, ],
          };
        },
        methods: {
          downloadFile(url) {
            window.location.href = url;
          }
        }
    };
  </script>