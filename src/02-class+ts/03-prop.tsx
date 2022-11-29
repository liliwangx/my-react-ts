import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name={"Lili"}></Child>
      </div>
    );
  }
}

interface MyProps {
  name: string;
}

class Child extends Component<MyProps, any> {
  render() {
    return <div>Child-{this.props.name} </div>;
  }
}
