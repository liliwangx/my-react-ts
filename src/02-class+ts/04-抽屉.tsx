import React, { Component } from "react";

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        App
        <NavBar
          title="首页"
          navFunc={() => {
            this.setState({ isShow: !this.state.isShow });
            console.log(this.state.isShow);
          }}
        ></NavBar>
        {this.state.isShow && <SideBar></SideBar>}
      </div>
    );
  }
}

// 基于 MyProps 来约束 组件数据类型
interface MyProps {
  title: string;
  navFunc: () => void; // 不需要返回值，写上void
}

class NavBar extends Component<MyProps, any> {
  render() {
    return (
      <div>
        NavBar-{this.props.title}
        <button
          onClick={() => {
            this.props.navFunc();
          }}
        >
          {" "}
          click Narbar
        </button>
      </div>
    );
  }
}

class SideBar extends Component {
  render() {
    return <div>sidebar</div>;
  }
}
