// 泛型
/*
  工作流程：
    传入参数的类型是<string, number>，调用时会传递给<T, U>，一一对应，
    T就变成了string成为message的类型，
    U就变成了number成为value的类型和返回值的类型。
    fn<string, number>('我喜欢你', 520)，这种形式是为泛型变量显式设定值，
    更常见的做法是省略尖括号，使代码更加简洁：
*/
function fn<T, U>(message: T, value: U): U {
  console.log(message);
  return value;
}
console.log(fn("我喜欢你", 520));

// 泛型约束
function fn1<T>(arg: T): T {
  // console.log(arg.size); // Property 'size' does not exist on type 'T'
  return arg;
}
// 解决上述问题的方案：使用extends关键字，对类型进行约束
interface ArgType {
  size: number;
}
function fn2<T extends ArgType>(arg: T): T {
  console.log(arg.size);
  return arg;
}

// 泛型工具
// 1. typeof：在类型上下文中获取变量或者属性的类型；可以获取对象类型、函数类型
interface PersonFan {
  name: string;
  age: number;
}
const lzl: PersonFan = {
  name: "林志玲",
  age: 18,
};
type LzlType = typeof lzl;
const zzy: LzlType = {
  name: "章子怡",
  age: 18,
};

function fnFan(x: string): string[] {
  return [x];
}
type FnType = typeof fnFan; // (x: string) => string[]

// 2. keyof：获取某种类型的所有键，其返回值类型是联合类型
interface Person {
  name: string;
  age: number;
}
type P = keyof Person; // 'name' | 'age'

/* 
  使用了泛型和泛型约束，还有keyof操作符。
  首先定义类型 T，并使用extends关键字约束T类型必须是object类型的子类型，
  然后使用keyof操作符获取T类型的所有键，其返回值是联合类型，
  最后利用extends 关键字约束K类型必须是keyof T联合类型的子类型。
  这样定义的话就能够正确推导出指定键对应的类型了
*/
type PersonKeyof = {
  name: string;
  age: number;
};

const cgx: PersonKeyof = {
  name: "吴京",
  age: 23,
};

function fnKeyof<T extends PersonKeyof, K extends keyof T>(
  personObj: T,
  key: K
) {
  return personObj[key];
}

const uname = fn(cgx, "name"); // const uname: string
const age = fn(cgx, "age"); // const age: number

// 3. in：用来遍历枚举类型
type Keys = "x" | "y" | "z";

type Obj1 = {
  [k in Keys]: string;
};
// Obj1 等同于 Obj2
type Obj2 = {
  x: string;
  y: string;
  z: string;
};

// 4. extends：可以通过extends 关键字添加泛型约束
interface ArgTypeExtends {
  id: number;
}

function fnExtends<T extends ArgTypeExtends>(arg: T): T {
  console.log(arg.id);
  return arg;
}

// fnExtends(250); // 会报错，Argument of type 'number' is not assignable to parameter of type 'ArgType'
fnExtends({ id: 250, value: "奥利给！" }); // ok

// 内置工具：
// Paritial
// Required
// Readonly
// Record
// ReturnType
// Pick
// Omit
// Extract
// Exclude
// NonNullable

export default {};
