<template>
  <div class="drawer-list">
    <section
      v-for="item in listConfig"
      :key="item.key"
      class="drawer-list-item"
    >
      <div
        :class="['drawer-list-item-title', status[item.key] ? 'actived' : '']"
        @click="handleDrawerListItemClick(item)"
      >
        <img class="drawer-list-item-icon" :src="item.icon" />
        <span class="drawer-list-item-text">{{ item.name }}</span>
      </div>
      <div class="drawer-list-item-inner" v-if="status[item.key]">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DrawerList',
  props: {
    listConfig: { // 列表配置
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      status: {},
      currentKey: '',
    };
  },
  watch: {
    listConfig(newList) {
      const newStatus = {};
      newList.forEach((item) => {
        newStatus[item.key] = false;
      });
      this.status = newStatus;
    },
  },
  methods: {
    handleDrawerListItemClick(item = {}) {
      if (this.currentKey && this.currentKey !== item.key) {
        this.status[this.currentKey] = false;
      }
      this.status[item.key] = !this.status[item.key]; // 修改状态
      this.currentKey = item.key;
      this.$emit('listItemClick', item); // 暴露方法
    },
  },
};
</script>

<style lang="less" scoped>
.drawer-list {
  width: 100%;
  height: 100%;
  .drawer-list-item {
    border-bottom: 1px solid #f9f0ea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-child {
      border-bottom: none;
    }
    .drawer-list-item-title {
      width: 100%;
      height: 140px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      &::after {
        content: '';
        width: 18px;
        height: 32px;
        background-image: url('~@/assets/arrow.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
      }
      &.actived::after {
        transform: translateY(-50%) rotate(90deg);
      }
      .drawer-list-item-icon {
        width: 53px;
        height: auto;
        padding-left: 6px;
        padding-right: 36px;
        border-radius: 4px;
      }
      .drawer-list-item-text {
        color: #cb7940;
        font-size: 38px;
      }
    }
    .drawer-list-item-inner {
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
</style>
