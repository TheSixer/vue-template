<template lang="html">
  <div class="payPassword">
    <div class="header">
      <span class="back" @click="back">
        <img src="../../../assets/back.png" alt="">
      </span>
      <span>设置支付密码</span>
    </div>

    <router-link :to="{ name: 'setPayPassword', params: {} }" class="item">
      <span>设置支付密码</span>
      <span>
        <img src="../../../assets/arrow-right.png" alt="">
      </span>
    </router-link>
    <router-link :to="{ name: 'setPayPassword', params: {} }" class="item">
      <span>修改支付密码</span>
      <span>
        <img src="../../../assets/arrow-right.png" alt="">
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.payPassword {
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    background: #FFFFFF;
    .back {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.5rem;
      padding: 0 1.5rem;
      img {
        display: block;
        width: 1rem;
        height: auto;
      }
    }
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 1.5rem;
    height: 4.5rem;
    background: #FFFFFF;
  }
}
</style>
