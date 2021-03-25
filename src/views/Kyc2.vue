<template>
  <div class="kyc2">
    <GoBackLink class="go-back" />
    <Layout>
      <template #layout-left-content>
        <Card bgColor="#c2723a" :opacity="0.65">
          <div class="kyc2-info">
            <p class="kyc2-info-logo">LOGO</p>
            <p class="kyc2-info-name">Bitwire Pay</p>
            <p class="kyc2-info-desc">The best payment gateway&payouts for India</p>
          </div>
        </Card>
      </template>
      <template #layout-right-content>
        <div class="kyc2-wrapper">
          <Title class="kyc2-title" value="Sign In" />
          <section class="kyc2-form-wrapper">
            <Card :opacity="0.8">
              <div class="kyc2-form">
                <section class="kyc2-form-item">
                  <Label value="Email" />
                  <Input
                    class="kyc2-form-input"
                    type="text"
                    placeholder="Enter your username or Email"
                  />
                </section>
                <section class="kyc2-form-item">
                  <Label value="Password" />
                  <Input
                    class="kyc2-form-input"
                    type="password"
                    placeholder="Enter your Password"
                  />
                </section>
                <section class="kyc2-form-item">
                  <Button class="kyc2-form-button">Sign In Securely</Button>
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
import GoBackLink from '@/components/GoBackLink.vue';
import Layout from '@/components/common/Layout.vue';
import Card from '@/components/common/Card.vue';
import Label from '@/components/common/Label.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
import Title from '@/components/common/Title.vue';

export default {
  name: 'Kyc2',
  components: {
    GoBackLink,
    Layout,
    Card,
    Label,
    Input,
    Button,
    Title,
  },
};
</script>

<style lang="less" scoped>
.kyc2 {
  width: 100%;
  height: 100%;
  position: relative;
}

.go-back {
  position: absolute;
  top: 46px;
  left: 60px;
}

.kyc2-info {
  color: #ffefdd;
  font-weight: 400;
  .kyc2-info-logo {
    text-align: left;
    font-size: 45px;
  }
  .kyc2-info-name {
    font-size: 56px;
    padding-top: 115px;
    padding-bottom: 115px;
  }
  .kyc2-info-desc {
    font-size: 46px;
  }
}

.kyc2-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .kyc2-title {
    padding-left: 56px;
  }
  .kyc2-form-wrapper {
    width: 100%;
    height: 816px;
    margin-top: 39px;
    .kyc2-form {
      .kyc2-form-item {
        padding-top: 20px;
      }
      .kyc2-form-input {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .kyc2-form-button {
        margin-top: 43px;
      }
    }
  }
}
</style>
