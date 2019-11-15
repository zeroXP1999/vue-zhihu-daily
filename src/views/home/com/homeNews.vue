<template>
  <div id="home-news">
    <ul class="news-latest">
      <li class="news-date">今日新闻</li>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="news-info"
        v-for="(item, index) in latestStories"
        :key="index"
      >
        <div class="news-info-desc">{{item.title}}</div>
        <img :src="image403(item.images[0])" alt class="news-info-img" />
      </router-link>
    </ul>

    <ul class="news-past" v-for="(item, index) in beforeStories" :key="index">
      <li class="news-date">{{dateFormat(item.date)}}</li>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="news-info"
        v-for="(story, outdex) in item.stories"
        :key="outdex"
      >
        <div class="news-info-desc">{{story.title}}</div>
        <img :src="image403(story.images[0])" alt class="news-info-img" />
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
import image403 from 'utils/image403';

export default {
  computed: {
    ...mapState(['latestStories', 'beforeStories']),
  },
  methods: {
    // 将yyyymmdd格式的日期数字字符串转成想要的日期字符串，20180820 -> 08月20日 星期x
    dateFormat(dateString) {
      let day = '';
      switch (moment(dateString).format('e')) {
        case '0':
          day = '日';
          break;
        case '1':
          day = '一';
          break;
        case '2':
          day = '二';
          break;
        case '3':
          day = '三';
          break;
        case '4':
          day = '四';
          break;
        case '5':
          day = '五';
          break;
        case '6':
          day = '六';
          break;

        default:
          break;
      }
      return `${moment(dateString).format('MM月DD日')} 星期${day}`;
    },
    image403,
  },
};
</script>

<style lang="less" scoped>
#home-news {
  height: 100%;
  .news-latest,
  .news-past {
    background-color: @bgColor;
    text-align: center;
    overflow: hidden;
  }

  .news-date {
    text-align: left;
    line-height: 0.9rem;
    font-size: 0.28rem;
    padding-left: 0.3rem;
    color: @textColorClick;
  }

  .news-info {
    width: 95%;
    background-color: @fWhite;
    margin: 0 auto 0.1rem;
    border-radius: 0.1rem;
    overflow: hidden;
    display: flex;
    align-items: center;

    .news-info-desc {
      flex: 2;
      margin: 0 0.6rem;
      color: @textColorUnclick;
      line-height: 0.7rem;
      text-align: left;
    }

    .news-info-img {
      width: 20%;
      flex: 1;
      margin: 0.18rem 0.3rem 0.18rem 0;
    }
  }
}
</style>
