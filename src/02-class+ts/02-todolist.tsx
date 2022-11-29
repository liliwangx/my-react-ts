import React, { Component } from "react";

interface MyState {
  text: string;
  list: string[];
}

export default class APP extends Component<any, MyState> {
  state: MyState = {
    text: "",
    list: [],
  };
  // myRef = React.createRef();      // 1
  myRef = React.createRef<HTMLInputElement>();
  render() {
    return (
      <div>
        {/* ref 用法 */}
        {/* 1.会报错，不能将不知道的类型分配给HTML元素 */}
        {/* <input ref={this.myRef}></input> */}

        <input ref={this.myRef}></input>

        {/* 基础用法 */}
        {/* <input
          type="text"
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></input> */}
        <button
          onClick={() => {
            // console.log(this.state.text);

            // 会报错，this.myRef.current 初始是null
            // console.log(this.myRef.current.value);

            // as 断言：断言它当前可能是什么值
            console.log((this.myRef.current as HTMLInputElement).value);

            console.log(this.myRef.current?.value);

            this.setState({
              list: [
                ...this.state.list,
                (this.myRef.current as HTMLInputElement).value,
              ],
            });
          }}
        >
          Click Button
        </button>
        {this.state.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    );
  }
}
