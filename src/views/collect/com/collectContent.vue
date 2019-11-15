<template>
  <div class="collect-content">
    <ul class="collect-ul">
      <router-link :to="'/detail/' + item.id" v-for="(item, index) in collectListInfo" :key="index">
        <li class="collect-info">
          <div class="collect-info-desc">{{item.title}}</div>
          <img :src="item.image" alt class="collect-info-img" />
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['collectListInfo'],
};
</script>

<style lang="less" scoped>
.collect-content {
  margin-top: 1.6rem;
  background-color: @bgColor;

  .collect-ul {
    padding-top: 0.1rem;
    .collect-info {
      width: 95%;
      background-color: @fWhite;
      margin: 0 auto 0.1rem;
      border-radius: 0.1rem;
      overflow: hidden;
      display: flex;
      align-items: center;

      .collect-info-desc {
        flex: 2;
        margin: 0 0.6rem;
        color: @textColorUnclick;
        line-height: 0.7rem;
        text-align: left;
      }

      .collect-info-img {
        width: 20%;
        flex: 1;
        margin: 0.18rem 0.3rem 0.18rem 0;
      }
    }
  }
}
</style>
