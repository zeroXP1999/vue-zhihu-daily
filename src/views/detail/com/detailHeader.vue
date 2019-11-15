<template>
  <div class="detail-header" :style="headerOpcity">
    <div class="header-back" @click="back">
      <i class="iconfont icon-back">&#xe64c;</i>
    </div>
    <div class="four-cup">
      <div class="header-like" @click="changeLike">
        <span>
          <i class="iconfont icon-like" ref="like">&#xe60c;</i>
          {{extraStory.popularity}}
        </span>
      </div>
      <router-link :to="'/comment/' + this.$route.params.id">
        <div class="header-comment">
          <span>
            <i class="iconfont icon-comment">&#xe638;</i>
            {{extraStory.comments}}
          </span>
        </div>
      </router-link>

      <div class="header-star" @click="changeStar">
        <i class="iconfont icon-star" ref="star">&#xe61b;</i>
      </div>
      <div class="header-share" @click="$emit('showShare')">
        <i class="iconfont icon-share">&#xe624;</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['extraStory', 'prevParams'],
  data() {
    return {
      headerOpcity: {
        opacity: 1,
      },
      isLike: false,
      isStar: false,
    };
  },
  computed: {
    ...mapState(['collectList', 'likeList']),
  },
  methods: {
    // 根据滑动的距离计算头部的透明度
    changeHeaderOpacity() {
      let top = document.documentElement.scrollTop;
      if (top < 120) {
        this.showHeader = true;
        top = top > 120 ? 120 : top;
        this.headerOpcity.opacity = (120 - top) / 120;
      } else {
        this.headerOpcity.opacity = 0;
      }
    },
    // 是否收藏
    changeStar() {
      if (this.isStar) {
        this.$refs.star.classList.remove('icon-is-star');
        this.$store.dispatch('removeCollectList', this.$route.params.id);
      } else {
        this.$refs.star.classList.add('icon-is-star');
        this.$store.dispatch('addCollectList', this.$route.params.id);
      }
      this.isStar = !this.isStar;
    },
    // 是否喜欢
    changeLike() {
      if (this.isLike) {
        this.$refs.like.classList.remove('icon-is-like');
        this.extraStory.popularity -= 1;
        this.$store.dispatch('removeLikeList', this.$route.params.id);
      } else {
        this.$refs.like.classList.add('icon-is-like');
        this.extraStory.popularity += 1;
        this.$store.dispatch('addLikeList', this.$route.params.id);
      }
      this.isLike = !this.isLike;
    },
    // 点击返回键，根据上一页的路由路径返回上一页
    back() {
      if (this.prevParams === '/collect') {
        this.$router.push('/collect');
      } else {
        this.$router.push('/');
      }
    },
    // 页面加载时判断是否为喜欢和收藏
    loadDate() {
      if (this.collectList.indexOf(this.$route.params.id) !== -1) {
        this.$refs.star.classList.add('icon-is-star');
        this.isStar = true;
      }
      if (this.likeList.indexOf(this.$route.params.id) !== -1) {
        this.$refs.star.classList.add('icon-is-like');
        this.isLike = true;
      }
    },
  },
  mounted() {
    // 设置事件改变头部的透明度
    window.addEventListener('scroll', this.changeHeaderOpacity);
    this.loadDate();
  },
  destroyed() {
    // 解除全局绑定
    window.removeEventListener('scroll', this.changeHeaderOpacity);
  },
};
</script>

<style lang="less" scoped>
.detail-header {
  width: 100%;
  height: 1.6rem;
  background-color: @baseBlueColor;
  overflow: hidden;
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
  .four-cup {
    display: flex;
    width: 200px;
    justify-content: space-around;
    .header-comment {
      color: #fff;
    }
    .icon-comment {
      line-height: 18px;
    }
  }
}

.icon-is-star {
  color: @starColor;
}

.icon-is-like {
  color: @likeColor;
}
</style>
