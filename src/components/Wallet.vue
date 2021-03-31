<template>
  <div class="wallet">
    <Container
      title="Payment Options"
      subtitle="Choose your Wallet"
    >
      <List :listConfig="listConfig" />
    </Container>
  </div>
</template>

<script>
// 加载组件
import { Container, List } from '@/components/common';
// 加载接口
import { getWalletList } from '@/services/home';

export default {
  name: 'Wallet',
  components: {
    Container,
    List,
  },
  data() {
    return {
      listConfig: [],
    };
  },
  created() {
    this.getWalletList();
  },
  methods: {
    // 获取钱包列表
    getWalletList() {
      getWalletList().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.listConfig = data.walletList;
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wallet {
  width: 100%;
  height: 100%;
}
</style>
