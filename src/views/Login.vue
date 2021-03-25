<template>
  <div class="login">
    <Layout>
      <template #layout-left-content>
        <Card bgColor="#c2723a" :opacity="0.65">
          <div class="login-info">
            <p class="login-info-logo">LOGO</p>
            <p class="login-info-name">Bitwire Pay</p>
            <p class="login-info-desc">The best payment gateway&payouts for India</p>
          </div>
        </Card>
      </template>
      <template #layout-right-content>
        <div class="login-wrapper">
          <Title class="login-title" value="Sign In" />
          <section class="login-form-wrapper">
            <Card :opacity="0.8">
              <div class="login-form">
                <section class="login-form-item">
                  <Label value="Email" />
                  <Input
                    class="login-form-input"
                    type="text"
                    placeholder="Enter your username or Email"
                  />
                </section>
                <section class="login-form-item">
                  <Label value="Password" />
                  <Input
                    class="login-form-input"
                    type="password"
                    placeholder="Enter your Password"
                  />
                </section>
                <section class="login-form-item">
                  <Button class="login-form-button">Sign In Securely</Button>
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
import Title from '@/components/common/Title.vue';

export default {
  name: 'Login',
  components: {
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
.login {
  width: 100%;
  height: 100%;
}

.login-info {
  color: #ffefdd;
  font-weight: 400;
  .login-info-logo {
    text-align: left;
    font-size: 45px;
  }
  .login-info-name {
    font-size: 56px;
    padding-top: 115px;
    padding-bottom: 115px;
  }
  .login-info-desc {
    font-size: 46px;
  }
}

.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .login-title {
    padding-left: 56px;
  }
  .login-form-wrapper {
    width: 100%;
    height: 816px;
    margin-top: 39px;
    .login-form {
      .login-form-item {
        padding-top: 20px;
      }
      .login-form-input {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .login-form-button {
        margin-top: 43px;
      }
    }
  }
}
</style>
