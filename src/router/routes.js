const home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home')
const ordering = r => require.ensure([], () => r(require('@/views/ordering/index.vue')), 'ordering')

const mine = r => require.ensure([], () => r(require('@/views/mine/index.vue')), 'mine')
const myOrdering = r => require.ensure([], () => r(require('@/views/mine/ordering/index.vue')), 'myOrdering')
const myOrdered = r => require.ensure([], () => r(require('@/views/mine/ordered/index.vue')), 'myOrdered')
const orderDetail = r => require.ensure([], () => r(require('@/views/mine/orderDetail/index.vue')), 'orderDetail')

export default [{
  path: '',
  name: 'home',
  meta: {
    title: '线上预定'
  },
  component: home
}, {
  path: '/ordering',
  name: 'ordering',
  meta: {
    title: '线上预定'
  },
  component: ordering
}, {
  path: '/mine',
  name: 'mine',
  meta: {
    title: '线上预定'
  },
  redirect: '/mine/ordering',
  component: mine,
  children: [{
    path: 'ordering',
    name: 'myOrdering',
    meta: {
      title: '线上预定'
    },
    component: myOrdering
  }, {
    path: '/ordered',
    name: 'myOrdered',
    meta: {
      title: '线上预定'
    },
    component: myOrdered
  }, {
    path: '/:id/order-detail',
    name: 'orderDetail',
    meta: {
      title: '线上预定'
    },
    component: orderDetail
  }]
}]
