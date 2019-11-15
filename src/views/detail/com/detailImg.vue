<template>
  <div class="detail-img">
    <img :src="image403(image.image)" alt />
    <div class="detail-title">{{image.title}}</div>
    <div class="detail-source">{{image.image_source}}</div>
  </div>
</template>

<script>
import image403 from 'utils/image403';

export default {
  props: ['image'],
  methods: {
    image403,
  },
};
</script>

<style lang="less" scoped>
.detail-img {
  position: relative;
  margin-top: 1.6rem;
  z-index: 2;
  img {
    width: 100%;
    height:320px;
  }
  .detail-title {
    position: absolute;
    bottom: 0.35rem;
    font-size: 0.35rem;
    margin-left: 0.25rem;
    line-height: 0.4rem;
    color: @fWhite;
    z-index: 2;
  }
  .detail-source {
    position: absolute;
    bottom: 0.15rem;
    right: 0.25rem;
    font-size: 0.2rem;
    color: @source;
    z-index: 2;
  }
}
</style>
