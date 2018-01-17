<template lang="html">
  <div class="ordering">
    <x-header title="活动订餐"></x-header>

    <group title="">
      <x-input title="姓名" type="text" placeholder="请输入姓名" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
      <x-input title="联系方式" type="number" placeholder="请输入联系方式" v-model="password" mask="999 9999 9999" keyboard="number" :min="11" :max="11" is-type="china-mobile" @on-change="change"></x-input>
      <x-input title="验证码" class="weui-vcode" type="number" placeholder="请输入验证码" :min="6" :max="6">
        <x-button slot="right" type="default" mini>获取验证码</x-button>
      </x-input>
    </group>

    <div class="panel">
      <div class="panel_hd">
        <label>时段选择</label>
      </div>
      <div class="content">
        <label for="morning">
          <span>
            <img src="../../assets/checked.png" alt="">
          </span>
          早餐（9:00～11:30）
        </label>
        <input type="radio" name="sex" id="morning" />
        <label for="noon">
          <span>
            <img src="../../assets/checked.png" alt="">
          </span>
          午餐（11:30～14:30）
        </label>
        <input type="radio" name="sex" id="noon" />
        <label for="afternoon">
          <span>
            <img src="../../assets/checked.png" alt="">
          </span>
          下午茶（14:30～17:30）
        </label>
        <input type="radio" name="sex" id="afternoon" />
        <label for="evening">
          <span>
            <img src="../../assets/checked.png" alt="">
          </span>
          晚餐（17:30～20:30）
        </label>
        <input type="radio" name="sex" id="evening" />
      </div>
    </div>

    <div class="item">
      <div class="title">
        <span>日期选择</span>
      </div>
      <inline-calendar
        ref="calendar"
        @on-change="onChange"
        @on-view-change="onViewChange"
        class="inline-calendar-demo"
        :show.sync="show"
        v-model="value"
        start-date="2016-04-01"
        end-date="2018-05-30"
        :range="range"
        :show-last-month="showLastMonth"
        :show-next-month="showNextMonth"
        :highlight-weekend="highlightWeekend"
        :return-six-rows="return6Rows"
        :hide-header="hideHeader"
        :hide-week-list="hideWeekList"
        :replace-text-list="replaceTextList"
        :weeks-list="weeksList"
        :render-function="buildSlotFn"
        :disable-past="disablePast"
        :disable-future="disableFuture"
        :disable-weekend="disableWeekend"
        :disable-date-function="disableDateFunction">
        </inline-calendar>

      <div class="dTips">
        <div class="tip">
          <span class="point choose"></span>
          <span>选中定位</span>
        </div>
        <div class="tip">
          <span class="point"></span>
          <span>定位已满</span>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <span>人数选择</span>
        <span class="subTitle"></span>
      </div>
      <div class="body">
        <group title="">
          <cell title="剩余座位" value="199"></cell>
          <x-number title="成人人数" :value="0" :min="0" @on-change="change"></x-number>
          <x-number title="儿童人数" :value="0" :min="0" @on-change="change"></x-number>
          <cell title="宝宝椅数量" value="value"></cell>
          <x-number title="选择宝宝椅数量" :value="0" :min="0" @on-change="change"></x-number>
        </group>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <span>优惠券选择</span>
        <span class="subTitle">您已经有优惠券，请选择使用数量</span>
      </div>
      <div class="body">
        <div class="weui-cells vux-no-group-title">
          <div class="weui-cell">
            <div>
              <p class="">选择使用优惠券数量</p>
            </div>
            <div class="weui-cell__ft vux-cell-primary" style="font-size: 0px;">
              <div style="float: right;">
                <a class="vux-number-selector vux-number-selector-sub vux-number-disabled">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
                    <defs></defs>
                    <path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"></path>
                  </svg>
                </a>
                <input readonly="readonly" value="1" pattern="[0-9]*" type="number" class="vux-number-input" style="width: 50px;">
                <a class="vux-number-selector vux-number-selector-plus">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                    <defs></defs>
                    <path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="weui-cell__ft vux-cell-primary" style="display: none;">0</div>
          </div>

          <div class="weui-cell">
            <div>
              <p class="">儿童游乐园优惠券 <span>¥289</span> </p>
            </div>
            <div class="weui-cell__ft vux-cell-primary" style="font-size: 0px;">
              <div style="float: right;">
                <a class="vux-number-selector vux-number-selector-sub vux-number-disabled">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
                    <defs></defs>
                    <path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"></path>
                  </svg>
                </a>
                <input readonly="readonly" value="1" pattern="[0-9]*" type="number" class="vux-number-input" style="width: 50px;">
                <a class="vux-number-selector vux-number-selector-plus">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                    <defs></defs>
                    <path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="weui-cell__ft vux-cell-primary" style="display: none;">0</div>
          </div>
        </div>
        <div class="more">
          <span>了解更多优惠券信息</span>
          <span @click="showModal">
            <img src="../../assets/tips.png" alt="">
          </span>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <span>添加备注</span>
        <span class="subTitle"></span>
      </div>
      <div class="body" style="padding: .2rem 0 .75rem;">
        <group>
          <x-textarea v-model="value" placeholder="备注" :height="150"></x-textarea>
        </group>
      </div>
    </div>

    <div class="btnView">
      <x-button type="default" action-type="button" @click.native="ordering = true">立即预订</x-button>
    </div>

    <modal
    :modal="ordering"
    :on-close="cancelOrder">
      <div class="confirmModal">
        <div class="cTitle">
          <span>确认预约</span>
        </div>
        <p>您是否预约 2017-12-25 晚餐（16:00～22:00）3人餐，如有预约请完成确认操作。</p>
        <div class="cBtnView">
          <x-button class="cancelBtn" type="default" action-type="button" @click.native="ordering = false" mini>立即预订</x-button>
          <x-button type="default" action-type="button" @click.native="orderNow" mini>立即预订</x-button>
        </div>
      </div>
    </modal>

    <modal
    :modal="isOpen"
    :on-close="hideModal">
      <div class="mBody">
        <img class="mHeader" src="../../assets/modalBg.png" alt="">
        <div class="mTitle">
          <span>优惠券介绍</span>
        </div>
        <div class="mContent">
          <span class="subTitle">(1)使用规则：</span>
          <span>需要判断用户目前有没有优惠券，有的话可以不选择购买优惠券，没有的话需要选择购买最少一张优惠券</span>
          <span class="subTitle">(2)使用时间：</span>
          <span>有效期：2018年12月31日之前</span>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { InlineCalendar, XNumber, XHeader, XInput, Group, XButton, Cell, XTextarea } from 'vux'
