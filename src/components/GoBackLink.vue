<template>
  <div class="go-back-link">
    <span class="go-back-link-icon"></span>
    <span class="go-back-link-text">Back</span>
  </div>
</template>

<script>
export default {
  name: 'GoBackLink',
};
</script>

<style lang="less" scoped>
.go-back-link {
  display: flex;
  justify-content: center;
  align-items: center;
  .go-back-link-icon {
    width: 36px;
    height: 38px;
    background-image: url('~@/assets/back_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 20px;
  }
  .go-back-link-text {
    font-size: 36px;
    color: #fff;
  }
}
</style>
