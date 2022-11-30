// TS：在书写过程中，可以自动检测数据类型、自动提示可用方法函数;

// 字符串、数字、布尔
let myname: string = "Lili";
myname.substring(0, 1);
console.log(myname);

let myage: number = 18;
myage.toFixed(2);
console.log(myage);

let myshow: boolean = true;
myshow = false;

// 设置多种类型
let mymsg: string | number = "success";
let mymsg1: string | number = "123";

// any 类型，允许设置任意任意类型值，类似原本js
let myany: any = false;
myany = 888;

// unknown 类型
let a: unknown = 100;
a = true;

// unknown 和 any 的区别
// 任意类型的值都可以赋值给any，同时any类型的值也可以赋值给任何类型（never除外）
// 任何类型的值都可以赋给unknown，但unknown类型的值只能赋值给unknown和any
let a1: unknown = 520;
let b1: any = a1; // OK

let a2: any = 520;
let b2: unknown = a2; // ok

let a3: unknown = 520;
// let b3: number = a; // 会报错

// 类型断言  as
// 只作用于类型层面的强制类型转换
const w: unknown = "你好";
// w.split('');  // 会报错
// 可以类型断言
(a as string).split(""); // OK

interface Person {
  name: string;
  age?: number;
}
const pete: Person = {
  name: "Pete",
  age: 25,
  sex: "男",
} as Person; // ok

// void: 表示没有任何类型，和其他类型是平等关系，不能直接赋值
// 一般在函数没有返回值时使用
let g: void;
// let m: number = g; // 会报错

// never：用不存在的值的类型
// 值永不存在：
// 1. 如果一个函数执行时抛出异常，那这个函数就永远不会存在返回值
// 2. 函数中执行无限循环的代码吗，即死循环

// 抛出异常
function errFunc(msg: string): never {
  throw new Error(msg);
}

// 死循环
function loopForever(): never {
  while (true) {}
}

// ts 文件需要默认有导出
export default {};
