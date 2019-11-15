<template>
  <div id="home-swiper">
    <swiper class="swiper" :options="swiperOption" v-if="topStories.length">
      <swiper-slide v-for="item in topStories" :key="item.id">
        <router-link :to="'/detail/' + item.id">
          <img :src="item.image" alt />
          <div class="swiper-desc">{{item.title}}</div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapState } from 'vuex';
import 'styles/swiper.css';

export default {
  data() {
    return {
      swiperOption: {
        //   设置路边指标(即轮播图下方的圆点)
        notNextTick: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    ...mapState(['topStories']),
  },
};
</script>

<style lang="less" scoped>
#home-swiper {
  position: relative;
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 4.6rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .swiper-desc {
      position: absolute;
      bottom: 0.4rem;
      color: #ffffff;
      font-size: 0.35rem;
      margin: 0 0.3rem;
      line-height: 0.4rem;
      z-index: 2;
    }
  }
}
</style>
