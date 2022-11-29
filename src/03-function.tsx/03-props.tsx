import React from "react";

export default function App() {
  return (
    <div>
      <Child name="AAA"></Child>
    </div>
  );
}

interface MyProps {
  name: string;
}

// 在形参中约束接口   推荐这种方式
// function Child(props: MyProps) {
//   return <div>Child-{props.name.toLocaleLowerCase()}</div>;
// }

const Child: React.FC<MyProps> = (props) => {
  return <div>Child-{props.name}</div>;
};
