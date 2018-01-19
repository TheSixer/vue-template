<template>
  <div>
    <headerbar :msg="msg"></headerbar>
    <div class="box">
      <nav>
        <img src="../../assets/back.png" alt="">
        <span>优惠券详情</span>
        <span class="empty"></span>
      </nav>
      <img src="../../assets/banner1.png" alt="" class="banner">
      <main>
        <p>商品名称商品名称商品名称商品名称商品商品最多显示一行...</p>
        <div>
          <span>400&nbsp;积分</span>
          <span>原价:&nbsp;&nbsp;¥20.00</span>
          <span>每人限领2件</span>
        </div>
      </main>
    </div>
  </div>  
</template>
<script>
import headerbar from './headerbar.vue'
export default {
  data(){
    return{
      msg : '积分商城', 
      list:[
        {"id":1,"introduction":"关于音乐的那些事情，让耳朵怀孕的设备~~","src":"src/assets/goods1.png",
        "points_n":400,"points_p":"200.00","price":"20.00","count":"200"},
        {"id":2,"introduction":"RAP起来吧，布鲁斯&蓝调课程任你挑选！","src":"src/assets/goods2.png",
        "points_n":400,"points_p":"100.00","price":"20.00","count":"100"},
        {"id":3,"introduction":"RAP起来吧，布鲁斯&蓝调课程任你挑选！","src":"src/assets/goods3.png",
        "points_n":400,"points_p":"200.00","price":"20.00","count":"200"},
      ]
    }
  },
  // methods(){

  // },
  components:{
    headerbar
  }
}
</script>
<style lang="less" scoped>
  .box{
    width: 100%;
    nav{
      background: #fff;
      height: 4.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0 1.5rem;
      img{
        height: 1.85rem;
        width: 1.05rem;
      }
      span{
        color: #333333;
        font-size: 1.6rem;
        font-family: PingFang-SC-Medium;
      }
      .empty{
        width: 1.75rem;
        height: 0.35rem;
      }
    }
    .banner{
      height: 16rem;
      width: 100%;
    }
  }
</style>

