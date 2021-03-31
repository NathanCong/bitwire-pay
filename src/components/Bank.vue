<template>
  <div class="bank">
    <div class="bank-title global-title">Payment Options</div>
    <SubTitle
      class="bank-subtitle"
      value="Choose your Bank" />
    <Card class="bank-list-wrapper" :opacity="0.8">
      <List class="bank-list" :listConfig="listConfig" />
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
  name: 'Bank',
  components: {
    SubTitle,
    Card,
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
  box-sizing: border-box;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  .bank-title,
  .bank-subtitle {
    padding-left: 56px;
  }
  .bank-subtitle,
  .bank-list-wrapper {
    margin-top: 20px;
    padding-top: 0;
  }
}
</style>
