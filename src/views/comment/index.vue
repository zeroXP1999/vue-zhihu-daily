<template>
  <div class="comment">
    <comment-header :storyExtra="storyExtra"></comment-header>
    <long-comment :storyExtra="storyExtra"></long-comment>
  </div>
</template>

<script>
import CommentHeader from 'comment/com/commentHeader.vue';
import LongComment from 'comment/com/longComment.vue';
// import WriteCommentHeader from 'comment/com/writeCommentHeader.vue';
// import WriteComment from 'comment/com/writeComment.vue';
import axios from 'axios';

export default {
  components: {
    CommentHeader,
    LongComment,
    // WriteCommentHeader,
    // WriteComment,
  },
  data() {
    return {
      storyExtra: {}, // 新闻额外信息
    };
  },
  methods: {
    // 获取新闻额外信息
    getStoryExtra(id) {
      return axios.get(`/api/4/story-extra/${id}`).then((res) => {
        if (res.status === 200) {
          this.storyExtra = res.data;
        }
      });
    },
  },
  mounted() {
    this.getStoryExtra(this.$route.params.id);
  },
};
</script>

<style lang="less" scoped>
</style>
