<template>
  <div class="options">
    <div class="options-title global-title">Payment Options</div>
    <SubTitle
      class="options-subtitle"
      value="Choose a payment option" />
    <Card class="options-list-wrapper" :opacity="0.8">
      <List :listConfig="listConfig" />
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
  name: 'Options',
  components: {
    SubTitle,
    Card,
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
  box-sizing: border-box;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  .options-title,
  .options-subtitle {
    padding-left: 56px;
  }
  .options-subtitle,
  .options-list-wrapper {
    margin-top: 20px;
    padding-top: 0;
  }
}
</style>
