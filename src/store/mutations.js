export default {
  // 轮播图的信息
  SETTOPSTORIES(state, data) {
    state.topStories = data;
  },
  //   当天的新闻
  SETLATESTSTORIES(state, data) {
    state.latestStories = data;
  },
  // 当天的日期
  SETDATE(state, data) {
    state.date = data;
  },
  // 添加之前的新闻
  ADDBEFORESTORIES(state, data) {
    state.beforeStories.push(data);
  },
  // 清空之前的新闻
  CLEARHOMEPAGE(state) {
    state.beforeStories = [];
  },
  // 添加收藏
  ADDCOLLECTLIST(state, data) {
    state.collectList.push(data);
  },
  // 删除指定的收藏
  REMOVECOLLECTLIST(state, data) {
    state.collectList = state.collectList.filter(item => item !== data);
  },
  // 添加喜欢
  ADDLIKELIST(state, data) {
    state.likeList.push(data);
  },
  // 删除指定的喜欢
  REMOVELIKELIST(state, data) {
    state.likeList = state.likeList.filter(item => item !== data);
  },
};
