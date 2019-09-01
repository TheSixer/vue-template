<template lang="html">
  <div class="vipCoupons">
    <div class="body">
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
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.vipCoupons {
  .body {
    padding: 1.5rem;
    background: #FFFFFF;
    .cards {
      li {
        padding: 1rem 0;
        .cardItem {
          display: flex;
          align-items: center;
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
              box-sizing: border-box;
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
              box-sizing: border-box;
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
</style>
