<template lang="html">
  <div class="recharge">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="banner" src="../../assets/mine_bg.png" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="body">
      <div class="itemList">
        <a href="javascript:;" class="item">
          <span class="origin"><i>105</i>元</span>
          <span class="now">售价100.00元</span>
        </a>
        <a href="javascript:;" class="item">
          <span class="origin"><i>105</i>元</span>
          <span class="now">售价100.00元</span>
        </a>
        <a href="javascript:;" class="item">
          <span class="origin"><i>105</i>元</span>
          <span class="now">售价100.00元</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'recharge',
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

<style lang="less" scoped>
.recharge {
  .banner {
    width: 100vw;
    height: auto;
    display: block;
  }
  .body {
    padding: 1rem 0;
    background: #FFFFFF;
    .itemList {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 44vw;
        height: 11rem;
        margin-left: 4vw;
        margin-bottom: 1.5rem;
        border-radius: .4rem;
        background: rgba(238,238,238,1);
        &:focus {
          border: 1px solid rgba(188,48,49,1);
        }
        .origin {
          font-size: 1.4rem;
          color: rgba(188,48,49,1);
          i {
            font-size: 3.4rem;
            font-style: normal;
            line-height: 3.8rem;
          }
        }
        .now {
          font-size: 1.4rem;
          color: rgba(51,51,51,1);
        }
      }
    }
  }
}
</style>
