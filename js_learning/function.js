// function checkAdult(age) {
//     return age >= 18;
// }

// let age = prompt("你的年龄是?", 0);
// alert(`你${checkAdult(age) ? "已" : "未"}成年`);

// function min(a, b) {
//     return a < b ? a : b;
// }

// alert(min(3,2));

// function pow(x, n) {
//     return n == 1 ? x : x * pow(x, n-1);
// }
// let pow = (x, n) => n == 1 ? x : x * pow(x, n-1);
// alert(pow(2, 5));

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );