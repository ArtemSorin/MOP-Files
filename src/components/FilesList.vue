<template>
    <div class="file-container">
      <div v-for="file in files" :key="file.id">
        <div class="rectangle">
          <div class="rectangle-left">
            <i class="icon"></i>
            <span class="text">{{ file.name }}</span>
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
    }
    
    .rectangle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      width: 150px;
      height: 300px;
      background-color: #CCCCCC;
      padding: 20px;
      margin-right: 5px;
    }
    
    .rectangle-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .icon {
      background-color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      padding-top: 0%;
    }
    
    .text {
      padding-left: 0px;
      padding-top: 10px;
    }
    
    .button {
      color: white;
      font-weight: bold;
      font-size: large;
      background-color: #FE1507;
      border: none;
      width: 100%;
      padding: 10px 20px;
      border-radius: 5px;
    }
  </style>
  
  <script>
    export default {
      data() {
          return {
            files: [{
              id: 1,
              name: 'Образец отчёта МОП ЭВМ.docx',
              url: '/files/Образец отчёта МОП ЭВМ.docx',
              description: '',
              icon: '',
              btncolor: '',
            }, {
              id: 2,
              name: 'Cisco Packet Tracer 6.2.zip',
              url: '/files/Cisco Packet Tracer 6.2.zip',
              description: '',
              icon: '',
              btncolor: '',
            }, {
              id: 3,
              name: 'NxtStudio.zip',
              url: '/files/NxtStudio.zip',
              description: '',
              icon: '',
              btncolor: '',
            }, {
              id: 4,
              name: 'Spin.zip',
              url: '/files/Spin.zip',
              description: '',
              icon: '',
              btncolor: '',
            }, {
              id: 5,
              name: 'VisualDSP++.zip',
              url: '/files/VisualDSP++.zip',
              description: '',
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