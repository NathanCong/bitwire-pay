<template>
  <div class="upi">
    <Container
      title="Payment Options"
      subtitle="Choose your UPI"
    >
      <div class="upi-content">
        <div class="upi-list">
          <List :listConfig="listConfig" />
        </div>
        <div class="upi-form">
          <section class="upi-form-item">
            <Row>
              <Input class="upi-form-input" type="text" />
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
          <section class="upi-form-item">
            <Button class="upi-form-button">Proceed</Button>
          </section>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
// 加载组件
import {
  Container,
  List,
  Input,
  Button,
  Row,
  Checkbox,
} from '@/components/common';
// 加载图片
import CardsLogo from '@/assets/cards_logo.png';
import WalletLogo from '@/assets/wallet_logo.png';
import BankLogo from '@/assets/bank_logo.png';
import UpiLogo from '@/assets/upi_logo.png';

export default {
  name: 'Upi',
  components: {
    Container,
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
  .upi-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 66px;
  }
  .upi-list {
    flex: 1;
    border-bottom: 1px solid #f9f0ea;
  }
  .upi-form {
    .upi-form-item {
      padding-top: 30px;
    }
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
      color: #d28f64;
      font-size: 28px;
    }
  }
}
</style>
