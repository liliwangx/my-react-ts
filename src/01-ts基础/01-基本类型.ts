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

// 设置任意值，类似原本js
let myany: any = false;

// ts 文件需要默认有导出
export default {};
