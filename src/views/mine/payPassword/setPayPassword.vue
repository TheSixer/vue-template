<template lang="html">
  <div class="setPayPassword">
    <header class="header">
      <div class="inputItem">
        <span><input ref="input1" v-model="pwd1" type="password" name="" value="" maxLength="1"></span>
        <span><input ref="input2" v-model="pwd2" type="password" name="" value="" maxLength="1"></span>
        <span><input ref="input3" v-model="pwd3" type="password" name="" value="" maxLength="1"></span>
        <span><input ref="input4" v-model="pwd4" type="password" name="" value="" maxLength="1"></span>
        <span><input ref="input5" v-model="pwd5" type="password" name="" value="" maxLength="1"></span>
        <span><input ref="input6" v-model="pwd6" type="password" name="" value="" maxLength="1"></span>
      </div>
    </header>
  </div>
</template>


<script>
const reg = /^[0-9]*[1-9][0-9]*$/
export default {
  data () {
    return {
      pwd1: '',
      pwd2: '',
      pwd3: '',
      pwd4: '',
      pwd5: '',
      pwd6: ''
    }
  },
  mounted () {
    this.$refs['input2'].focus()
  },
  watch: {
    pwd1 (newVal) {
      if (reg.test(newVal)) {
        console.log(true)
      } else {
        console.log(false)
      }
    },
    pwd2 (newVal) {

    },
    pwd3 (newVal) {

    },
    pwd4 (newVal) {

    },
    pwd5 (newVal) {

    },
    pwd6 (newVal) {

    }
  }
}
</script>

<style lang="less" scoped>
.setPayPassword {
  .header {
    padding: 10rem 7vw;
    .inputItem {
      display: flex;
      span {
        flex: 1;
        padding: 0 .2rem;
        input {
          width: 100%;
          height: 14vw;
          text-align: center;
        }
      }
    }
  }
}
</style>
