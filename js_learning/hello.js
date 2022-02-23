// 开启严格模式
"use strict";

// alert("I’m JavaScript!");
// alert("Hello World!");

/* let */

// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

/* const */

// const myBir = "29.04.2001"
// alert("my birthday is" + myBir)

/* 数字 */

// Nan
// alert("saffdf" / 2);

/* 字符串 */
// let world = "world";
// 反引号``可以嵌入变量
// alert(`hello ${world}!`)

/* type of */
// alert(typeof null)

/* prompt */

// let name = prompt("你的姓名是?", "");
// alert(`你叫${name}`);

/* confirm */

// let message = "Are you a human?";
// let res = confirm(message);
// alert(`you ${res? "are" : "not"} a human!`);

/* ?? 空值合并运算符 */
// c = a ?? b; 当a为null或undefined时，c=b，否则c=a
// 可以连续使用多个??。这样就可以找出多个变量中第一个非null或undefined值
// ??与||的区别在于：||返回的是第一个true值，而??返回的是第一个有意义的值
// let msg = undefined;
// alert(msg ?? null ?? "第三个值" ?? null);