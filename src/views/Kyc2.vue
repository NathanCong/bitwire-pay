<template>
  <div class="kyc2">
    <Layout
      :showGoBack="true"
      :goBackCallback="handleGoBack"
    >
      <template #layout-left-container>
        <div class="kyc2-pan-card">
          <header class="kyc2-pan-card-header">Verify Pan Card</header>
          <main class="kyc2-pan-card-display">
            <i class="kyc2-pan-card-icon"></i>
            <p class="kyc2-pan-card-text">Pan card image</p>
          </main>
          <footer class="kyc2-pan-card-buttons">
            <i
              class="kyc2-pan-card-button photo"
              @click="handlePhotoClick()"></i>
            <i
              class="kyc2-pan-card-button camera"
              @click="handleCameraClick()"></i>
          </footer>
        </div>
      </template>
      <template #layout-right-container>
        <Container title="Pan">
          <div class="kyc2-form">
            <section class="kyc2-form-item">
              <Label value="Name" />
              <Input
                class="kyc2-form-input"
                type="text"
                placeholder="Please input your name"
                v-model="name"
              />
            </section>
            <section class="kyc2-form-item">
              <Label value="Pan Number" />
              <Input
                class="kyc2-form-input"
                type="password"
                placeholder="Input Pan cam number"
                v-model="panNumber"
              />
            </section>
            <section class="kyc2-form-item">
              <Label value="Date of birth" />
              <div class="kyc2-form-select">
                <div class="kyc2-form-select-default" v-if="!birth">Please select birth</div>
                <div class="kyc2-form-select-value" v-if="birth">{{ birth }}</div>
                <div class="kyc2-form-select-button" @click="handleSelectDateOpen()">select</div>
              </div>
            </section>
            <section class="kyc2-form-item">
              <Label value="Province" />
              <div class="kyc2-form-select">
                <div class="kyc2-form-select-default" v-if="!province">Please select province</div>
                <div class="kyc2-form-select-value" v-if="province"></div>
                <div class="kyc2-form-select-button" @click="handleSelectCityOpen()">select</div>
              </div>
            </section>
            <Button
              class="kyc2-form-button"
              @click="handleSubmitClick()">SUBMIT</Button>
          </div>
        </Container>
      </template>
    </Layout>
    <Modal
      title="Select a date"
      :visible="dateModalVisible"
      @ok="handleSelectDateOk()"
      @cancel="handleSelectDateCancel()">
      This is a content
    </Modal>
    <Modal
      title="Select a city"
      :visible="cityModalVisible"
      @ok="handleSelectCityOk()"
      @cancel="handleSelectCityCancel()">
      This is a content
    </Modal>
  </div>
</template>

<script>
import {
  Layout,
  Container,
  Label,
  Input,
  Button,
  Modal,
} from '@/components/common';

export default {
  name: 'Kyc2',
  components: {
    Layout,
    Container,
    Label,
    Input,
    Button,
    Modal,
  },
  data() {
    return {
      dateModalVisible: false, // 生日选择框开关
      cityModalVisible: false, // 城市选择框开关
      name: '', // 姓名
      panNumber: '', // 号码
      birth: '', // 生日
      province: '', // 省份
    };
  },
  methods: {
    // 返回按钮事件
    handleGoBack() {
      console.log('Kyc2 Go Back');
    },
    // 图片按钮事件
    handlePhotoClick() {
      console.log('handlePhotoClick');
    },
    // 相机按钮事件
    handleCameraClick() {
      console.log('handleCameraClick');
    },
    // 提交按钮事件
    handleSubmitClick() {
      const {
        name, panNumber, birth, province,
      } = this;
      if (!name) {
        this.$toast({ content: 'Name can\'t be empty', duration: 1000 });
        return;
      }
      if (!panNumber) {
        this.$toast({ content: 'Pan cam number can\'t be empty', duration: 1000 });
        return;
      }
      if (!birth) {
        this.$toast({ content: 'Birth can\'t be empty', duration: 1000 });
        return;
      }
      if (!province) {
        this.$toast({ content: 'Province can\'t be empty', duration: 1000 });
        return;
      }
      console.log('提交数据');
    },
    // 打开日期选择
    handleSelectDateOpen() {
      this.dateModalVisible = true;
    },
    // 关闭日期选择
    handleSelectDateClose() {
      this.dateModalVisible = false;
    },
    // 选择日期确认事件
    handleSelectDateOk() {
      this.handleSelectDateClose();
    },
    // 选择日期取消事件
    handleSelectDateCancel() {
      this.handleSelectDateClose();
    },
    // 打开城市选择
    handleSelectCityOpen() {
      this.cityModalVisible = true;
    },
    // 关闭城市选择
    handleSelectCityClose() {
      this.cityModalVisible = false;
    },
    // 选择城市确认事件
    handleSelectCityOk() {
      this.handleSelectCityClose();
    },
    // 选择城市取消事件
    handleSelectCityCancel() {
      this.handleSelectCityClose();
    },
  },
};
</script>

<style lang="less" scoped>
.kyc2 {
  width: 100%;
  height: 100%;
  position: relative;
}

.kyc2-pan-card {
  padding-top: 80px;
  width: 662px;
  margin: 0 auto;
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
    height: 377px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    margin-top: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    .kyc2-pan-card-icon {
      position: absolute;
      top: 18px;
      right: 18px;
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
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    .kyc2-pan-card-button {
      margin: 0 25px;
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

.kyc2-form {
  width: 100%;
  height: 100%;
  padding-top: 35px;
  box-sizing: border-box;
  .kyc2-form-item {
    padding-bottom: 20px;
  }
  .kyc2-form-input,
  .kyc2-form-select {
    height: 70px;
    line-height: 70px;
    margin-top: 20px;
  }
  .kyc2-form-select {
    display: flex;
    .kyc2-form-select-default,
    .kyc2-form-select-value {
      flex: 1;
      background-color: #ded7d4;
      border-radius: 8px;
      text-align: left;
      box-sizing: border-box;
      padding: 0 25px;
    }
    .kyc2-form-select-default {
      color: #fff;
      font-size: 28px;
    }
    .kyc2-form-select-value {
      color: #573625;
      font-size: 36px;
    }
    .kyc2-form-select-button {
      width: 148px;
      height: 100%;
      background: #cb7940;
      color: #fff;
      font-size: 32px;
      border-radius: 8px;
      margin-left: 10px;
    }
  }
  .kyc2-form-button {
    margin-top: 30px;
  }
}
</style>
