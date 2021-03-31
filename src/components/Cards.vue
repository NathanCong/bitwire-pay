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
            />
          </section>
          <Row>
            <section class="cards-form-item pr-14">
              <Label value="Expiry" />
              <Input
                class="cards-form-input"
                type="text"
                placeholder="MM/YY"
              />
            </section>
            <section class="cards-form-item pl-14">
              <Label value="CVV" />
              <Input
                class="cards-form-input"
                type="text"
                placeholder="Enter CVV"
              />
            </section>
          </Row>
          <section class="cards-form-item">
            <Label value="Name on Card" />
            <Input
              class="cards-form-input"
              type="text"
              placeholder="Enter Card Name"
            />
          </section>
          <section class="cards-form-item">
            <Row>
              <Checkbox class="cards-form-checkbox" />
              <span class="cards-form-checkbox-text">
                Save this option securly for faster payment
              </span>
            </Row>
          </section>
          <Button class="cards-form-button">Proceed</Button>
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
      .cards-form-checkbox {
        margin-right: 13px;
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
