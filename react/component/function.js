// 纯函数定义
// props 由 redux 导入
// props 还可以解构
function App(props) {
    function handleClick() {
        props.dispatch({ type: 'app/create' });
    }
    return <div onClick={handleClick}>${props.name}</div>
}
