// 订阅发布的一个类
class Bus {
  _list: any = [];
  subscribe(cb: any) {
    this._list.push(cb);
  }
  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb();
    });
  }
}

let obj = new Bus();
// 不想外部可以访问 _list   但是现在这样是可以访问
console.log(obj._list);
obj.subscribe(() => {});
// 并且可以直接修改
obj._list = [];

// 重写  添加修饰符
// private: 私有变量  只能自己访问，孩子也不可以
// public: 公有变量   都可以访问
// protected: 受保护的变量  可以共享给孩子的
class BusClass {
  private _list: any = [];
  public name: string = "Lili";
  protected age: number = 18;
  subscribe(cb: any) {
    this._list.push(cb);
  }
  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb();
    });
  }
}

let obj1 = new BusClass();
// console.log(obj1._list) // 不可以访问，会报错
class Child extends BusClass {
  add() {
    // 孩子也不可以访问
    // console.log(this._this)

    // 孩子可以访问
    console.log(this.age);
  }
}

export default {};
