<template>
  <div id="side-bar" @click.self="$emit('closeSideBar')" @touchmove.prevent>
    <SideBarAnimation>
      <div class="side-bar-content">
        <div class="content-top">
          <div class="content-top-user">
            <div class="content-top-user-head">
              <img :src="user.head" alt />
            </div>
            <div class="content-top-user-name">
              <p>{{user.id}}</p>
            </div>
          </div>
          <div class="content-top-two">
            <div class="content-top-two-star" @click="goToCollect">
              <i class="iconfont">&#xe61b;</i>我的收藏
            </div>
            <div class="content-top-two-download">
              <i class="iconfont">&#xe752;</i>我的下载
            </div>
          </div>
        </div>
        <div class="content-bottom" @click="goToHome">
          <div class="content-bottom-home">
            <i class="iconfont">&#xe67d;</i>
            <span>首页</span>
          </div>
        </div>
      </div>
    </SideBarAnimation>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SideBarAnimation from 'common/sideBarAnimation.vue';

export default {
  computed: {
    ...mapState(['user']),
  },
  components: {
    SideBarAnimation,
  },
  methods: {
    // 判断路由路径是否是收藏页面的路径，如果是就关闭侧边栏，否则就跳转到收藏页
    goToCollect() {
      if (this.$route.path === '/collect') {
        this.$emit('closeSideBar');
      } else {
        this.$router.push('/collect');
      }
    },
    // 判断路由路径是否是主页面的路径，如果是就关闭侧边栏，否则就跳转到主页
    goToHome() {
      if (this.$route.path === '/') {
        this.$emit('closeSideBar');
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="less" scoped>
#side-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  color: @fWhite;

  .side-bar-content {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f0f0f0;

    .content-top {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: @baseBlueColor;

      .content-top-user {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin-left: 0.5rem;

        .content-top-user-head {
          img {
            width: 60%;
            border-radius: 50%;
          }
        }
      }

      .content-top-two {
        flex: 1;
        width: 100%;
        display: flex;
        .content-top-two-star,
        .content-top-two-download {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          box-sizing: border-box;
          text-align: center;
          font-weight: 500;

          i {
            margin-right: 10%;
          }
        }
      }
    }

    .content-bottom {
      flex: 4;
      background-color: @fWhite;

      .content-bottom-home {
        height: 10%;
        color: @baseBlueColor;
        background-color: @sideBarHomebg;
        padding-left: 5%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-weight: 500;
        i {
          margin-right: 4%;
          margin-bottom: 1%;
        }
      }
    }
  }
}
</style>
