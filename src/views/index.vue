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
      <div class="memberInfo">

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
}
</style>
