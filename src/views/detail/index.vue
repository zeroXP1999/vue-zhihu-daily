<template>
  <div class="detail" v-show="show">
    <link rel="stylesheet" :href="story.css" />
    <detail-header
      :prevParams="prevParams"
      :extraStory="storyExtra"
      @showShare="shareShow = !shareShow"
    ></detail-header>
    <detail-img :image="story"></detail-img>
    <detail-content :story="story"></detail-content>
    <fade-animation>
      <detail-share v-show="shareShow"></detail-share>
    </fade-animation>
  </div>
</template>

<script>
import DetailHeader from './com/detailHeader.vue';
import DetailImg from './com/detailImg.vue';
import DetailContent from './com/detailContent.vue';
import DetailShare from './com/detailShare.vue';
import fadeAnimation from 'common/fadeAnimation.vue';
import axios from 'axios';

export default {
  components: {
    DetailHeader,
    DetailImg,
    DetailContent,
    DetailShare,
    fadeAnimation,
  },
  watch: {
    $route() {
      this.getDetailData();
      this.getDetailExtraData();
    },
  },
  data() {
    return {
      story: {},
      storyExtra: {},
      //   等数据加载完再渲染的标志
      show: false,
      shareShow: false,
      prevParams: '',
    };
  },
  methods: {
    //   根据url的id进行对具体新闻内容的请求
    getDetailData() {
      axios.get(`/api/4/news/${this.$route.params.id}`).then((res) => {
        if (res.status === 200) {
          this.story = res.data;
        }
      });
    },
    // 根据url的id进行对具体新闻额外内容的请求，例如评论和点赞数
    getDetailExtraData() {
      axios.get(`/api/4/story-extra/${this.$route.params.id}`).then((res) => {
        if (res.status === 200) {
          this.storyExtra = res.data;
        }
        this.show = true;
      });
    },
  },
  mounted() {
    this.getDetailData();
    this.getDetailExtraData();
  },
  // 获取在导航完成前获取上一页的路由路径
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevParams = from.path;
    });
  },
};
</script>

<style lang="less" scoped>
</style>
