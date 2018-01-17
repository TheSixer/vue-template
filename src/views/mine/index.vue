<template lang="html">
  <div class="mine">
    <div class="tabView" v-if="currentPath === 'myOrdering' || currentPath === 'myOrdered'">
      <div class="tab">
        <div class="link" :class="{'active': currentPath === 'myOrdering'}">
          <router-link :to="{ name: 'myOrdering', params: {} }">已预约</router-link>
        </div>
      </div>
      <div class="tab">
        <div class="link" :class="{'active': currentPath === 'myOrdered'}">
          <router-link :to="{ name: 'myOrdered', params: {} }">已使用</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    currentPath () {
      return this.$route.name
    }
  }
}
</script>

<style lang="less">
.mine {
  .tabView {
    display: flex;
    align-items: center;
    background: #ffffff;
    margin-bottom: .75rem;
    .tab {
      flex: 1;
      text-align: center;
      .link {
        display: inline-block;
        padding: .2rem 0;
        a {
          display: inline-block;
          font-size: .7rem;
          line-height: 1.2rem;
          color: #999;
        }
        &.active {
          color: #333;
          border-bottom: 3px solid #FF6336;
        }
      }
    }
  }
}
</style>
