<template>
  <div class="kyc1">
    <Layout :showGoBack="true">
      <template #layout-left-container>
        <div class="kyc-info">
          <p class="kyc-info-question">What is KYC?</p>
          <p class="kyc-info-answer">
            KYC ("Konw Your Client") is not only important for legal compliance,
            but helps to ensure full security of accounts as well as better service
            to our players.We have made KYC easy for your and assure that the
            documents/information you provide are completely confidential and secure
            whit us. Please check T&C for more details.
          </p>
        </div>
      </template>
      <template #layout-right-container>
        <div class="kyc1-wrapper">
          <div class="global-title">Mobile&Email</div>
          <section class="kyc1-form-wrapper">
            <Card :opacity="0.8">
              <div class="kyc1-form">
                <section class="kyc1-form-item">
                  <Label :logo="EmailLogo" value="Verify Your Email" />
                  <Input
                    class="kyc1-form-input"
                    type="text"
                    placeholder="Please input your email"
                  />
                  <div class="kyc1-form-submit-wrapper">
                    <Button class="kyc1-form-submit-button">SUBMIT</Button>
                  </div>
                </section>
                <section class="kyc1-form-item">
                  <Label :logo="MobileLogo" value="Verify Your Mobile" />
                  <Input
                    class="kyc1-form-input"
                    type="password"
                    placeholder="Please use the mobile number linked with PayTM account"
                  />
                  <div class="kyc1-form-submit-wrapper">
                    <Button class="kyc1-form-submit-button">SUBMIT</Button>
                    <div class="kyc1-form-code-wrapper">
                      <Input class="kyc1-form-code-input" type="number" />
                      <Button
                        class="kyc1-form-otp-button"
                        @click="handleClickOtp()"
                        v-if="!timer"
                      >OPT</Button>
                      <span class="kyc1-form-rest-time" v-if="timer">{{ time }}s</span>
                    </div>
                  </div>
                </section>
                <section class="kyc1-form-item">
                  <Button class="kyc1-form-next-button">NEXT</Button>
                </section>
              </div>
            </Card>
          </section>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/common/Layout.vue';
import Card from '@/components/common/Card.vue';
import Label from '@/components/common/Label.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
import EmailLogo from '@/assets/email_logo.png';
import MobileLogo from '@/assets/mobile_logo.png';

export default {
  name: 'Kyc1',
  components: {
    Layout,
    Card,
    Label,
    Input,
    Button,
  },
  data() {
    return {
      EmailLogo,
      MobileLogo,
      timer: null,
      time: 60,
    };
  },
  methods: {
    handleClickOtp() {
      if (!this.timer) {
        const originTime = this.time;
        this.timer = setInterval(() => {
          if (this.time === 1) {
            clearInterval(this.timer);
            this.timer = null;
            this.time = originTime;
            return;
          }
          this.time -= 1;
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.kyc1 {
  width: 100%;
  height: 100%;
  position: relative;
}

.kyc-info {
  padding-top: 50px;
  color: #fff;
  text-align: left;
  .kyc-info-question {
    font-size: 48px;
    padding-left: 60px;
  }
  .kyc-info-answer {
    font-size: 42px;
    line-height: 52px;
    padding-top: 10px;
    padding-left: 110px;
    padding-right: 130px;
    text-indent: 50px;
  }
}

.kyc1-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .kyc1-title {
    padding-left: 56px;
  }
  .kyc1-form-wrapper {
    width: 100%;
    height: 816px;
    margin-top: 39px;
    .kyc1-form {
      .kyc1-form-item {
        padding-top: 20px;
      }
      .kyc1-form-input {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .kyc1-form-submit-wrapper {
        margin-top: 10px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        .kyc1-form-submit-button {
          width: auto;
          height: auto;
          font-size: 36px;
          font-weight: 300;
          line-height: 70px;
          padding: 0 60px;
        }
        .kyc1-form-code-wrapper {
          display: flex;
          .kyc1-form-code-input {
            width: 200px;
            height: 70px;
            margin-right: 10px;
          }
          .kyc1-form-otp-button {
            height: 70px;
            line-height: 70px;
            padding: 0 20px;
            font-size: 36px;
            font-weight: 300;
          }
          .kyc1-form-rest-time {
            box-sizing: border-box;
            height: 70px;
            line-height: 70px;
            font-size: 32px;
            color: #cb7940;
            border: 1px solid #cb7940;
            border-radius: 14px;
            padding: 0 30px;
          }
        }
      }
      .kyc1-form-next-button {
        background-color: #d2d2d2;
        color: #f0f0f0;
        font-size: 50px;
        margin-top: 43px;
      }
    }
  }
}
</style>
