// 数组
let list = ["1", "2", "3", 4];
for (let i in list) {
  // ts 会报错
  // list[i].substring(0, 2)
}

// 第一种数组的书写方式
// 纯数字的数组
let list1: number[] = [1, 2, 3];
list1.push(5);

// 数字+字符串的数组
let list2: (number | string)[] = [1, 2, "a", "b"];
list2.push("c");
console.log(list2);

// 任意类型的数组
let list3: any[] = [1, "a", false];
console.log(list3);

// 第二种数组的书写方式
// 泛型类型的写法
let mylist: Array<string> = ["a", "b", "c"];
mylist.push("d");
console.log(mylist);

let mylist1: Array<string | number> = [1, 2, "a", "b"];
mylist1.push("www");
console.log(mylist1);

export default {};
