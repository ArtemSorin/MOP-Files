<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <FilesList />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FilesList from './components/FilesList.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FilesList,
  },
};
</script>