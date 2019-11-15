<template>
  <div class="collect" v-if="collectListInfo">
    <side-bar-animation>
      <side-bar v-show="flagShowSideBar" @closeSideBar="toggleSideBar"></side-bar>
    </side-bar-animation>
    <collect-header @showSideBar="toggleSideBar"></collect-header>
    <collect-content :collectListInfo="collectListInfo"></collect-content>
  </div>
</template>

<script>
import CollectHeader from 'collect/com/collectHeader.vue';
import CollectContent from 'collect/com/collectContent.vue';
import sideBar from 'home/com/sideBar.vue';
import sideBarAnimation from 'common/sideBarAnimation.vue';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  components: {
    CollectHeader,
    CollectContent,
    sideBar,
    sideBarAnimation,
  },
  computed: {
    ...mapState(['collectList']),
  },
  data() {
    return {
      collectListInfo: [],
      // 是否显示侧边栏的标记
      flagShowSideBar: false,
    };
  },
  watch: {
    collectList: {
      handler() {
        this.collectListInfo = [];
        const len = this.collectList.length;
        for (let i = 0; i < len; i += 1) {
          axios.get(`/api/4/news/${this.collectList[i]}`).then((res) => {
            if (res.status === 200) {
              this.collectListInfo.push(res.data);
            }
          });
        }
      },
    },
  },
  methods: {
    // 根据收藏列表的id获取信息
    getCollectInfo() {
      const len = this.collectList.length;
      for (let i = 0; i < len; i += 1) {
        axios.get(`/api/4/news/${this.collectList[i]}`).then((res) => {
          if (res.status === 200) {
            this.collectListInfo.push(res.data);
          }
        });
      }
    },
    toggleSideBar() {
      this.flagShowSideBar = !this.flagShowSideBar;
    },
  },
  mounted() {
    this.getCollectInfo();
    this.collectListInfo = [];
    this.flagShowSideBar = false;
  },
};
</script>

<style lang="less" scoped>
#side-bar {
  background: rgba(0, 0, 0, 0) !important;
}
</style>
