<template>
  <div class="home">
    <GoBackLink class="go-back" />
    <Layout>
      <template #layout-left-content>
        <div class="pay-info">
          <p class="pay-shop-name">Shop Name</p>
          <p class="pay-money-number">₹ 99,999.00</p>
          <section class="pay-order-detail">
            <section class="pay-order-detail-item">
              <p class="pay-order-detail-label">Merchant Name</p>
              <p class="pay-order-detail-value">RMG Game</p>
            </section>
            <section class="pay-order-detail-item">
              <p class="pay-order-detail-label">Order ID</p>
              <p class="pay-order-detail-value">99999999</p>
            </section>
            <section class="pay-order-detail-item">
              <p class="pay-order-detail-label">Amount</p>
              <p class="pay-order-detail-value">₹ 100</p>
            </section>
          </section>
        </div>
      </template>
      <template #layout-right-content>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/common/Layout.vue';
import GoBackLink from '@/components/GoBackLink.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    GoBackLink,
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}

.go-back {
  position: absolute;
  top: 46px;
  left: 60px;
}

.pay-info {
  color: #fff;
  .pay-shop-name {
    font-size: 58px;
    text-align: center;
    margin-top: 80px;
    padding: 40px 0;
  }
  .pay-money-number {
    font-size: 72px;
    color: #c16535;
    font-weight: bold;
    background-color: #fff;
    border-radius: 35px;
    padding: 20px 0;
  }
  .pay-order-detail {
    margin-top: 80px;
    box-sizing: border-box;
    padding: 0 50px;
    .pay-order-detail-item {
      margin-top: 40px;
      display: flex;
      align-items: center;
      .pay-order-detail-label,
      .pay-order-detail-value {
        flex: 1;
        font-size: 32px;
      }
      .pay-order-detail-label {
        text-align: left;
      }
      .pay-order-detail-value {
        text-align: right;
      }
    }
  }
}
</style>
