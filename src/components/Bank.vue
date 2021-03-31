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
// 加载图片
import CardsLogo from '@/assets/cards_logo.png';
import WalletLogo from '@/assets/wallet_logo.png';
import BankLogo from '@/assets/bank_logo.png';
import UpiLogo from '@/assets/upi_logo.png';
import GooglePayLogo from '@/assets/google_pay_logo.png';

export default {
  name: 'Bank',
  components: {
    Container,
    List,
  },
  data() {
    return {
      listConfig: [
        {
          key: 'AXIS',
          icon: CardsLogo,
          name: 'AXIS Bank',
        },
        {
          key: 'HDFC',
          icon: WalletLogo,
          name: 'HDFC Bank',
        },
        {
          key: 'ICICI',
          icon: BankLogo,
          name: 'ICICI Bank',
        },
        {
          key: 'State',
          icon: UpiLogo,
          name: 'State Bank of India',
        },
        {
          key: 'Kotak',
          icon: UpiLogo,
          name: 'Kotak Mahindra Bank',
        },
        {
          key: 'Airtel',
          icon: GooglePayLogo,
          name: 'Airtel Payments Bank',
        },
        {
          key: 'search',
          icon: UpiLogo,
          name: 'Search for your bank',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bank {
  width: 100%;
  height: 100%;
}
</style>
