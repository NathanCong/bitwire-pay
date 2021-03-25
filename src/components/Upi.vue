<template>
  <div class="upi">
    <Title
      class="upi-title"
      value="Payment Options" />
    <SubTitle
      class="upi-subtitle"
      value="Choose your UPI" />
    <Card class="upi-panel-wrapper" :opacity="0.8">
      <div class="upi-panel">
        <List class="upi-list" :listConfig="listConfig" />
        <div class="upi-form">
          <section class="upi-form-item">
            <Row>
              <Input
                class="upi-form-input"
                type="text"
              />
              <span class="upi-form-input-text">@paytm</span>
            </Row>
          </section>
          <section class="upi-form-item">
            <Row>
              <Checkbox class="upi-form-checkbox" />
              <span class="upi-form-checkbox-text">
                Save this option securly for faster payment
              </span>
            </Row>
          </section>
          <section class="upi-form-item no-mb">
            <Button class="upi-form-button">Proceed</Button>
          </section>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Title from '@/components/common/Title.vue';
import SubTitle from '@/components/common/SubTitle.vue';
import Card from '@/components/common/Card.vue';
import List from '@/components/common/List.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
import Row from '@/components/common/Row.vue';
import Checkbox from '@/components/common/Checkbox.vue';
import CardsLogo from '@/assets/cards_logo.png';
import WalletLogo from '@/assets/wallet_logo.png';
import BankLogo from '@/assets/bank_logo.png';
import UpiLogo from '@/assets/upi_logo.png';

export default {
  name: 'Upi',
  components: {
    Title,
    SubTitle,
    Card,
    List,
    Input,
    Button,
    Row,
    Checkbox,
  },
  data() {
    return {
      listConfig: [
        {
          key: 'Google Pay',
          icon: CardsLogo,
          name: 'Google Pay',
        },
        {
          key: 'Phone Pe',
          icon: WalletLogo,
          name: 'Phone Pe',
        },
        {
          key: 'BHIM',
          icon: BankLogo,
          name: 'BHIM',
        },
        {
          key: 'Paytm',
          icon: UpiLogo,
          name: 'Paytm',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.upi {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  .upi-title,
  .upi-subtitle {
    padding-left: 56px;
  }
  .upi-subtitle,
  .upi-panel-wrapper {
    margin-top: 20px;
    padding-top: 0;
    .upi-panel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .upi-form {
        width: 100%;
        height: 260px;
        margin-top: 20px;
        .upi-form-input {
          height: 70px;
          line-height: 70px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          padding-right: 0;
        }
        .upi-form-input-text {
          font-size: 28px;
          color: #fff;
          background-color: #ded7d4;
          line-height: 70px;
          height: 70px;
          box-sizing: border-box;
          padding: 0 25px;
          border-radius: 8px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .upi-form-checkbox {
          margin-right: 10px;
        }
        .upi-form-checkbox-text {
          font-size: 28px;
          color: #d28f64;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>
