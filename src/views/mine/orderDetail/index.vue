<template lang="html">
  <div class="orderDetail">
    <div class="userInfo">
      <group>
        <cell title="姓名" value="可爱又迷人的反派角色"></cell>
        <cell title="联系方式" value="18714971719"></cell>
        <cell title="时段选择" value="晚餐 18:00～22:00"></cell>
      </group>
    </div>

    <div class="orderInfo">
      <div class="title">
        <span>总人数</span>
      </div>
      <div class="item">
        <span class="key">成人</span>
        <span class="val">4人</span>
      </div>
      <div class="item">
        <span class="key">儿童</span>
        <span class="val">4人</span>
      </div>
      <div class="item">
        <span class="key">儿童座椅</span>
        <span class="val">4把</span>
      </div>
    </div>

    <div class="items">
      <span class="key">优惠券数量</span>
      <span class="val">2张</span>
    </div>

    <div class="items">
      <span class="key">门店地址：上海市华滋奔腾大厦A栋14L</span>
      <button type="button" name="button"  @click="location">导航</button>
    </div>

    <div class="btnView">
      <router-link :to="{ name: '', params: {} }">修改预约</router-link>
    </div>

    <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  methods: {
    location () {
      var map = new AMap.Map("mapContainer", {
          resizeEnable: true,
          center: [116.397428, 39.90923],//地图中心点
          zoom: 13 //地图显示的缩放级别
      });
      
      AMap.service(["AMap.Transfer"], function() {
        let transOptions = {
          map: map,
          city: '北京市',
          panel:'panel',                            //公交城市
          //cityd:'乌鲁木齐',
          policy: AMap.TransferPolicy.LEAST_TIME //乘车策略
        }
        //构造公交换乘类
        let trans = new AMap.Transfer(transOptions);
        //根据起、终点坐标查询公交换乘路线
        trans.search([{keyword:'北京市地震局(公交站)'},{keyword:'望京西园4区'}], function(status, result){
        })
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
.orderDetail {
  .userInfo {
    .weui-cells {
      margin-top: .75rem;
    }
    .weui-cell {
      padding: .75rem;
    }
    .vux-label {
      font-size: .7rem;
      color: #333333;
    }
    .weui-cell__ft {
      width: 70vw;
      text-align: left;
      font-size: .7rem;
      color: #333333;
    }
  }
  .orderInfo {
    margin-top: .75rem;
    padding: .25rem .75rem;
    background: #ffffff;
    .title {
      font-size: .7rem;
      color: #333;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 0;
      span {
        color: #999;
        font-size: .7rem;
      }
    }
  }
  .items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .7rem .75rem;
    background: #FFFFFF;
    margin: .75rem 0;
    span {
      font-size: .7rem;
      color: #333333;
    }
    button {
      .bg(#FE9A64, #FF6336);
      appearance: none;
      border: none;
      padding: 0 .1rem;
      color: #ffffff;
      font-size: .65rem;
      width: 2.8rem;
      height: 1.2rem;
      border-radius: .6rem;
    }
  }
  .btnView {
    padding: 2rem 30vw 3rem;
    a {
      display: block;
      text-align: center;
      padding: .25rem 0;
      font-size: .8rem;
      color: #ffffff;
      border-radius: .3rem;
      .bg(#FE9A64, #FF6336);
    }
  }
  .amap-box {
    width: 100vw;
    height: 200px;
  }
}
</style>
