<template>
  <div id="app">
    <HereMap  :center="center" />
  </div>
</template>

<script>
import HereMap from './components/HereMap.vue'
export default {
  name: 'app',
  components: {
    HereMap
    // Remove the HelloWorld.vue
  },
  data() {
return {
    // Use this as prop to the HereMap component
  center:{
    lat: 52.51604,
    lng: 13.37691
  }
}

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
