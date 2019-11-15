<template>
  <div class="share">
    <div class="share-box">
      <div class="share-text">分享</div>
      <ul class="share-icon">
        <li class="share-icon-weichat">
          <span class="iconfont iconfont-weichat">&#xe662;</span>微信
        </li>
        <li class="share-icon-tengxun">
          <span class="iconfont iconfont-tengxun">&#xe661;</span>腾讯微博
        </li>
        <li class="share-icon-xinlang">
          <span class="iconfont iconfont-xinglang">&#xe660;</span>新浪微博
        </li>
        <li class="share-icon-qq">
          <span class="iconfont iconfont-qq">&#xe65f;</span>qq
        </li>
        <li class="share-icon-qzone">
          <span class="iconfont iconfont-qzone">&#xe65e;</span>qq空间
        </li>
        <li class="share-icon-facebook">
          <span class="iconfont iconfont-facebook">&#xe65a;</span>Facebook
        </li>
      </ul>
      <div class="share-more">
        <div>更多平台</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.share {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .share-box {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 60%;
    background-color: @fWhite;
    border-radius: 20px;
    .share-text {
      flex: 2;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
    .share-icon {
      flex: 5;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      text-align: center;
      padding: 0;
      li {
        font-size: 0.2rem;
        color: @shareText;
        span {
          font-size: 1rem;
          display: block;
          margin-bottom: 0.1rem;
        }
        .iconfont-weichat {
          color: #8dc81b;
        }
        .iconfont-tengxun {
          color: #38a6d7;
        }
        .iconfont-xinglang {
          color: #f56467;
        }
        .iconfont-qq {
          color: #68a5e1;
        }
        .iconfont-qzone {
          color: #f5be3f;
        }
        .iconfont-facebook {
          color: #537bbc;
        }
      }
    }
    .share-more {
      flex: 2;

      display: flex;
      justify-content: center;
      align-items: center;
      div {
        background-color: lightgreen;
        line-height: 30px;
        border-radius: 0.6rem;
        height: 0.6rem;
        width: 25%;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
