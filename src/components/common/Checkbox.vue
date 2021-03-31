<template>
  <div
    class="checkbox"
    :value="value"
    @click="$emit('click', !value)"
  >
    <span class="checkbox-square">
      <span class="checkbox-check" v-show="value"></span>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'value',
    event: 'click',
  },
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  .checkbox-square {
    width: 38px;
    height: 38px;
    background-color: #ded7d4;
    border-radius: 8px;
    margin-right: 13px;
    position: relative;
    .checkbox-check {
      width: 39px;
      height: 38px;
      background-image: url('~@/assets/check.png');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 4px;
      left: 0;
    }
  }
}
</style>
