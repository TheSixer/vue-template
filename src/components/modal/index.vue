<template>
  <div class="modal">
    <div class="modalBg" @click="close" v-if="modal"></div>
    <transition name="move">
      <div class="modal" v-if="modal">
        <slot>
          弹窗内容
        </slot>

        <!-- <span class="close" @click="close">
          <img src="../../../static/assets/close.png" alt="">
        </span> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    }
  },
  data () {
    return {

    }
  },
  methods: {
    close () {
      this.onClose()
    }
  }
}
</script>

<style lang="less">

.modal {
  .modalBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade(#000, 30%);
    z-index: 999;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80vw;
    min-height: 10rem;
    background: #ffffff;
    animation: move-in;
    border-radius: .4rem;
    // padding: 1.5rem;
    transform: translate(-50%, -50%);
    z-index: 1001;
    .close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      img {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: bottom;
      }
    }
  }

  .move-enter-active {
    animation: move-in .5s;
  }
  .move-leave-active {
    animation: move-out .7s;
  }
  @keyframes move-in {
    0% {
      top: -50%;
    }
    100% {
      top: 50%;
    }
  }
  @keyframes move-out {
    0% {
      top: 50%;
    }
    50% {
      top: 15%;
    }
    100% {
      top: -50%;
    }
  }
}
</style>
