<template>
  <div class="container">
    <!-- 标题 -->
    <div class="container-title global-title" v-if="title">{{ title }}</div>
    <!-- 副标题 -->
    <div class="container-subtitle global-subtitle" v-if="subtitle">{{ subtitle }}</div>
    <!-- 卡片内容 -->
    <Card class="container-card" :opacity="0.8" :borderRadius="40">
      <slot></slot>
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Container',
  components: {
    Card,
  },
  props: {
    title: { // 标题
      type: String,
      required: false,
      default: '',
    },
    subtitle: { // 副标题
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .container-title {
    padding-top: 82px;
    padding-left: 54px;
  }
  .container-subtitle {
    padding-top: 30px;
    padding-left: 54px;
  }
  .container-card {
    padding: 0 50px;
    margin-top: 30px;
  }
}
</style>
