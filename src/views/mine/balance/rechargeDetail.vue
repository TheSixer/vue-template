<template lang="html">
  <div class="purchaseDetail">
    <div class="body">
      <div class="items">
        <div class="item">
          <p>充值金额：<i>￥70.00</i></p>
          <p>充值时间：2017-11-20 15:30:20</p>
        </div>
        <div class="itemFooter">
          <p>支付方式：</p>
          <p>其他（支付宝支付）：65</p>
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
.purchaseDetail {
  .body {
    padding: 1.5rem;
    .items {
      padding: .5rem 1.5rem 1.5rem;
      border-radius: .4rem;
      background: #FFFFFF;
      .item {
        border-bottom: 1px solid rgba(187,187,187,1);
        padding: 1rem 0;
        p {
          font-size: 1.4rem;
          color: rgba(102,102,102,1);
          line-height: 2.4rem;
          i {
            color: rgba(188,48,49,1);
            font-style: normal;
          }
        }
      }
      .itemFooter {
        padding-top: 1.5rem;
        p {
          text-align: right;
          color: rgba(153,153,153,1);
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
