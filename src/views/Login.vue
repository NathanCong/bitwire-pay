<template>
  <div class="login">
    <Layout>
      <template #layout-left-container>
        <Card backgroundColor="#c2723a" :opacity="0.65">
          <div class="login-left-wrapper">
            <p class="pay-logo">LOGO</p>
            <p class="pay-name">Bitwire Pay</p>
            <p class="pay-desc">The best payment gateway&payouts for India</p>
          </div>
        </Card>
      </template>
      <template #layout-right-container>
        <div class="login-right-wrapper">
          <div class="login-title global-title">Sign In</div>
          <Card class="login-form" :opacity="0.8" :borderRadius="40">
            <section class="login-form-item">
              <Label value="Email" />
              <Input
                class="login-form-input"
                type="text"
                placeholder="Enter your username or Email"
                v-model="account"
              />
            </section>
            <section class="login-form-item">
              <Label value="Password" />
              <Input
                class="login-form-input"
                type="password"
                placeholder="Enter your Password"
                v-model="password"
              />
            </section>
            <Button
              class="login-form-button"
              @click="handleLoginClick()">Sign In Securely</Button>
          </Card>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
// 加载组件
import {
  Layout,
  Card,
  Label,
  Input,
  Button,
} from '@/components/common';
// 加载接口
import { login } from '@/services/login';

export default {
  name: 'Login',
  components: {
    Layout,
    Card,
    Label,
    Input,
    Button,
  },
  data() {
    return {
      account: '', // 登录账号
      password: '', // 登录密码
    };
  },
  methods: {
    // 登录按钮事件
    handleLoginClick() {
      if (!this.account) { // 账号校验
        this.$toast({ content: 'Username or Email can\'t be empty', duration: 1000 });
        return;
      }
      if (!this.password) { // 密码校验
        this.$toast({ content: 'Password can\'t be empty', duration: 1000 });
        return;
      }
      login({
        username: this.account,
        password: this.password,
      }).then((res) => {
        const { data: { errCode } } = res;
        if (errCode === 0) {
          this.$router.push('/home');
        }
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
}

.login-left-wrapper {
  color: #ffefdd;
  font-weight: 400;
  .pay-logo {
    text-align: left;
    font-size: 45px;
    padding-left: 13px;
  }
  .pay-name {
    font-size: 56px;
    padding-top: 76px;
  }
  .pay-desc {
    font-size: 46px;
    padding-top: 150px;
  }
}

.login-right-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 80px;
  .login-title {
    padding-left: 56px;
  }
  .login-form {
    margin-top: 36px;
    padding: 50px 56px;
    .login-form-item {
      padding-bottom: 30px;
    }
    .login-form-input {
      height: 70px;
      line-height: 70px;
      margin-top: 20px;
    }
    .login-form-button {
      margin-top: 60px;
    }
  }
}
</style>
