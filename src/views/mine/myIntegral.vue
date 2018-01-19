<template lang="html">
  <div class="myIntegral">
    <header class="header">
      <p>4888</p>
      <span>我的积分</span>
    </header>

    <div class="body">
      <div class="items">
        <div class="item">
          <p class="title">消费记录</p>
        </div>
        <div class="item">
          <p class="detail"><span>卡券兑换</span> <i>+5.00</i></p>
          <p>2017/11-20 15:30:20</p>
        </div>
        <div class="item">
          <p class="detail"><span>卡券兑换</span> <i>-5.00</i></p>
          <p>2017/11-20 15:30:20</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.myIntegral {
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 17.8rem;
    padding: 1.5rem 0 5rem;
    background-image: url(../../assets/mine_bg.png);
    background-size: cover;
    background-position: center;
    p {
      font-size: 3.4rem;
      color: rgba(188,48,49,1);
    }
    span {
      font-size: 1.4rem;
      color: #FFFFFF;
    }
  }
  .body {
    padding: 1rem 1.5rem;
    margin-top: -5rem;
    .items {
      padding: .5rem 1.5rem 4rem;
      border-radius: .4rem;
      background: #FFFFFF;
      .item {
        border-bottom: 1px solid rgba(187,187,187,1);
        padding: 1rem 0;
        p {
          line-height: 2.4rem;
          font-size: 1.4rem;
          color: rgba(102,102,102,1);
          &.detail {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          i {
            color: rgba(188,48,49,1);
            font-style: normal;
          }
        }
        .title {
          font-size: 1.7rem;
          color: #333333;
        }
      }
    }
  }
}
</style>
