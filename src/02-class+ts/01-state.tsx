import React, { Component } from "react";

interface MyState {
  name: string;
}

// Component后面接受泛型的写法 约定数据
// Component <约定属性的，约定状态的>
export default class App extends Component<any, MyState> {
  state: MyState = {
    name: "Lili",
  };
  render() {
    return (
      <div>
        App-
        {this.state.name.substring(0, 1).toLocaleUpperCase() +
          this.state.name.substring(1)}
        <button
          onClick={() => {
            // 1. 点击button报错, name 被修改为number类型，number类型没有 substring 方法
            // this.setState({ name: 100 }); // 2. 加上Component<any, MyState> 之后，此时会报错，因为约定了name是字符串，此时是number
            this.setState({ name: "DALI" });
          }}
        >
          clickButton
        </button>
      </div>
    );
  }
}
