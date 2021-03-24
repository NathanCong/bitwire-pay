<template>
  <div id="app" class="fonts background">
    <div class="container">
      <router-view />
    </div>
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
  background-size: cover;
}

.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 212px;
}
</style>
