<template lang="html">
  <div class="myOrdered">
    <div class="items">
      <div class="item" v-for="(item, index) of 5">
        <div class="orderInfo">
          <span>
            <img src="../../../assets/logo.png" alt="">
          </span>
          <div class="info">
            <p>萌豆亲子汇 3人午餐</p>
            <span>预约时间：2017-12-25</span>
          </div>
        </div>
        <span class="action">
          <button type="button" name="button" @click="navigate(index)">查看详情</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate (id) {
      this.$router.push({
        name: 'orderDetail',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less">
.bg(@start :#00ffff,@end :#9fffff){
  background: -webkit-linear-gradient(left, @start , @end); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, @start, @end); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, @start, @end); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, @start , @end); /* 标准的语法 */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=@start, endColorstr=@end ,grandientType=0);
}
.myOrdered {
  padding: 0 .4rem;
  .items {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: .75rem;
      padding: .75rem .5rem;
      border-radius: .3rem;
      background: #FFFFFF;
      .orderInfo {
        display: flex;
        align-items: center;
        flex: 1;
        span {
          img {
            width: 2.7rem;
            height: 2.7rem;
            border-radius: 1.35rem;
            margin-right: .75rem;
            display: block;
          }
        }
        .info {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          flex: 1;
          height: 2.7rem;
          p {
            font-size: .7rem;
            color: #000000;
          }
          span {
            font-size: .65rem;
            color: #999999;
          }
        }
      }
      .action {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 5rem;
        button {
          .bg(#FE9A64, #FF6336);
          appearance: none;
          border: none;
          color: #ffffff;
          font-size: .65rem;
          padding: .25rem .5rem;
          border-radius: .3rem;
        }
      }
    }
  }
}
</style>
