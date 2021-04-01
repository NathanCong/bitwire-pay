<template>
  <div class="kyc1">
    <Layout
      :showGoBack="true"
      :goBackCallback="handleGoBack"
    >
      <template #layout-left-container>
        <div class="kyc-info">
          <p class="kyc-question">What is KYC?</p>
          <p class="kyc-answer">
            KYC ("Konw Your Client") is not only important for legal compliance,
            but helps to ensure full security of accounts as well as better service
            to our players.We have made KYC easy for your and assure that the
            documents/information you provide are completely confidential and secure
            whit us. Please check T&C for more details.
          </p>
        </div>
      </template>
      <template #layout-right-container>
        <Container title="Mobile&Email">
          <div class="kyc1-form">
            <section class="kyc1-form-item">
              <Label :logo="EmailLogo" value="Verify Your Email" />
              <Input
                class="kyc1-form-input"
                type="text"
                placeholder="Please input your email"
                v-model="email"
                :checked="emailCheck"
              />
              <div class="kyc1-form-submit-wrapper">
                <Button
                  class="kyc1-form-submit-button"
                  :disabled="emailCheck"
                  @click="handleSubmitEmailClick()">SUBMIT</Button>
              </div>
            </section>
            <section class="kyc1-form-item">
              <Label :logo="MobileLogo" value="Verify Your Mobile" />
              <Input
                class="kyc1-form-input"
                type="text"
                placeholder="Please use the mobile number linked with PayTM account"
                v-model="mobile"
                :checked="mobileCheck"
              />
              <div class="kyc1-form-submit-wrapper">
                <Button
                  class="kyc1-form-submit-button"
                  :disabled="mobileCheck"
                  @click="handleSubmitMobileClick()">SUBMIT</Button>
                <div class="kyc1-form-code-wrapper">
                  <Input class="kyc1-form-code-input" type="number" />
                  <Button
                    class="kyc1-form-otp-button"
                    @click="handleOptClick()"
                    v-if="!timer">OPT</Button>
                  <span class="kyc1-form-rest-time" v-if="timer">{{ time }}s</span>
                </div>
              </div>
            </section>
            <Button
              class="kyc1-form-next-button"
              :disabled="!(emailCheck && mobileCheck)"
              @click="handleNextClick()"
            >NEXT</Button>
          </div>
        </Container>
      </template>
    </Layout>
  </div>
</template>

<script>
// 加载组件
import {
  Layout,
  Container,
  Label,
  Input,
  Button,
} from '@/components/common';
// 加载图片
import EmailLogo from '@/assets/email_logo.png';
import MobileLogo from '@/assets/mobile_logo.png';
// 加载接口
import { submitEmail, getVerificationCode, submitMobile } from '@/services/kyc1';

export default {
  name: 'Kyc1',
  components: {
    Layout,
    Container,
    Label,
    Input,
    Button,
  },
  data() {
    return {
      EmailLogo,
      MobileLogo,
      email: '', // 邮箱地址
      emailCheck: false, // 邮箱校验
      timer: null,
      time: 60,
      mobile: '', // 手机号
      code: '', // 验证码
      mobileCheck: false, // 手机号校验
    };
  },
  methods: {
    // 返回按钮事件
    handleGoBack() {
      console.log('Kyc1 Go Back');
    },
    // 提交邮箱
    handleSubmitEmailClick() {
      if (!this.email) {
        this.$toast({ content: 'Email can\'t be empty', duration: 1000 });
        return;
      }
      submitEmail({ email: this.email }).then((res) => {
        const { data: { errCode, errMsg } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.emailCheck = true;
        this.$toast({ content: 'Email verified', duration: 1000 });
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 获取验证码
    handleOptClick() {
      if (!this.mobile) {
        this.$toast({ content: 'Mobile can\'t be empty', duration: 1000 });
        return;
      }
      this.createTimer();
      getVerificationCode().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.code = data.code;
        this.$toast({ content: `Code is ${this.code}`, duration: 1000 });
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 创建倒计时Timer
    createTimer() {
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
    // 提交手机号
    handleSubmitMobileClick() {
      if (!this.mobile) {
        this.$toast({ content: 'Mobile can\'t be empty', duration: 1000 });
        return;
      }
      if (!this.code) {
        this.$toast({ content: 'OPT code can\'t be empty', duration: 1000 });
        return;
      }
      submitMobile({ mobile: this.mobile }).then((res) => {
        const { data: { errCode, errMsg } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.mobileCheck = true;
        this.$toast({ content: 'Mobile verified', duration: 1000 });
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 下一步按钮
    handleNextClick() {
      this.$toast({ content: 'Next', duration: 1000 });
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
  padding-top: 70px;
  color: #fff;
  text-align: left;
  .kyc-question {
    font-size: 48px;
    padding-left: 60px;
  }
  .kyc-answer {
    font-size: 42px;
    line-height: 52px;
    padding-top: 10px;
    padding-left: 110px;
    padding-right: 70px;
    text-indent: 50px;
  }
}

.kyc1-form {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 51px;
  .kyc1-form-item {
    padding-bottom: 30px;
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
    color: #f0f0f0;
    font-size: 50px;
    margin-top: 66px;
  }
}
</style>
