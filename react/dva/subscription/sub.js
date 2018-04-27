// subscriptions 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。格式为 ({ dispatch, history }) => unsubscribe 。
// 异步数据初始化
// 当用户进入 /users 页面时，触发 action users/fetch 加载用户数据。
app.model({
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/users') {
                    // 触发加载 action
                    dispatch({
                        type: 'users/fetch',
                    });
                }
            });
        },
    },
});

