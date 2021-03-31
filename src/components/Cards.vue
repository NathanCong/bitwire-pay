<template>
  <div class="cards">
    <div class="cards-title global-title">Payment Options</div>
    <SubTitle
      class="cards-subtitle"
      value="Type your card to continue" />
    <Card class="cards-form-wrapper" :opacity="0.8">
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
          <section class="cards-form-item pr-20">
            <Label value="Expiry" />
            <Input
              class="cards-form-input"
              type="text"
              placeholder="MM/YY"
            />
          </section>
          <section class="cards-form-item pl-20">
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
        <section class="cards-form-item no-mb">
          <Button class="cards-form-button">Proceed</Button>
        </section>
      </div>
    </Card>
  </div>
</template>

<script>
import SubTitle from '@/components/common/SubTitle.vue';
import Card from '@/components/common/Card.vue';
import Label from '@/components/common/Label.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
import Row from '@/components/common/Row.vue';
import Checkbox from '@/components/common/Checkbox.vue';

export default {
  name: 'Cards',
  components: {
    SubTitle,
    Card,
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
  box-sizing: border-box;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  .cards-title,
  .cards-subtitle {
    padding-left: 56px;
  }
  .cards-subtitle,
  .cards-form-wrapper {
    margin-top: 20px;
  }
  .cards-form-wrapper {
    .cards-form-item {
      margin-bottom: 20px;
      .cards-form-input {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .cards-form-checkbox {
        margin-right: 10px;
      }
      .cards-form-checkbox-text {
        font-size: 28px;
        color: #d28f64;
        padding: 20px 0;
      }
    }
  }
}

.no-mb {
  margin-bottom: 0 !important;
}

.pl-20 {
  padding-left: 20px;
}

.pr-20 {
  padding-right: 20px;
}
</style>
