<template>
  <div class="collectHeader">
    <div class="header-menu" @click="$emit('showSideBar')">
      <i class="iconfont icon-menu">&#xe605;</i>
    </div>
    <div class="header-text">{{collectList.length}}条收藏</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['collectList']),
  },
};
</script>

<style lang="less" scoped>
.collectHeader {
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
}
</style>
