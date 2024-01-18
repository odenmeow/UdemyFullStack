import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "綠色" };
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    console.log("車子有被渲染");
  }
  componentDidUpdate() {
    console.log("車子狀態更新");
  }
  // 沒被指定所以沒ˊ關係，this不怕被置換 .call(null,event)的事情
  getMyself() {
    return this.state;
  }
  // 因為是被指定為事件監聽使用的函數
  //需要透過arrow fn來做static binding 或者強行手動綁定
  buttonHandler() {
    console.log(this.state);
    this.setState({ color: "白色" });
  }
  render() {
    return (
      <div>
        <h2>
          我是一台{this.props.brand} {this.state.color} 車
        </h2>
        <button onClick={this.buttonHandler}> 改變顏色 </button>
        <p>不綁事件監聽的component函數中this為{this.getMyself().color}</p>
      </div>
    );
  }
}
export default Car;
