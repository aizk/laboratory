// class 方法定义
class App extends React.Component {
    handleClick() {
        this.props.dispatch({ type: 'app/create' });
    }
    render() {
        return <div onClick={this.handleClick.bind(this)}>${this.props.name}</div>
    }
}