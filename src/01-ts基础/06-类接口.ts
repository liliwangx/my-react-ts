// 接口是一种规范，约束数据格式、类型等
// 接口只写公共的部分 getName
interface Ifunc {
  getName: () => string;
}

// implements 实现 这个接口
class A implements Ifunc {
  a1() {}
  a2() {}

  getName() {
    return "aaa";
  }
}

class B implements Ifunc {
  b1() {}
  b2() {}

  getName() {
    return "bbb";
  }
}

class C {}

function init(obj: Ifunc) {
  // obj.getNa()   // 会报错，因为 init(obj: Ifunc) 所以这里方法名写错的时候，会报错
  // 所以可以用接口来定义 getName 来约束必须有方法getName
  obj.getName();
}
let objA = new A();
let objB = new B();
let objC = new C();

init(objA);
init(objB);
// init(objC)      // 会报错，class C 没有 getName 的方法

export default {};
