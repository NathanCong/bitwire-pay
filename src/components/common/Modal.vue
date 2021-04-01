<template>
  <div class="modal" v-if="visible">
    <div class="modal-box">
      <div class="modal-header">{{ title }}</div>
      <div class="modal-main">
        <div class="modal-content">
          <slot></slot>
        </div>
        <div class="modal-buttons">
          <Button
            class="modal-button"
            @click="handleCancelClick()">CANCEL</Button>
          <Button
            class="modal-button"
            @click="handleOkClick()">OK</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Modal',
  components: {
    Button,
  },
  props: {
    title: { // 模态框标题
      type: String,
      required: true,
      default: 'This is a Modal',
    },
    visible: { // 模态框可见性
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    // 取消按钮事件
    handleCancelClick() {
      this.$emit('cancel');
    },
    // 确认按钮事件
    handleOkClick() {
      this.$emit('ok');
    },
  },
};
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-box {
    width: 844px;
    height: 640px;
    border-radius: 40px;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .modal-header {
      width: 100%;
      height: 108px;
      background-color: #d38343;
      color: #f6f1f7;
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-main {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 80px;
      display: flex;
      flex-direction: column;
      .modal-content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;
        .modal-button {
          width: 320px;
          height: 89px;
          background-color: #ec793c;
          font-size: 38px;
          border-radius: 14px;
          margin: 0 14px;
        }
      }
    }
  }
}
</style>
