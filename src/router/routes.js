const home = r => require.ensure([], () => r(require('@/views/index.vue')), 'home')

export default [{
  path: '',
  meta: {
    title: 'home'
  },
  component: home
}]
