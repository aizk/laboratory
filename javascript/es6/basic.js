// log 函数动态绑定 console 对象
const log = console.log.bind(console);

var x = 1;
const y = 2;

// const 和 let 都是块级词法作用域
{
    // let 绑定静态词法作用域
    let x = 2;
    const y = 3;
    log(x, y)
}

log(x, y);

// 模板字符串
// 在字符串中插入变量，并在输出时替换使用 反引号
log(`${x}, ${y}`);

// 默认参数
function defaultParam(x = 'p') {
    log(x)
}

defaultParam();

// 箭头函数
// 继承当前上下文的 this 关键字
// this 不可控，所以最好不要在里面写 this，只写纯函数
log([1, 2, 3].map( x => x + 1)); // 2 3 4
// 这两个写法是想等的
// 绑定 log 的 this
//
log([1, 2, 3].map((function(x) {
    return x + 1;
}).bind(this)));

// 解构赋值
const user = {
    name: 'gg',
    age: 2,
};

// 提取对象中的变量
const { name, age } = user;
log(name, age); // gg 2
// ==
// const name = user.name
// const age = user.age


// 提取数组中的变量
const arr = [1, 2, 3];
const [foo, bar] = arr;
log(foo, bar);  // 1 2

// 解构传入函数的参数
// 将传入对象中的 key payload 解构为参数 payload
const add = (state, { payload }) => {
    return state.concat(payload);
};

// 解构时还可以配 alias，让代码更具有语义
// todo 是 payload 的别名
const add1 = (state, { payload: todo }) => {
    return state.concat(todo);
};

// 反向解构，根据变量生成对象
// { name: 'gg', age: 2 }
const user1 = { name, age};



