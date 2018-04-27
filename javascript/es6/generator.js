
// dva 的例子
// 通过 yield 组合异步逻辑
// app.model({
//     namespace: 'todos',
//     effects: {
//         *addRemote({ payload: todo }, { put, call }) {
//             yield call(addTodo, todo);
//             yield put({ type: 'add', payload: todo });
//         },
//     },
// });