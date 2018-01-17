<template lang="html">
  <div class="home">
    <div class="body">
      <div class="header">
        <span>
          <img src="../../assets/logo.png" alt="">
        </span>
        <h4>Welcome 萌豆亲子汇</h4>
      </div>
      <div class="bottom">
        <button type="button" name="button" @click="navigate">一般订餐</button>
        <button type="button" name="button">活动订餐</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    navigate () {
      this.$router.push({
        name: 'ordering'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/homebg.png');
  background-size: cover;
  background-position: center;
  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      flex: 1;
      padding: 1.5rem 0;
      span {
        img {
          display: block;
          width: 5rem;
          height: auto;
        }
      }
      h4 {
        margin-top: .5rem;
        font-size: 1.1rem;
        color: #ffffff;
        font-weight: normal;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      padding-top: 5rem;
      button {
        height: 2.2rem;
        width: 8rem;
        margin: 1.1rem;
        border-radius: .3rem;
        color: #FFFFFF;
        font-size: 0.9rem;
        border: 2px solid #ffffff;
        background: none;
      }
    }
  }
}
</style>
