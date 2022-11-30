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

// 一旦定义了任意类型，那么它的确定属性和可选属性的类型，都必须是任意属性类型的子集
interface Person {
  // name: string; // 会报错， Property 'name' of type 'string' is not assignable to 'string' index type 'number'
  // name?: string; // 会报错  Property 'name' of type 'string | undefined' is not assignable to 'string' index type 'string'
  [propName: string]: number;
}

// 在任意属性中使用联合类型解决上述问题
interface Person1 {
  name: string;
  age?: number;
  [propName: string]: string | number | undefined;
}

// 鸭式辨型法
interface PersonYa {
  name: string;
}
function getPersonInfo(personObj: PersonYa) {
  console.log(personObj.name);
}
// error：在参数里写对象，相当于直接给personObj赋值，这个对象有严格的类型定义，所以不能多参或者少参
// getPersonInfo({name: '德莱文', age: 27}); // error

// 用新的变量psObj接收，psObj不会经过额外的属性检查，根据类型的兼容性，2个类型都有name, 因此可以绕开多余的类型检查
const psObj = { name: "德莱文", age: 27 };
getPersonInfo(psObj); // ok

// type: 类型别名
type Id = number | number[]; // 别名以大写字母开头
const deleteFunc = (id: Id) => {
  // ...
};

/*
  interface 接口 与 type 类型别名 区别：
  1. 大多数情况下，接口和类型别名的效果是等价的
  2.接口: 为类型命名，并且为代码定义数据模型/行状
    类型别名：给一个类型起个新名字；它是创建了一个新名字来引用哪个类型，不会新建类型。
              类型别名可以作用于基本类型、联合类型、元组以及其它任何需要手写的类型
  3. 接口可以定义多次，类型别名不可以
  4. 扩展：接口和类型别名可以交叉扩展
    接口通过 extends 关键字来实现
    类型别名通过交叉类型，& 来实现  
*/

export default {};
