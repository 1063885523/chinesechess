<template>
  <div id="home">
    <BottomMap />
  </div>
</template>

<script>
// @ is an alias to /src
import BottomMap from '@/components/BottomMap.vue'

export default {
  name: 'Home',
  components: {
    BottomMap
  }
}
</script>
<style lang="scss" scoped>
  #home {
    position: fixed;
    background-color: rgb(149, 184, 181);
    width: 100%;
    height: 100%;
  }
</style>