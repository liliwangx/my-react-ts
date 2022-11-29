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

export default {};
