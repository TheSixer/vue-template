<template>
  <header>
    <div class="nav">
      <img src="../../assets/back.png" alt="">
      <span>{{msg}}</span>
      <div class="nav_right">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return{
      aa:""
    }
  },
  props:["msg"],
}
</script>
<style lang="less" scoped>
  header{
    width: 100%;
    background:#2a2e2d;
    padding: 1.3rem 1.5rem;
    .nav{
      display:flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: 1.9rem;
        font-family:PingFang-SC-Regular;
        color:rgba(180,180,180,1);
      }
      img{
        width: 1.05rem;
        height: 1.85rem;
      }
      .nav_right{
        width: 1.75rem;
        height: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
          width: 0.35rem;
          height: 0.35rem;
          background:rgba(255,243,241,1);
          border-radius: 0.175rem;
        }
      }
    }
  }
  
</style>
