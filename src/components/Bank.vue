<template>
  <div class="bank">
    <Container
      title="Payment Options"
      subtitle="Choose your Bank"
    >
      <List :listConfig="listConfig" />
    </Container>
  </div>
</template>

<script>
// 加载组件
import { Container, List } from '@/components/common';
// 加载接口
import { getBankList } from '@/services/home';

export default {
  name: 'Bank',
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
    this.getBankList();
  },
  methods: {
    // 获取银行列表
    getBankList() {
      getBankList().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.listConfig = data.bankList;
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.bank {
  width: 100%;
  height: 100%;
}
</style>
