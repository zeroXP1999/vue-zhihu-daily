<template>
  <div id="home">
    <fade-animation>
      <side-bar v-show="flagShowSideBar"
      @closeSideBar="toggleSideBar"></side-bar>
    </fade-animation>

    <home-header @showSideBar="toggleSideBar"></home-header>

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <home-swiper></home-swiper>
        <home-news></home-news>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from 'home/com/homeHeader.vue';
import HomeSwiper from 'home/com/homeSwiper.vue';
import HomeNews from 'home/com/homeNews.vue';
import SideBar from 'home/com/sideBar.vue';
import FadeAnimation from 'common/fadeAnimation.vue';
import { mapMutations, mapActions } from 'vuex';
import BScroll from 'better-scroll';

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNews,
    SideBar,
    FadeAnimation,
  },

  data() {
    return {
      // 侧边栏显示标记
      flagShowSideBar: false,
    };
  },
  methods: {
    ...mapActions(['getBefore', 'getNewsLatest']),
    ...mapMutations(['CLEARHOMEPAGE']),
    toggleSideBar() {
      this.flagShowSideBar = !this.flagShowSideBar;
    },
    // 获取主页面的数据
    loadData() {
      if (!this.scroll) {
        this.getNewsLatest().then(() => {
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
            });
            // 上拉加载
            this.scroll.on('scrollEnd', () => {
              if (this.scroll.y <= this.scroll.maxScrollY + 50) {
                this.getBefore().then(() => {
                  this.$nextTick(() => {
                    this.scroll.refresh();
                  });
                });
              }
            });
            // 下拉刷新
            this.scroll.on('touchEnd', (pos) => {
              if (pos.y > 50) {
                this.CLEARHOMEPAGE();
                this.getNewsLatest().then(() => {
                  this.$nextTick(() => {
                    this.scroll.refresh();
                  });
                });
              }
            });
          });
        });
      }
    },
  },
  mounted() {
    this.loadData();
    this.flagShowSideBar = false;
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  background: #f3f3f3;
  overflow: hidden;
  .wrapper {
    height: 768px;
  }
}
</style>
