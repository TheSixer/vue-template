const home = r => require.ensure([], () => r(require('@/views/index.vue')), 'home')
//  个人中心
const mine = r => require.ensure([], () => r(require('@/views/mine/index.vue')), 'mine')
const myInfo = r => require.ensure([], () => r(require('@/views/mine/myInfo.vue')), 'myInfo')
const balance = r => require.ensure([], () => r(require('@/views/mine/balance.vue')), 'balance')
const recharge = r => require.ensure([], () => r(require('@/views/mine/recharge.vue')), 'recharge')
const purchaseHistory = r => require.ensure([], () => r(require('@/views/mine/balance/purchaseHistory.vue')), 'purchaseHistory')
const rechargeRecord = r => require.ensure([], () => r(require('@/views/mine/balance/rechargeRecord.vue')), 'rechargeRecord')
const purchaseDetail = r => require.ensure([], () => r(require('@/views/mine/balance/purchaseDetail.vue')), 'purchaseDetail')
const rechargeDetail = r => require.ensure([], () => r(require('@/views/mine/balance/rechargeDetail.vue')), 'rechargeDetail')
const myIntegral = r => require.ensure([], () => r(require('@/views/mine/myIntegral.vue')), 'myIntegral')
const vipCoupons = r => require.ensure([], () => r(require('@/views/mine/vipCoupons.vue')), 'vipCoupons')
const payPassword = r => require.ensure([], () => r(require('@/views/mine/payPassword/index.vue')), 'payPassword')
const setPayPassword = r => require.ensure([], () => r(require('@/views/mine/payPassword/setPayPassword.vue')), 'setPayPassword')

export default [{
  path: '',
  name: 'home',
  meta: {
    title: 'home'
  },
  component: home
}, {
  path: '/mine',
  redirect: '/mine',
  component: { render (c) { return c('router-view') } },
  children: [{
    path: '',
    name: 'mine',
    meta: {
      title: '个人中心'
    },
    component: mine
  }, {
    path: 'recharge',
    name: 'recharge',
    meta: {
      title: '充值'
    },
    component: recharge
  }, {
    path: 'my-info',
    name: 'myInfo',
    meta: {
      title: '个人资料'
    },
    component: myInfo
  }, {
    path: 'balance',
    redirect: 'balance/purchase-history',
    component: balance,
    children: [{
      path: 'purchase-history',
      name: 'purchaseHistory',
      meta: {
        title: '消费记录'
      },
      component: purchaseHistory
    }, {
      path: 'recharge-record',
      name: 'rechargeRecord',
      meta: {
        title: '充值记录'
      },
      component: rechargeRecord
    }]
  }, {
    path: ':id/purchase-detail',
    name: 'purchaseDetail',
    meta: {
      title: '消费记录详情'
    },
    component: purchaseDetail
  }, {
    path: ':id/recharge-detail',
    name: 'rechargeDetail',
    meta: {
      title: '充值记录详情'
    },
    component: rechargeDetail
  }, {
    path: 'my-integral',
    name: 'myIntegral',
    meta: {
      title: '我的积分'
    },
    component: myIntegral
  }, {
    path: 'vip-coupons',
    name: 'vipCoupons',
    meta: {
      title: '会员每月优惠券'
    },
    component: vipCoupons
  }, {
    path: 'pay-password',
    component: { render (c) { return c('router-view') } },
    children: [{
      path: '',
      name: 'payPassword',
      meta: {
        title: '支付密码'
      },
      component: payPassword
    }, {
      path: 'set-pay-password',
      name: 'setPayPassword',
      meta: {
        title: '支付密码'
      },
      component: setPayPassword
    }]
  }]
}]
