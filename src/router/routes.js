const hello = r => require.ensure([], () => r(require('@/components/HelloWorld.vue')), 'hello')

export default [{
  path: '',
  meta: {
    title: 'home'
  },
  component: hello
}]
