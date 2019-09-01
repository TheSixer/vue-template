<template lang="html">
  <div class="mine">
    <header class="header">

    </header>

    <div class="body">
      <div class="tabs">
        <div class="tab">
          <router-link :to="{ name: 'purchaseHistory', params: {} }" :class="{active: $route.path === '/mine/balance/purchase-history'}">消费记录</router-link>
        </div>
        <div class="tab">
          <router-link :to="{ name: 'rechargeRecord', params: {} }" :class="{active: $route.path === '/mine/balance/recharge-record'}">充值记录</router-link>
        </div>
      </div>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.mine {
  .header {
    height: 11rem;
    padding: 1.5rem;
    background-image: url(../../assets/mine_bg.png);
    background-size: cover;
    background-position: top;
  }
  .body {
    .tabs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      // padding: 1rem;
      background: #FFFFFF;
      .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5rem;
          font-size: 1.7rem;
          color: #333;
        }
        .active {
          border-bottom: .25rem solid #333;
        }
      }
    }
  }
}
</style>
