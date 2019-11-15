<template>
    <div class="detail-content" v-html="image403(story.body)"></div>
</template>

<script>
import image403 from 'utils/image403';

export default {
  props: ['story'],
  methods: {
    image403,
  },
};
</script>

<style lang="less" scoped>
.detail-content {
  position: relative;
  top: -200px
}
</style>
