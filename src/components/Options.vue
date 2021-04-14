<template>
  <div class="options">
    <Container
      title="Payment Options"
      subtitle="Choose a payment option"
    >
      <Button
        class="kyc-button"
        @click="handleKycButtonClick()">KYC</Button>
      <List :listConfig="listConfig" />
    </Container>
  </div>
</template>

<script>
// 加载组件
import { Container, List, Button } from '@/components/common';
// 加载接口
import { getPaymentOptions } from '@/services/home';

export default {
  name: 'Options',
  components: {
    Container,
    List,
    Button,
  },
  data() {
    return {
      listConfig: [],
    };
  },
  created() {
    this.getPaymentOptions();
  },
  methods: {
    // 获取支付方式
    getPaymentOptions() {
      getPaymentOptions().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.listConfig = data.paymentOptions;
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // KYC 按钮点击事件
    handleKycButtonClick() {
      this.$router.push('/kyc1');
    },
  },
};
</script>

<style lang="less" scoped>
.options {
  width: 100%;
  height: 100%;
  position: relative;
  .kyc-button {
    position: absolute;
    top: 132px;
    right: 0;
    width: 120px;
    height: 70px;
    line-height: 70px;
    font-weight: normal;
    font-size: 32px;
  }
}
</style>
