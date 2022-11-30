// 报错，需要传参，但是没传
// function test1(a, b) {
//     a.splice()
// }
// test1()

// 设置参数的类型
function test2(a: string, b: number) {
  console.log(a.substring(0, 1) + "-" + b.toFixed(2));
}
test2("Lili", 18);

// ():string需要有一个字符串类型的返回值,     ?: boolean 可选参数
function test3(a: string, b: number, c?: boolean): string {
  console.log(a.substring(0, 1) + "-" + b.toFixed(2));

  return a.substring(0, 1) + "-" + b.toFixed(2) + c;
}
let msg: string = test3("Lili", 18, true);
let msg1: string = test3("Lili", 18);
console.log("msg是：", msg);

// 箭头函数
const sumFunc = (x: number, y: number): number => x + y;

// 使用接口提前规定好函数类型
interface Func {
  (a: string, b: string, c?: number): string;
}
// 必须符合Func的类型
let myfunc: Func = function test3(a: string, b: string, c?: number): string {
  console.log(a.substring(0, 1) + "-" + b.substring(2));

  return a.substring(0, 1) + "-" + b.substring(2) + c;
};

// 对象+函数的组合
interface Iobj {
  name: string;
  age: number;
  getName: (name: string) => string;
}
let objdesc: Iobj = {
  name: "Lili",
  age: 18,
  getName: (name: string) => {
    return name;
  },
};
let name: string = objdesc.getName("DALI");
console.log(name);

// 参数默认值
// 有默认值的参数可以放在必须参数的前面，此时调用时需要传入undefined才可以
function queryUserInfo(name: string, age: number, sex: string = "不详") {
  return `姓名:${name}，年龄:${age}，性别:${sex}`;
}
queryUserInfo("xxx", 26); // 姓名:xxx，年龄:26，性别:不详

// 剩余参数
function push(arr: any[], ...items: any[]) {
  items.forEach((item) => arr.push(item));
}
let array: any[] = [];
push(array, 1, 2, 3, "DALI", "Lili");
console.log(array); // [1, 2, 3, 'DALI', 'Lili']

// 函数重载
type UnionType = number | string;
function sum(x: string, y: string): string;
function sum(x: string, y: number): string;
function sum(x: number, y: string): string;
function sum(x: number, y: number): number;

function sum(x: UnionType, y: UnionType) {
  if (typeof x === "string" || typeof y === "string") {
    return x.toString() + y.toString();
  }
  return x + y;
}

const res = sum("你", "好");
res.split("");
console.log(res);

export default {};
