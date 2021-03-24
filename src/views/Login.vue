<template>
  <div class="login">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  name: 'Login',
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>
