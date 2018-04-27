app.model({
    namespace: 'todos',
    effects: {
        *addRemote({ payload: todo }, { put, call }) {
            yield call(addTodo, todo);
            yield put({ type: 'add', payload: todo });
        },
    },
});

// put 用于触发 action
yield put({ type: 'todos/add', payload: 'Learn Dva' });

// call 用于调用异步逻辑，支持 promise
const result = yield call(fetch, '/todos');

// select 用于从 store 获取数据
const todos = yield select(state => state.todos);



