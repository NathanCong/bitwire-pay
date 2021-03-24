<template>
  <div id="app" class="fonts background">
    <!-- <router-view /> -->
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
}

.fonts {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  background-color: #ccc;
  background-image: url('~@/assets/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
