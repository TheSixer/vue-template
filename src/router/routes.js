const home = r => require.ensure([], () => r(require('@/views/mine/Yhq_details.vue')), 'home')

export default [{
  path: '',
  meta: {
    title: 'home'
  },
  component: home
}]
