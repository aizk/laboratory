// reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：(state, action) => state

// 增删改
app.model({
    namespace: 'todos',
    state: [],
    reducers: {
        add(state, { payload: todo }) {
            return state.concat(todo);
        },
        remove(state, { payload: id }) {
            return state.filter(todo => todo.id !== id);
        },
        update(state, { payload: updatedTodo }) {
            return state.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return { ...todo, ...updatedTodo };
                } else {
                    return todo;
                }
            });
        },
    },
};

// 嵌套数据的增删改
// 建议最多一层嵌套，以保持 state 的扁平化，深层嵌套会让 reducer 很难写和难以维护。
app.model({
    namespace: 'app',
    state: {
        todos: [],
        loading: false,
    },
    reducers: {
        add(state, { payload: todo }) {
            const todos = state.todos.concat(todo);
            // 替换新的 todos key
            return { ...state, todos };
        },
    },
});

// 下面是深层嵌套的例子，应尽量避免。
app.model({
    namespace: 'app',
    state: {
        a: {
            b: {
                todos: [],
                loading: false,
            },
        },
    },
    reducers: {
        add(state, { payload: todo }) {
            const todos = state.a.b.todos.concat(todo);
            const b = { ...state.a.b, todos };
            const a = { ...state.a, b };
            // 修改 a 必须拿到里面的数据重新生成 a
            return { ...state, a };
        },
    },
});