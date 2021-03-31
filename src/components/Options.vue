<template>
  <div class="options">
    <Container
      title="Payment Options"
      subtitle="Choose a payment option"
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
  name: 'Options',
  components: {
    Container,
    List,
  },
  data() {
    return {
      listConfig: [
        {
          key: 'cards',
          icon: CardsLogo,
          name: 'Cards(Credit/Debit)',
        },
        {
          key: 'wallet',
          icon: WalletLogo,
          name: 'Wallet',
        },
        {
          key: 'bank',
          icon: BankLogo,
          name: 'Net Banking',
        },
        {
          key: 'upi',
          icon: UpiLogo,
          name: 'UPI',
        },
        {
          key: 'googlePay',
          icon: GooglePayLogo,
          name: 'Google Pay',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.options {
  width: 100%;
  height: 100%;
}
</style>
