<template>
  <div class="comment-header">
    <div class="two-cup">
      <router-link :to="'/detail/'+this.$route.params.id">
        <div class="header-back">
          <i class="iconfont icon-back">&#xe64c;</i>
        </div>
      </router-link>

      <div class="header-text">{{storyExtra.comments}}条点评</div>
    </div>

    <div class="header-write">
      <i class="iconfont icon-write">&#xe702;</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['storyExtra'],
};
</script>

<style lang="less" scoped>
.comment-header {
  width: 100%;
  height: 1.6rem;
  background-color: @baseBlueColor;
  font-size: 0.35rem;
  color: @fWhite;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5%;
  .two-cup {
    display: flex;
    width: 120px;
    justify-content: space-between;
    .header-back {
      color: #fff;
    }
  }
}
</style>
