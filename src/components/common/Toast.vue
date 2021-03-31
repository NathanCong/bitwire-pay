<template>
  <div class="toast" v-show="visible">
    <div class="toast-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      visible: false,
      content: 'This is test toast',
      duration: 0,
      timer: null,
    };
  },
  watch: {
    duration(time) {
      if (time > 0 && !this.timer) {
        this.visible = true;
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          this.visible = false;
          this.content = '';
          this.duration = 0;
          this.timer = null;
        }, time);
      }
    },
  },
  created() {
    this.registerListener();
  },
  beforeDestroy() {
    this.unRegisterListener();
  },
  methods: {
    // 注册监听事件
    registerListener() {
      this.$bus.$on('show:toast', (config = {}) => {
        const { content, duration } = config || {};
        this.content = content;
        this.duration = duration;
      });
    },
    // 解除注册监听事件
    unRegisterListener() {
      this.$bus.$off('show:toast');
    },
  },
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .toast-content {
    width: 1125px;
    height: 100px;
    background-image: url('~@/assets/toast_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
