import React, { useState } from "react";
import { boolean } from "yargs";

export default function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      App
      <Navbar
        title="首页"
        func={() => {
          setIsShow(!isShow);
        }}
      ></Navbar>
      {isShow && <Sidebar></Sidebar>}
    </div>
  );
}

interface MyProps {
  title?: string; // ?  可选
  func: () => void;
}

function Navbar(props: MyProps) {
  return (
    <div>
      Navbar-{props.title}
      <button
        onClick={() => {
          props.func();
        }}
      >
        Click Button
      </button>
    </div>
  );
}

function Sidebar() {
  return <div>Sidebar</div>;
}
