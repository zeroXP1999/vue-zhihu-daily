import axios from 'axios';

export default {
  // 获取最新消息
  getNewsLatest({ commit }) {
    return axios.get('/api/4/news/latest').then((res) => {
      if (res.status === 200) {
        commit('SETTOPSTORIES', res.data.top_stories);
        commit('SETLATESTSTORIES', res.data.stories);
        commit('SETDATE', res.data.date);
      }
    });
  },
  // 获取过往新闻
  getBefore({ state, commit }) {
    let date = '';
    // 如果没有数据，则使用全局的date日期
    if (state.beforeStories.length === 0) {
      date = state.date;
    } else {
      date = state.beforeStories[state.beforeStories.length - 1].date;
    }

    return axios.get(`/api/4/news/before/${date}`).then((res) => {
      if (res.status === 200) {
        commit('ADDBEFORESTORIES', res.data);
      }
    });
  },
  // 添加收藏id
  addCollectList(ctx, data) {
    ctx.commit('ADDCOLLECTLIST', data);
  },
  // 删除收藏id
  removeCollectList(ctx, data) {
    ctx.commit('REMOVECOLLECTLIST', data);
  },
  // 添加喜欢id
  addLikeList(ctx, data) {
    ctx.commit('ADDLIKELIST', data);
  },
  // 删除喜欢id
  removeLikeList(ctx, data) {
    ctx.commit('REMOVELIKELIST', data);
  },
};
