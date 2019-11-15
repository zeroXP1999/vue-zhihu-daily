<template>
  <div id="homeheader">
    <header-com class="header">
      <div class="two-cup">
        <span class="iconfont icon-menu" @click="$emit('showSideBar')">&#xe605;</span>
        <span class="headertext">首先</span>
      </div>
      <div class="two-cup">
        <span class="iconfont icon-alert headeralert">&#xe794;</span>
        <span class="iconfont icon-set">&#xe6a9;</span>
      </div>
    </header-com>
  </div>
</template>

<script>
import headerCom from 'common/header.vue';

export default {
  components: {
    headerCom,
  },
};
</script>

<style lang="less" scoped>
#homeheader {
  height: 1.6rem;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: @baseBlueColor;
    overflow: hidden;
    height: 1.6rem;
    font-size: 0.35rem;
    color: @fWhite;
    box-sizing: border-box;
    padding: 0 5%;

    .two-cup {
      display: flex;
      justify-content: space-between;
      width: 15%;
      align-items: center;
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
</style>
