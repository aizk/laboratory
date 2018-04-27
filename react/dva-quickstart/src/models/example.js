
export default {

  // 在全局 store 中的 key
  namespace: 'example',

  // 在 store 中 key 对应的默认数据
  state: {},

  // 订阅某些触发 dispatch 的消息
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 与 server 端交互，然后通过 reducers 触发 action 修改 store
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  // reducers 处理器
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
