<template lang="html">
  <div class="mine">
    <header class="header">
      <router-link :to="{ name: 'myInfo', params: {} }" class="myInfo">
        <div class="basicInfo">
          <span>
            <img src="../../assets/mine_bg.png" alt="">
          </span>
          <span>一叶知秋</span>
        </div>
        <span class="arrow">
          <img src="../../assets/arrow-right.png" alt="">
        </span>
      </router-link>

      <div class="moreInfo">
        <p><span><i>￥</i>8.00 </span>余额</p>
        <button type="button" name="button" @click="() => $router.push({name: 'recharge'})">充值</button>
      </div>
    </header>

    <div class="body">
      <div class="tabs">
        <router-link :to="{ name: 'rechargeRecord', params: {} }" class="tab">
          <span>
            <img src="../../assets/rechargeRecord.png" alt="">
          </span>
          <span>充值记录</span>
        </router-link>
        <router-link :to="{ name: 'purchaseHistory', params: {} }" class="tab">
          <span>
            <img src="../../assets/spendRecord.png" alt="">
          </span>
          <span>消费记录</span>
        </router-link>
        <router-link :to="{ name: 'myIntegral', params: {} }" class="tab">
          <span>
            <img src="../../assets/myIntegral.png" alt="">
          </span>
          <span>我的积分</span>
        </router-link>
      </div>

      <div class="items">
        <ul>
          <li>
            <router-link :to="{ name: 'myCoupons', params: {} }" class="listItem">
              <div class="item">
                <span><img src="../../assets/myCoupons.png" alt=""></span>
                <span>我的优惠券</span>
              </div>
              <span class="link"><img src="../../assets/arrow-right.png" alt=""></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'vipCoupons', params: {} }" class="listItem">
              <div class="item">
                <span><img src="../../assets/vipCoupons.png" alt=""></span>
                <span>会员每月优惠券</span>
              </div>
              <span class="link"><img src="../../assets/arrow-right.png" alt=""></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'vipRights', params: {} }" class="listItem">
              <div class="item">
                <span><img src="../../assets/vipRights.png" alt=""></span>
                <span>会员权益</span>
              </div>
              <span class="link"><img src="../../assets/arrow-right.png" alt=""></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'payPassword', params: {} }" class="listItem">
              <div class="item">
                <span><img src="../../assets/payPassword.png" alt=""></span>
                <span>支付密码</span>
              </div>
              <span class="link"><img src="../../assets/arrow-right.png" alt=""></span>
            </router-link>
          </li>
          <li>
            <div class="listItem">
              <div class="item">
                <span><img src="../../assets/customService.png" alt=""></span>
                <span>客服电话</span>
              </div>
              <span class="link">021-5298520<img src="../../assets/arrow-right.png" alt=""></span>
            </div>
          </li>
          <li>
            <router-link :to="{ name: 'newActivity', params: {} }" class="listItem">
              <div class="item">
                <span><img src="../../assets/newActivity.png" alt=""></span>
                <span>最新活动</span>
              </div>
              <span class="link"><img src="../../assets/arrow-right.png" alt=""></span>
            </router-link>
          </li>
        </ul>
      </div>
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
    height: 17.8rem;
    padding: 1.5rem;
    background-image: url(../../assets/mine_bg.png);
    background-size: cover;
    background-position: center;
    .myInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .basicInfo {
        display: flex;
        align-items: center;
        span {
          font-size: 1.8rem;
          color: rgba(255,255,255,1);
          img {
            display: block;
            width: 5.8rem;
            height: 5.8rem;
            margin-right: 1rem;
            border: 1px solid #FFFFFF;
            border-radius: 2.9rem;
          }
        }
      }
      .arrow {
        img {
          height: 1.3rem;
        }
      }
    }
    .moreInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      p {
        font-size: 1.4rem;
        color: rgba(255,255,255,1);
        span {
          font-size: 2.4rem;
          color: rgba(188,48,49,1);
          i {
            font-size: 1.6rem;
            font-style: normal;
          }
        }
      }
      button {
        height: 3rem;
        // line-height: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: #FFFFFF;
        font-size: 1.7rem;
        border: .1rem solid #FFFFFF;
        border-radius: 1.5rem;
        background: none;
      }
    }
  }
  .body {
    padding: 1rem 1.5rem;
    margin-top: -5rem;
    .tabs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-radius: .4rem;
      background: #FFFFFF;
      .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        span {
          font-size: 1.4rem;
          color: #333333;
          img {
            display: block;
            width: 4.3rem;
            height: 4.3rem;
            margin-bottom: .8rem;
          }
        }
      }
    }
    .items {
      margin-top: .8rem;
      padding: 2rem 1.5rem 3rem;
      border-radius: .4rem;
      background: #FFFFFF;
      ul {
        li {
          .listItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 4.8rem;
            border-bottom: 1px solid rgba(187,187,187,1);
            .item {
              display: flex;
              align-items: center;
              span {
                font-size: 1.4rem;
                color: #333333;
                img {
                  display: block;
                  margin-right: 1.5rem;
                  width: 1.7rem;
                  height: auto;
                }
              }
            }
            .link {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.4rem;
              color: #333333;
              img {
                display: block;
                width: auto;
                height: 1.3rem;
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