import Modal from '@/components/modal'

export default {
  components: {
    InlineCalendar,
    XTextarea,
    XNumber,
    XHeader,
    XInput,
    XButton,
    Group,
    Modal,
    Cell
  },
  methods: {
    change () {

    },
    onChange (val) {
      console.log('on-change', val)
    },
    onViewChange (val, count) {
      console.log('on view change', val, count)
    },
    cancelOrder () {
      this.ordering = false
    },
    showModal () {
      this.isOpen = true
    },
    hideModal () {
      this.isOpen = false
    }
  },
  data () {
    return {
      isOpen: false,
      ordering: false,
      password: '',
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {'2018-01-08': '已满'},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction (date) {
        if (date.formatedDate === '2017-10-16') {
          return true
        }
      }
    }
  },
  watch: {
    replace (val) {
      this.replaceTextList = val ? {
        '2018-1-8': '今'
      } : {}
    },
    useCustomFn (val) {
      this.buildSlotFn = val ? (line, index, data) => {
        return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
      } : () => ''
    },
    changeWeeksList (val) {
      this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  }
}
</script>

<style lang="less">
.ordering {
  .vux-header {
    background-color: #ffffff;
    .vux-header-title {
      color: #333333;
    }
  }
  .weui-cells {
    margin-top: .75rem;
  }
  .weui-btn_default {
    color: #FFFFFF;
    background-color: #FF6336;
  }
  .weui-label {
    font-size: .7rem;
  }
  .inline-calendar {
    font-size: .7rem;
  }
  .panel {
    display: flex;
    background: #ffffff;
    margin-top: .75rem;
    padding: .25rem 0;
    .panel_hd {
      label {
        white-space: nowrap;
        padding: 0 15px;
        font-size: .6rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      label {
        display: flex;
        align-items: center;
        padding: .4rem;
        font-size: .7rem;
        span {
          img {
            display: block;
            width: .7rem;
            margin-right: 1.5rem;
          }
        }
      }
      input {
        display: none;
      }
    }
  }
  .item {
    margin-top: .75rem;
    background: #FFFFFF;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 15px .3rem;
      background: #fff;
      span {
        font-size: .7rem;
        color: #333333;
      }
      .subTitle {
        font-size: .5rem;
        color: #999999;
      }
    }
    .dTips {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      background: #FFFFFF;
      .tip {
        display: flex;
        align-items: center;
        padding: 1rem;
        span {
          line-height: .7rem;
          font-size: .7rem;
          color: #999;
        }
        .point {
          display: inline-block;
          width: .7rem;
          height: .7rem;
          border-radius: .35rem;
          margin-right: .5rem;
          background: #DADADA;
        }
        .choose {
          background: #FF6336;
        }
      }
    }
    .body {
      .weui-cells {
        margin-top: 0;
        &::before {
          content: none;
        }
        &::after {
          content: none;
        }
        .weui-cell {
          &::before {
            content: none;
          }
          div {
            p {
              font-size: .7rem;
              color: #999999;
              span {
                font-size: .65rem;
                color: #FF6336;
                margin-left: 1rem;
              }
            }
          }
          .vux-number-selector-sub {
            border-radius: .15rem 0 0 .15rem;
          }
          .vux-number-selector-plus {
            border-radius: 0 .15rem .15rem 0;
          }
          .weui-textarea {
            font-size: .7rem;
            color: #999;
            padding: .75rem;
            border-radius: .3rem;
            background: #F0F0F0;
          }
        }
      }
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: .5rem 15px;
      background: #ffffff;
      span {
        font-size: .5rem;
        color: #999999;
        img {
          width: .6rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .btnView {
    padding: 2rem .75rem 4rem;
    background: #F2F2F2;
    .weui-btn_default {
      font-size: .8rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
    }
  }
  .mBody {
    .mHeader {
      width: 100%;
    }
    .mTitle {
      text-align: center;
      font-size: .8rem;
      color: #333333;
    }
    .mContent {
      padding: .5rem 1rem;
      display: flex;
      flex-direction: column;
      span {
        font-size: .6rem;
        color: #999;
      }
      .subTitle {
        display: block;
        color: #666;
        padding: .3rem 0;
      }
    }
  }
  .confirmModal {
    .cTitle {
      font-size: .8rem;
      color: #333333;
      padding: 1rem;
      text-align: center;
    }
    p {
      font-size: .7rem;
      color: #666666;
      padding: .5rem .75rem 1rem;
    }
    .cBtnView {
      display: flex;
      align-items: center;
      justify-content: center;
      .weui-btn {
        margin: 0;
      }
      .cancelBtn {
        background-color: #C8C8C8;
        margin-right: 2rem;
      }
    }
  }
}
</style>
