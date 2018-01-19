<template lang="html">
  <div class="myInfo">
    <header class="header">
      <span>
        <img src="../../assets/mine_bg.png" alt="">
      </span>
    </header>

    <form v-model="myInfoData" ref="myInfo" class="myForm">
      <div class="formItem">
        <div class="formComb">
          <span>姓名</span>
          <input type="text" name="" value="" placeholder="请输入姓名">
        </div>
      </div>
      <div class="formItem">
        <div class="formComb">
          <span>手机号</span>
          <input type="text" name="" value="" placeholder="请输入手机号">
        </div>
      </div>
      <div class="formItem">
        <div class="formComb">
          <span>验证码</span>
          <input type="text" name="" value="" maxLength="6" placeholder="请输入验证码">
        </div>
        <button type="button" name="button">获取验证码</button>
      </div>
      <div class="formItem">
        <div class="formComb">
          <span>性别</span>
          <input type="text" name="" value="" placeholder="请输入性别">
        </div>
      </div>
      <div class="formItem">
        <div class="formComb">
          <span>生日</span>
          <p>请选择生日</p>
        </div>
        <span class="link">
          <img src="../../assets/arrow-right.png" alt="">
        </span>
      </div>

    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.myInfo {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    span {
      img {
        display: block;
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 3.75rem;
      }
    }
  }
  .myForm {
    .formItem {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 1.5rem;
      background: #FFFFFF;
      margin-bottom: 1rem;
      .formComb {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
        height: 4.5rem;
        padding: .8rem 0;
        span {
          width: 6rem;
          font-size: 1.4rem;
          color: #333333;
        }
        p {
          font-size: 1.4rem;
          color: #999;
        }
        input {
          flex: 1;
          height: 100%;
          font-size: 1.4rem;
          border: none;
        }
      }
      button {
        height: 2.9rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        color: #FFFFFF;
        font-size: 1.4rem;
        border-radius: 1.45rem;
        background: #333333;
        white-space: nowrap;
      }
      .link {
        img {
          display: block;
          width: auto;
          height: 1.3rem;
        }
      }
    }
  }
}
</style>
