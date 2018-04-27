const log = console.log.bind(console);
// Spread Operator
// Spread Operator 即 3 个点 ...，有几种不同的使用方法
// stage-2 语法

// 组装新数组，添加新元素
const todos = ['Learn dva'];
log([...todos, 'Learn antd']);  // ['Learn dva', 'Learn antd']

// 获取数组一部分
const arr = ['a', 'b', 'c'];
const [first, ...rest] = arr;
log(rest);  // ['b', 'c']

// 收集函数参数
function directions(first, ...rest) {
    log(rest);
}
directions('a', 'b', 'c');  // ['b', 'c'];

// 代替 apply
// function foo(x, y, z) {}
// const args = [1,2,3];
//
// // 下面两句效果相同
// foo.apply(null, args);
// foo(...args);

// 组合新对象
const foo = {
    a: 1,
    b: 22,
};
const bar = {
    b: 3,
    c: 2,
};
const d = 4;

// 后面的 b 覆盖前面的 b
const ret = { ...foo, ...bar, d };  // { a:1, b:3, c:2, d:4 }
log(ret);