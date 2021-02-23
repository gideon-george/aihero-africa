<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import AOS from 'aos'
import { focusHandling } from 'cruip-js-toolkit'

export default {
  name: 'App',
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
    focusHandling()
    // Route change
    if (this.$router) {
      this.$watch('$route', () => {
        focusHandling()
      });
    }    
  }  
}
</script>
