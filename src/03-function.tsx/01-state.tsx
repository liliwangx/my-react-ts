// rfc

import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Lili");
  // const [name, setName] = useState<string>("Lili");    // 显示的写
  return (
    <div>
      App-{name.substring(0, 1).toLocaleLowerCase() + name.substring(1)}
      <button
        onClick={() => {
          // 函数式组件中，隐式的就知道name 就是字符串类型，不需要做额外的操作
          // setName(100);
          setName("DALI");
        }}
      >
        click button
      </button>
    </div>
  );
}
