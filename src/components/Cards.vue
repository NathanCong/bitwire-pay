<template>
  <div class="cards">
    <Container
      title="Payment Options"
      subtitle="Type your card to continue"
    >
      <div class="cards-form-wrapper">
        <div class="cards-form">
          <section class="cards-form-item">
            <Label value="Card Number" />
            <Input
              class="cards-form-input"
              type="text"
              placeholder="Enter Card Number"
              v-model="cardNumber"
            />
          </section>
          <Row>
            <section class="cards-form-item pr-14">
              <Label value="Expiry" />
              <Input
                class="cards-form-input"
                type="text"
                placeholder="MM/YY"
                v-model="expiry"
              />
            </section>
            <section class="cards-form-item pl-14">
              <Label value="CVV" />
              <Input
                class="cards-form-input"
                type="text"
                placeholder="Enter CVV"
                v-model="cvv"
              />
            </section>
          </Row>
          <section class="cards-form-item">
            <Label value="Name on Card" />
            <Input
              class="cards-form-input"
              type="text"
              placeholder="Enter Card Name"
              v-model="cardName"
            />
          </section>
          <section class="cards-form-item">
            <Checkbox v-model="isSave">
              <span class="cards-form-checkbox-text">
                Save this option securly for faster payment
              </span>
            </Checkbox>
          </section>
          <Button
            class="cards-form-button"
            @click="handleSubmitClick()">Proceed</Button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
// 加载组件
import {
  Container,
  Label,
  Input,
  Button,
  Row,
  Checkbox,
} from '@/components/common';
// 加载接口
import { submitCard } from '@/services/home';

export default {
  name: 'Cards',
  components: {
    Container,
    Label,
    Input,
    Button,
    Row,
    Checkbox,
  },
  data() {
    return {
      cardNumber: '',
      expiry: '',
      cvv: '',
      cardName: '',
      isSave: false,
    };
  },
  methods: {
    handleSubmitClick() {
      const {
        cardNumber, expiry, cvv, cardName, isSave,
      } = this;
      if (!cardNumber) {
        this.$toast({ content: 'Card Number can\'t be empty', duration: 1000 });
        return;
      }
      if (!expiry) {
        this.$toast({ content: 'Expiry can\'t be empty', duration: 1000 });
        return;
      }
      if (!cvv) {
        this.$toast({ content: 'CVV can\'t be empty', duration: 1000 });
        return;
      }
      if (!cardName) {
        this.$toast({ content: 'Name on Card can\'t be empty', duration: 1000 });
        return;
      }
      console.log({
        cardNumber, expiry, cvv, cardName, isSave,
      });
      submitCard({
        cardNumber, expiry, cvv, cardName, isSave,
      }).then((res) => {
        const { data: { errCode, errMsg } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.$toast({ content: 'Success', duration: 1000 });
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.cards {
  width: 100%;
  height: 100%;
  .cards-form-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 51px;
  }
  .cards-form {
    .cards-form-item {
      padding-bottom: 30px;
      .cards-form-input {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .cards-form-checkbox-text {
        color: #d28f64;
        font-size: 28px;
      }
    }
  }
}

.pl-14 {
  padding-left: 14px;
}

.pr-14 {
  padding-right: 14px;
}
</style>
