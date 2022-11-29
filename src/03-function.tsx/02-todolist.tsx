import React, { useRef, useState } from "react";

export default function App() {
  const myText = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <input type="text" ref={myText} />
      <button
        onClick={() => {
          console.log((myText.current as HTMLInputElement).value);
          setList([...list, (myText.current as HTMLInputElement).value]);
        }}
      >
        Click Button
      </button>
      {list && list.map((item) => <li key={item}>{item}</li>)}
    </div>
  );
}
