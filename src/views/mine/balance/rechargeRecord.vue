<template lang="html">
  <div class="rechargeRecord">
    <div class="body">
      <ul>
        <li>
          <router-link :to="{ name: 'rechargeDetail', params: { id: 1 } }" class="item">
            <p class="money"><span>￥70.00</span> (实付金额：66.55)</p>
            <p class="time">po2694 2017-11-20 15:30:20</p>
            <p class="address">上海世纪大道百联</p>

            <span class="arrow"><img src="../../../assets/arrow-right.png" alt=""></span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'rechargeDetail', params: { id: 2 } }" class="item">
            <p class="money"><span>￥70.00</span> (实付金额：66.55)</p>
            <p class="time">po2694 2017-11-20 15:30:20</p>
            <p class="address">上海世纪大道百联</p>

            <span class="arrow"><img src="../../../assets/arrow-right.png" alt=""></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.rechargeRecord {
  .body {
    ul {
      li {
        .item {
          display: block;
          position: relative;
          padding: 1.4rem 1.5rem;
          margin-top: 1px;
          background: #FFFFFF;
          p {
            font-size: 1.4rem;
          }
          .money {
            color: rgba(102,102,102,1);
            span {
              color: rgba(188,48,49,1);
            }
          }
          .time {
            color: rgba(153,153,153,1);
          }
          .address {
            color: rgba(102,102,102,1);
          }
          .arrow {
            position: absolute;
            top: 50%;
            right: 1.5rem;
            transform: translateY(-50%);
            img {
              display: block;
              width: .8rem;
            }
          }
        }
      }
    }
  }
}
</style>
