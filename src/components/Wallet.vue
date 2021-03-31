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
// 加载图片
import CardsLogo from '@/assets/cards_logo.png';
import WalletLogo from '@/assets/wallet_logo.png';
import BankLogo from '@/assets/bank_logo.png';
import UpiLogo from '@/assets/upi_logo.png';
import GooglePayLogo from '@/assets/google_pay_logo.png';

export default {
  name: 'Wallet',
  components: {
    Container,
    List,
  },
  data() {
    return {
      listConfig: [
        {
          key: 'UPI',
          icon: CardsLogo,
          name: 'PhonePe/BHIM UPI',
        },
        {
          key: 'Paytm',
          icon: WalletLogo,
          name: 'Paytm',
        },
        {
          key: 'FreedCharge',
          icon: BankLogo,
          name: 'FreedCharge',
        },
        {
          key: 'OLA',
          icon: UpiLogo,
          name: 'OLA Money',
        },
        {
          key: 'Airtel',
          icon: UpiLogo,
          name: 'Airtel Money',
        },
        {
          key: 'Jio',
          icon: GooglePayLogo,
          name: 'Jio Money',
        },
        {
          key: 'search',
          icon: UpiLogo,
          name: 'Search for your wallet',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wallet {
  width: 100%;
  height: 100%;
}
</style>
