<template>
  <div class="wallet">
    <div class="wallet-title global-title">Payment Options</div>
    <SubTitle
      class="wallet-subtitle"
      value="Choose your Wallet" />
    <Card class="wallet-list-wrapper" :opacity="0.8">
      <List class="wallet-list" :listConfig="listConfig" />
    </Card>
  </div>
</template>

<script>
import SubTitle from '@/components/common/SubTitle.vue';
import Card from '@/components/common/Card.vue';
import List from '@/components/common/List.vue';
import CardsLogo from '@/assets/cards_logo.png';
import WalletLogo from '@/assets/wallet_logo.png';
import BankLogo from '@/assets/bank_logo.png';
import UpiLogo from '@/assets/upi_logo.png';
import GooglePayLogo from '@/assets/google_pay_logo.png';

export default {
  name: 'Wallet',
  components: {
    SubTitle,
    Card,
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
  box-sizing: border-box;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  .wallet-title,
  .wallet-subtitle {
    padding-left: 56px;
  }
  .wallet-subtitle,
  .wallet-list-wrapper {
    margin-top: 20px;
    padding-top: 0;
  }
}
</style>
