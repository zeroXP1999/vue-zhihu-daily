<template>
  <div class="comment-area">
    <!-- 我的评论区 -->
    <!-- <div class="my-comment-title">我的评论</div>
    <ul class="my-comment-ul">
      <li class="mycomment-content">
        <div class="content-img"></div>
        <div class="content-text">
          <div class="content-text-top">
            <div class="content-text-author"></div>
            <div class="content-text-like">
              <i class="iconfont icon-like">&#xe60c;</i>
            </div>
          </div>
          <div class="content-text-center">
            <div class="content-text-content"></div>
          </div>
          <div class="content-text-bottom"></div>
        </div>
      </li>
    </ul>-->
    <!-- 长评论区 -->
    <div class="long-comment-title">{{storyExtra.long_comments}}条长评</div>
    <ul class="long-comment-ul">
      <li class="long-comment-content" v-for="(item, index) in longComments" :key="index">
        <div class="content-img">
          <img :src="image403(item.avatar)" alt />
        </div>
        <div class="content-text">
          <div class="content-text-top">
            <div class="content-text-author">{{item.author}}</div>
            <div class="content-text-like">
              <i class="iconfont icon-like">&#xe60c;</i>
              {{item.likes}}
            </div>
          </div>
          <div class="content-text-center">
            <div class="content-text-content">{{item.content}}</div>
            <div class="content-text-replay" v-if="item.reply_to">
              <b>//{{item.reply_to.author}}:</b>
              {{item.reply_to.content}}
            </div>
          </div>
          <div class="content-text-bottom">{{formatTime(item.time)}}</div>
        </div>
      </li>
    </ul>
    <div class="no-longComment" v-if="!longComments.length">
      <div class="no-longComment-content">
        <div class="no-longComment-content-sofa">
          <i class="iconfont">&#xe63b;</i>
        </div>
        <div class="no-longComment-content-text">深度长评虚位以待</div>
      </div>
    </div>
    <!-- 短评论区 -->
    <div class="short-comment-title">{{storyExtra.short_comments}}条短评</div>
    <ul class="short-comment-ul">
      <li class="short-comment-content" v-for="(item, index) in shortComments" :key="index">
        <div class="content-img">
          <img :src="image403(item.avatar)" alt />
        </div>
        <div class="content-text">
          <div class="content-text-top">
            <div class="content-text-author">{{item.author}}</div>
            <div class="content-text-like">
              <i class="iconfont icon-like">&#xe60c;</i>
              {{item.likes}}
            </div>
          </div>
          <div class="content-text-center">
            <div class="content-text-content">{{item.content}}</div>
            <div class="content-text-reply" v-if="item.reply_to">
              <b>//{{item.reply_to.author}}:</b>
              {{item.reply_to.content}}
            </div>
          </div>
          <div class="content-text-bottom">{{formatTime(item.time)}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import image403 from 'utils/image403';
import moment from 'moment';

export default {
  props: ['storyExtra'],
  data() {
    return {
      longComments: {}, // 新闻对应长评论
      shortComments: {}, // 新闻对应短评论
    };
  },
  computed: {
    storyId() {
      return this.$route.params.id;
    },
  },
  methods: {
    //   获取新闻对应长评论
    getLongComments(id) {
      return axios.get(`/api/4/story/${id}/long-comments`).then((res) => {
        if (res.status === 200) {
          this.longComments = res.data.comments;
        }
      });
    },
    // 获取新闻对应短评论
    getShortComments(id) {
      return axios.get(`/api/4/story/${id}/short-comments`).then((res) => {
        if (res.status === 200) {
          this.shortComments = res.data.comments;
        }
      });
    },
    image403,
    formatTime(timeStamp) {
      return moment(timeStamp).format('MM-DD HH:mm');
    },
  },
  mounted() {
    this.getLongComments(this.storyId);
    this.getShortComments(this.storyId);
  },
};
</script>

<style lang="less" scoped>
.comment-area {
  margin-top: 1.6rem;
  width: 100%;
  background-color: @fWhite;
  font-size: 0.5rem;
  line-height: 0.7rem;
  .long-comment-title,
  .short-comment-title,
  .my-comment-title {
    height: 80px;
    padding-left: 30px;
    font-size: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dcdcdc;
  }

  .long-comment-ul,
  .short-comment-ul,
  .my-comment-ul {
    .long-comment-content,
    .short-comment-content,
    .my-comment-content {
      display: flex;
      border-bottom: 0.02rem solid @commentBorder;
      padding: 15px;

      .content-img {
        width: 10%;
        padding-right: 2%;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .content-text {
        flex: 1;
        .content-text-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .content-text-author {
            color: @commentName;
            font-weight: 600;
          }

          .content-text-like {
            color: @commentLike;
          }
        }

        .content-text-center {
          padding-right: 30px;
          .content-text-reply {
            color: @shareText;

            b {
              font-weight: 700;
              color: @commentName;
            }
          }
        }

        .content-text-bottom {
          color: @commentTime;
          font-size: 0.2rem;
          text-align: right;
        }
      }
    }
  }

  .no-longComment {
    width: 100%;
    margin: 0 auto;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .no-longComment-content {
      width: 40%;
      text-align: center;
      color: @sofa;

      .no-longComment-content-sofa span {
        font-size: 2rem;
      }

      .no-longComment-content-text {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
