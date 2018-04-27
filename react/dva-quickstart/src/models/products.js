export default {
  namespace: "products",
  state: [],
  reducers: {
    // 过滤 id 不相等的数据
    // state 是该节点对应的数据
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  }
}
