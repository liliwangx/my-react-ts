let obj = {
  name: "Lili",
  age: 18,
};
// 会报错，字符串没有这个方法
// console.log(obj.name.push())

// 接口 interface
interface Myobj {
  name: string;
  age: number;
  // 可选属性 ?
  location?: string;
  // 可能有的一些值
  [propName: string]: any;
}

let obj1: Myobj = {
  name: "Lili",
  age: 18,
  location: "XIAN",
  grade: "8.7",
};
console.log(obj1.name);

export default {};
