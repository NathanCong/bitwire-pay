<template>
  <div class="home">
    <Layout :showGoBack="true">
      <template #layout-left-container>
        <div class="pay-info">
          <header class="pay-shop">Shop Name</header>
          <section class="pay-money">
            <span class="pay-unit">₹</span>
            <span class="pay-number">99,999.00</span>
          </section>
          <section class="pay-detail-list">
            <section class="pay-detail-item">
              <p class="pay-detail-label">Merchant Name</p>
              <p class="pay-detail-value">RMG Game</p>
            </section>
            <section class="pay-detail-item">
              <p class="pay-detail-label">Order ID</p>
              <p class="pay-detail-value">99999999</p>
            </section>
            <section class="pay-detail-item">
              <p class="pay-detail-label">Amount</p>
              <p class="pay-detail-value">₹100</p>
            </section>
          </section>
        </div>
      </template>
      <template #layout-right-container>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/common/Layout.vue';

export default {
  name: 'Home',
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}

.pay-info {
  color: #fff;
  .pay-shop {
    font-size: 58px;
    text-align: center;
    margin-top: 106px;
  }
  .pay-money {
    margin-top: 50px;
    background-color: #fff;
    border-radius: 30px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    .pay-unit,
    .pay-number {
      color: #c16535;
      font-size: 72px;
    }
    .pay-unit {
      font-weight: 400;
    }
    .pay-number {
      font-weight: 600;
    }
  }
  .pay-detail-list {
    margin-top: 74px;
    box-sizing: border-box;
    padding: 0 48px;
    .pay-detail-item {
      margin-top: 40px;
      display: flex;
      align-items: center;
      .pay-detail-label,
      .pay-detail-value {
        flex: 1;
        font-size: 32px;
      }
      .pay-detail-label {
        text-align: left;
      }
      .pay-detail-value {
        text-align: right;
      }
    }
  }
}
</style>
