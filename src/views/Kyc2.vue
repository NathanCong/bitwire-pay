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
              <div
                class="kyc2-form-select"
                @click="handleSelectBirthOpen()"
              >
                <div class="kyc2-form-select-default" v-if="!birth">Please select birth</div>
                <div class="kyc2-form-select-value" v-if="birth">{{ birth }}</div>
                <div
                  class="kyc2-form-select-button"
                  @click="handleSelectBirthOpen()">select</div>
              </div>
            </section>
            <section class="kyc2-form-item">
              <Label value="Province" />
              <div
                class="kyc2-form-select"
                @click="handleSelectProvinceOpen()"
              >
                <div
                  class="kyc2-form-select-default"
                  v-if="!provinceId">Please select province</div>
                <div
                  class="kyc2-form-select-value"
                  v-if="provinceId">{{ provinceName }}</div>
                <div
                  class="kyc2-form-select-button"
                  @click="handleSelectProvinceOpen()">select</div>
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
      :visible-item-count="3"
      value-key="provinceId"
      @ok="handleSelectBirthOk()"
      @cancel="handleSelectBirthCancel()">
        <div class="kyc2-form-picker-wrapper">
          <van-datetime-picker
            type="date"
            ref="birthDatetimePicker"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </div>
    </Modal>
    <Modal
      title="Select a city"
      :visible="provinceModalVisible"
      @ok="handleSelectProvinceOk()"
      @cancel="handleSelectProvinceCancel()">
      <div class="kyc2-form-picker-wrapper">
        <van-picker
          ref="provincePicker"
          :columns="provinceList"
        />
      </div>
    </Modal>
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
  Modal,
} from '@/components/common';
// 加载接口
import { getProvinceList, submit } from '@/services/kyc2';

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
      name: '', // 姓名
      panNumber: '', // 号码
      birth: '', // 生日
      dateModalVisible: false, // 生日选择框开关
      minDate: new Date(1900, 0, 1), // 时间选择器最小时间
      maxDate: new Date(2088, 12, 31), // 时间选择器最大时间
      provinceId: '', // 省份ID
      provinceModalVisible: false, // 省份选择框开关
      provinceList: [],
    };
  },
  computed: {
    provinceName() {
      const cList = this.provinceList;
      return (cList.find((i) => `${i.provinceId}` === `${this.provinceId}`) || {}).text || '';
    },
  },
  created() {
    this.getProvinceList();
  },
  methods: {
    // 请求省份列表
    getProvinceList() {
      getProvinceList().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.provinceList = data.provinceList;
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 提交数据
    submit(params) {
      submit(params).then((res) => {
        const { data: { errCode, errMsg } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.$router.push('/home');
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 返回按钮事件
    handleGoBack() {
      this.$router.go(-1);
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
        name, panNumber, birth, provinceId,
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
      if (!provinceId) {
        this.$toast({ content: 'Province can\'t be empty', duration: 1000 });
        return;
      }
      this.submit({
        name,
        panNumber,
        birth,
        provinceId,
      });
    },
    // 打开生日选择
    handleSelectBirthOpen() {
      this.dateModalVisible = true;
    },
    // 关闭生日选择
    handleSelectBirthClose() {
      this.dateModalVisible = false;
    },
    // 选择生日确认事件
    handleSelectBirthOk() {
      const birthDatetimePicker = this.$refs.birthDatetimePicker.getPicker();
      birthDatetimePicker.confirm();
      const values = birthDatetimePicker.getValues();
      this.birth = values.join('-');
      this.handleSelectBirthClose();
    },
    // 选择生日取消事件
    handleSelectBirthCancel() {
      this.handleSelectBirthClose();
    },
    // 打开省份选择
    handleSelectProvinceOpen() {
      this.provinceModalVisible = true;
    },
    // 关闭省份选择
    handleSelectProvinceClose() {
      this.provinceModalVisible = false;
    },
    // 选择省份确认事件
    handleSelectProvinceOk() {
      this.$refs.provincePicker.confirm();
      const values = this.$refs.provincePicker.getValues();
      const { provinceId } = values[0] || {};
      this.provinceId = provinceId;
      this.handleSelectProvinceClose();
    },
    // 选择省份取消事件
    handleSelectProvinceCancel() {
      this.handleSelectProvinceClose();
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
      width: 212px;
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

// vant 选项组件容器
.kyc2-form-picker-wrapper {
  position: absolute;
  top: 30px;
  right: 23px;
  bottom: 30px;
  left: 23px;
  overflow: hidden;
  // van-picker
  /deep/.van-picker {
    width: 100%;
    position: absolute;
    top: -230px;
    left: 0;
    .van-ellipsis {
      color: #5d4437;
      font-size: 42px;
    }
  }
  // van-datetime-picker
  /deep/.van-datetime-picker {
    width: 100%;
    position: absolute;
    top: -500px;
    left: 0;
    .van-ellipsis {
      color: #5d4437;
      font-size: 52px;
    }
  }
  /deep/[class*=van-hairline]::after {
    border-color: #5d4437;
    border-width: 3px 0;
  }
  /deep/.van-picker__frame {
    left: 0;
    right: 0;
  }
}
</style>
