<template>
  <div class="login">
    <Layout>
      <template #layout-left-content>
        <div class="login-info">
          <p class="login-info-logo">LOGO</p>
          <p class="login-info-name">Bitwire Pay</p>
          <p class="login-info-desc">The best payment gateway&payouts for India</p>
        </div>
      </template>
      <template #layout-right-content>
        <div class="login-wrapper">
          <header class="login-title">Sign In</header>
          <main class="login-form">
            <section class="login-form-item">
              <p class="login-form-label">Email</p>
              <input
                class="login-form-input"
                type="text"
                placeholder="Enter your username or Email">
            </section>
            <section class="login-form-item">
              <p class="login-form-label">Password</p>
              <input
                class="login-form-input"
                type="password"
                placeholder="Enter your Password">
            </section>
            <section class="login-form-submit">
              <div class="login-button">Sign In Securely</div>
            </section>
          </main>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/common/Layout.vue';

export default {
  name: 'Login',
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
}

.login-info {
  width: 100%;
  height: 100%;
  border-radius: 35px;
  background-color: rgba(194, 114, 58, 0.65);
  box-sizing: border-box;
  padding: 56px;
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
    font-size: 46px;
    color: #cb7940;
    text-align: left;
    padding-left: 56px;
  }
  .login-form {
    width: 100%;
    height: 816px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 56px;
    padding-top: 36px;
    border-radius: 35px;
    margin-top: 39px;
    text-align: left;
    .login-form-label {
      font-size: 32px;
      color: #cb7940;
      padding: 20px 0;
    }
    .login-form-input {
      width: 100%;
      height: 70px;
      line-height: 70px;
      background-color: #ded7d4;
      border: none;
      outline: none;
      border-radius: 8px;
      color: #573625;
      font-size: 36px;
      box-sizing: border-box;
      padding: 0 30px;
      &::placeholder {
        font-size: 28px;
        color: #fff;
      }
    }
    .login-form-submit {
      margin-top: 63px;
      .login-button {
        width: 100%;
        height: 91px;
        color: #fbfdfd;
        font-size: 46px;
        font-weight: bold;
        line-height: 91px;
        background-color: #f26e3d;
        text-align: center;
        border-radius: 16px;
      }
    }
  }
}
</style>
