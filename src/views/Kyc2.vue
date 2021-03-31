<template>
  <div class="kyc2">
    <GoBackLink class="go-back" />
    <Layout>
      <template #layout-left-container>
        <div class="kyc2-pan-card">
          <header class="kyc2-pan-card-header">Verify Pan Card</header>
          <main class="kyc2-pan-card-display">
            <i class="kyc2-pan-card-icon"></i>
            <p class="kyc2-pan-card-text">Pan card image</p>
          </main>
          <footer class="kyc2-pan-card-buttons">
            <i class="kyc2-pan-card-button photo"></i>
            <i class="kyc2-pan-card-button camera"></i>
          </footer>
        </div>
      </template>
      <template #layout-right-container>
        <div class="kyc2-wrapper">
          <div class="global-title">Pan</div>
          <section class="kyc2-form-wrapper">
            <Card :opacity="0.8" class="kyc2-form-card">
              <div class="kyc2-form">
                <section class="kyc2-form-item">
                  <Label value="Name" />
                  <Input
                    class="kyc2-form-input"
                    type="text"
                    placeholder="Please input your name"
                  />
                </section>
                <section class="kyc2-form-item">
                  <Label value="Pan Number" />
                  <Input
                    class="kyc2-form-input"
                    type="password"
                    placeholder="Input Pan cam number"
                  />
                </section>
                <section class="kyc2-form-item">
                  <Label value="Dale of birth" />
                  <Select class="kyc2-form-select" />
                </section>
                <section class="kyc2-form-item">
                  <Label value="Province" />
                  <Select class="kyc2-form-select" />
                </section>
                <section class="kyc2-form-item">
                  <Button class="kyc2-form-button">SUBMIT</Button>
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
import Select from '@/components/common/Select.vue';

export default {
  name: 'Kyc2',
  components: {
    GoBackLink,
    Layout,
    Card,
    Label,
    Input,
    Button,
    Select,
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

.kyc2-pan-card {
  padding: 70px 90px 0 90px;
  .kyc2-pan-card-header {
    background-image: url('~@/assets/card_logo.png');
    background-repeat: no-repeat;
    background-size: 54px 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 74px;
    font-size: 43px;
    color: #fff;
  }
  .kyc2-pan-card-display {
    width: 100%;
    height: 400px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .kyc2-pan-card-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 41px;
      height: 41px;
      background-image: url('~@/assets/warn_logo.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .kyc2-pan-card-text {
      font-size: 45px;
      color: #fbc199;
    }
  }
  .kyc2-pan-card-buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .kyc2-pan-card-button {
      margin: 0 30px;
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: cover;
      &.photo {
        background-image: url('~@/assets/photo_logo.png');
      }
      &.camera {
        background-image: url('~@/assets/camera_logo.png');
      }
    }
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
  .kyc2-form-card {
    padding-top: 20px;
  }
  .kyc2-form-wrapper {
    width: 100%;
    height: 816px;
    margin-top: 39px;
    .kyc2-form {
      .kyc2-form-item {
        padding-top: 20px;
      }
      .kyc2-form-input,
      .kyc2-form-select {
        height: 70px;
        line-height: 70px;
        margin-top: 20px;
      }
      .kyc2-form-button {
        margin-top: 20px;
      }
    }
  }
}
</style>
