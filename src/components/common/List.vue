<template>
  <div class="list">
    <section
      class="list-item"
      v-for="item in listConfig"
      :key="item.key"
      @click="handleListItemClick(item)">
      <img class="list-item-icon" :src="item.icon" />
      <span class="list-item-text">{{ item.name }}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    listConfig: { // 列表配置
      type: Array,
      required: true,
    },
  },
  methods: {
    handleListItemClick(item = {}) {
      const { path, link, callback } = item || {};
      if (typeof callback === 'function') { // 回调函数优先处理
        callback(item);
        return;
      }
      if (typeof link === 'string' && link) { // 跳转外部链接
        window.location.href = link;
        return;
      }
      if (typeof path === 'string' && path) { // 跳转内部路由
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .list-item {
    flex: 1;
    // max-height: 140px;
    box-sizing: border-box;
    background-image: url('~@/assets/arrow.png');
    background-repeat: no-repeat;
    background-size: 18px 32px;
    background-position: right 18px center;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f9f0ea;
    &:last-child {
      border-bottom: none;
    }
    .list-item-icon {
      width: 53px;
      height: auto;
      padding-left: 6px;
      padding-right: 36px;
      border-radius: 4px;
    }
    .list-item-text {
      color: #cb7940;
      font-size: 38px;
    }
  }
}
</style>
