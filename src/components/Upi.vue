<template>
  <div class="upi">
    <Container
      title="Payment Options"
      subtitle="Choose your UPI"
    >
      <DrawerList
        :listConfig="listConfig"
        @listItemClick="handleListItemClick"
      >
        <div class="upi-form">
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
      </DrawerList>
    </Container>
  </div>
</template>

<script>
// 加载组件
import {
  Container,
  DrawerList,
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
    DrawerList,
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
    // background-color: #fff;
    box-sizing: border-box;
    .upi-form-item {
      padding-top: 30px;
      &:first-child {
        padding-top: 0;
      }
    }
    .upi-form-input {
      flex: 1;
      height: 70px;
      line-height: 70px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: 0;
    }
    .upi-form-input-text {
      font-size: 28px;
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
