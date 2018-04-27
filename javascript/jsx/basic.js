// className == class
{/*<h2 className="main">test</h2>*/}

// js 表达式 使用 {}
{/*<h2>{ 1 + 1 }</h2>*/}

// Mapping Arrays to JSX
{/*<ul>*/}
    {/*{ this.props.todos.map((todo, i) => <li key={i}>{todo}</li>) }*/}
{/*</ul>*/}

// Spread Attributes
// const attrs = {
//     href: 'http://example.org',
//     target: '_blank',
// };
// <a {...attrs}>Hello</a>

// props
// JavaScript 是弱类型语言，所以请尽量声明 propTypes 对 props 进行校验，以减少不必要的问题。
// function App(props) {
//     return <div>{props.name}</div>;
// }
// App.propTypes = {
//     name: React.PropTypes.string.isRequired,
// };

// 内置的 prop type 有
// PropTypes.array
// PropTypes.bool
// PropTypes.func
// PropTypes.number
// PropTypes.object
// PropTypes.string

