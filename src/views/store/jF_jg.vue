<template>
  <div>
    <headerbar :msg="msg"></headerbar>
    <div class="box">
      <!-- 购买的商品列表 -->
      <ul class="list"  v-for="(item,index) in list" :key="item.id">
        <!-- 单个商品详情 -->
        <li class="goods">
          <!-- 图片 -->
          <img :src="item.src" alt="">
          <!-- 信息 -->
          <div class="goods_info">
            <!-- 介绍 -->
            <p class="introduction">{{item.introduction}}</p>
            <!-- 各种参数 -->
            <div class="goods_details">
              <p class="points">{{item.points_n}}&nbsp;积分&nbsp;+&nbsp;¥{{item.points_p}}</p>
              <div>
                <span class="price">原价&nbsp;:¥{{item.price}}</span>
                <span class="count">库存:&nbsp;&nbsp;{{item.count}}</span>
              </div>
            </div>
            <!-- 各种参数结束 -->
          </div>
          <!-- 信息 结束 -->
        </li>
        <!-- 单个商品详情结束 -->
      </ul>
      <!-- 购买的商品列表结束 -->
    </div>
  </div>  
</template>
<script>
import headerbar from './headerbar.vue'
export default {
  data(){
    return{
      msg : '积分加购', 
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
    .list{
      background: #fff;
      li{
        padding: 1rem 0 1rem 1.5rem;
        border-bottom: 0.05rem solid #e5e5e5;
        overflow: hidden;
        img{
          width: 13rem;
          height: 9rem;
          float: left;
          margin-right: 1rem;
        }
        .goods_info{  
          overflow: hidden;
          padding-top: 0.5rem;
          .introduction{
            height: 3.5rem;
            font-size:1.5rem;
            font-weight: bold;
            font-family:PingFang-SC-Bold;
            color: #333333;
            line-height:1.8rem;
            margin-bottom: 1.2rem;
            margin-right: 1.8rem;
          }
          .goods_details{
            font-size: 1.3rem;
            font-family: PingFang SC;
            p{
              color: #BC3031 ;
              margin-bottom: 0.3rem;            }
            div{
              margin-right: 1.55rem;
              display: flex;
              justify-content: space-between;
              color: #666666;
            }
          }
        }
      }
    }
  }
</style>

