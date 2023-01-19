<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>
<template lang="">
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>
<style lang="scss">
    @use './components/styles/general.scss' as *

</style>