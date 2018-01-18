<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="banner" src="../assets/mine_bg.png" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="body">
      <div class="member">
        <div class="memberInfo">
          <span>
            <img src="../assets/mine_bg.png" alt="">
          </span>
          <span>会员姓名</span>
        </div>
        <span class="comments">
          <img src="../assets/comments.png" alt="">
          <span>32</span>
        </span>
      </div>

      <div class="card">
        <img src="../assets/mine_bg.png" alt="">

        <button type="button" name="button">领取会员卡</button>
      </div>

      <div class="memberCards">
        <p class="title">引导语--</p>
        <span class="subTitle">每消费1元，赠送1积分，用卡可享受8.8折优惠！</span>

        <ul class="cards">
          <li>
            <div class="cardItem">
              <div class="cardLogo" :style="{background: '#000'}">

              </div>
              <div class="cardInfo">
                <div class="info">
                  <p>酷乐潮玩五角场店满288减38</p>
                  <span>有效期致：2017-12-30</span>
                </div>
                <span>
                  <button type="button" name="button">去领取</button>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      slides: [1, 2, 3, 4, 5],
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.home {
  .banner {
    width: 100vw;
    height: auto;
    display: block;
  }
  .body {
    padding: 0 1.5rem 1rem;
    background: #FFFFFF;
    .member {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .memberInfo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem 0;
        span {
          font-family: PingFang-SC-Bold;
          font-size: 1.7rem;
          color: rgba(51,51,51,1);
          img {
            display: block;
            width: 5rem;
            height: 5rem;
            margin-right: 1rem;
            border-radius: 2.5rem;
          }
        }
      }
      .comments {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          font-size: 1.4rem;
          color: rgba(51,51,51,1);
        }
        img {
          width: auto;
          height: 1.6rem;
          margin-right: 1rem;
        }
      }
    }
    .card {
      text-align: center;
      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: .6rem;
      }
      button {
        height: 3.4rem;
        margin-top: 2rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        background: rgba(35,31,32,1);
        border-radius: 1.7rem;
        font-size: 1.5rem;
        color: #FFFFFF;
      }
    }
    .memberCards {
      .title {
        font-size: 1.7rem;
        color: rgba(51,51,51,1);
      }
      .subTitle {
        font-size: 1.4rem;
        color: rgba(102,102,102,1);
      }
      .cards {
        li {
          .cardItem {
            display: flex;
            align-items: center;
            margin: .8rem 0;
            border: 1px solid rgba(191,191,191,1);
            border-radius: .4rem;
            .cardLogo {
              position: relative;
              width: 9rem;
              height: 10rem;
              border-right: 1px dashed rgba(191,191,191,1);
              &::before {
                content: '';
                position: absolute;
                top: -1px;
                right: -.8rem;
                display: inline-block;
                width: 1.6rem;
                height: .8rem;
                border-right: 1px solid rgba(191,191,191,1);
                border-bottom: 1px solid rgba(191,191,191,1);
                border-left: 1px solid rgba(191,191,191,1);
                border-bottom-left-radius: .8rem;
                border-bottom-right-radius: .8rem;
                background: #FFFFFF;
              }
              &::after {
                content: '';
                position: absolute;
                bottom: -1px;
                right: -.8rem;
                display: inline-block;
                width: 1.6rem;
                height: .8rem;
                border-right: 1px solid rgba(191,191,191,1);
                border-top: 1px solid rgba(191,191,191,1);
                border-left: 1px solid rgba(191,191,191,1);
                border-top-left-radius: .8rem;
                border-top-right-radius: .8rem;
                background: #FFFFFF;
              }
            }
            .cardInfo {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex: 1;
              height: 10rem;
              padding: .8rem 1rem;
              border-right: .5rem solid rgba(51,51,51,1);
              border-top-right-radius: .4rem;
              border-bottom-right-radius: .4rem;
              .info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                flex: 1;
                height: 8rem;
                p {
                  overflow : hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  font-size: 1.7rem;
                  color: rgba(51,51,51,1);
                }
                span {
                  font-size: 1.3rem;
                  color: rgba(102,102,102,1);
                }
              }
              span {
                button {
                  height: 3.2rem;
                  margin-left: .5rem;
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                  background: #FFFFFF;
                  font-size: 1.5rem;
                  color: rgba(188,48,49,1);
                  border-radius: 1.6rem;
                  border: .1rem solid rgba(188,48,49,1);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
