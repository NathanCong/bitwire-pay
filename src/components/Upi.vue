<template>
  <div class="upi">
    <Container
      title="Payment Options"
      subtitle="Choose your UPI"
    >
      <List :listConfig="listConfig" />
    </Container>
    <div class="upi-form" v-if="isShow">
      <section class="upi-form-item">
        <Row>
          <Input
            class="upi-form-input"
            type="text"
            v-model="account"
          />
          <span class="upi-form-input-text">@paytm</span>
        </Row>
      </section>
      <section class="upi-form-item">
        <Checkbox
          class="upi-form-checkbox"
          v-model="isSave"
        >
          <span class="upi-form-checkbox-text">
            Save this option securly for faster payment
          </span>
        </Checkbox>
      </section>
      <section class="upi-form-item">
        <Button
          class="upi-form-button"
          @click="handleProceedClick()"
        >Proceed</Button>
      </section>
    </div>
  </div>
</template>

<script>
// 加载组件
import {
  Container,
  List,
  Input,
  Button,
  Row,
  Checkbox,
} from '@/components/common';
// 加载接口
import { getUpiList } from '@/services/home';

export default {
  name: 'Upi',
  components: {
    Container,
    List,
    Input,
    Button,
    Row,
    Checkbox,
  },
  data() {
    return {
      listConfig: [],
      account: '',
      isSave: false,
      isShow: false,
      currentItem: {},
    };
  },
  created() {
    this.getUpiList();
  },
  methods: {
    // 获取UPI列表
    getUpiList() {
      getUpiList().then((res) => {
        const { data: { errCode, errMsg, data } } = res;
        if (errCode !== 0) {
          this.$toast({ content: errMsg, duration: 1000 });
          return;
        }
        this.listConfig = data.upiList.map((i) => ({
          ...i,
          callback: this.handleListItemClick,
        }));
      }).catch((err) => {
        this.$toast({ content: err.message, duration: 1000 });
      });
    },
    // 菜单点击事件
    handleListItemClick(item = {}) {
      this.currentItem = item;
      this.handleFormOpen();
    },
    // 表单开启
    handleFormOpen() {
      this.isShow = true;
    },
    // 表单关闭
    handleFormClose() {
      this.isShow = false;
    },
    // 跳转点击
    handleProceedClick() {
      if (!this.account) {
        this.$toast({ content: 'Account can\'t be empty', duration: 1000 });
        return;
      }
      window.location.href = this.currentItem.proceedLink;
    },
  },
};
</script>

<style lang="less" scoped>
.upi {
  width: 100%;
  height: 100%;
  position: relative;
  .upi-form {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    padding: 0 36px;
    padding-top: 30px;
    padding-bottom: 64px;
    .upi-form-item {
      padding-top: 30px;
    }
    .upi-form-input {
      height: 70px;
      line-height: 70px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: 0;
    }
    .upi-form-input-text {
      font-size: 28px;
      // color: #fff;
      color: #573625;
      background-color: #ded7d4;
      line-height: 70px;
      height: 70px;
      box-sizing: border-box;
      padding: 0 25px;
      border-radius: 8px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .upi-form-checkbox {
      margin-right: 10px;
    }
    .upi-form-checkbox-text {
      color: #d28f64;
      font-size: 28px;
    }
  }
}
</style>
