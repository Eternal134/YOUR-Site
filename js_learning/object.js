let id = Symbol("id");

let user1 = {
    name: "Bob",
    age: 20,
    "telephone number": "18756762798",
    [id]: 123,
};

function User(name) {
    this.name = name;
    this.f = display;
}

console.log(new User("wzl").f());

let user2 = Object.assign({}, user1);
user2.name = "Alice";
user2.Symbol = 456;

function display() {
    console.log("对象的属性有")
    for (const key in this) {
        if (typeof this[key] != 'function') {
            console.log(`${key} : ${this[key]}`);
        }
    }
    console.log("对象的方法有")
    for (const key in this) {
        if (typeof this[key] == 'function') {
            console.log(key);
        }
    }
    console.log(`对象的标识符为${this.Symbol}`);
}

// let key = prompt("添加其他信息", "");
// let value = prompt("信息为", "");
// user[key] = value;

user1.f = display;
user2.f = display;

user1.f?.();
user2.f?.();



// let makeUser = (name, age) => { 
//     return { 
//         name, 
//         age
//     } 
// };
// let user = makeUser("Bob", 20);
// for(let key in user) {
//     alert(`${key}: ${user[key]}`);
// }



// function isEmpty(obj) {
//     for(let key in obj) {
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// alert(`应该输出true：${isEmpty(schedule)}`);
// schedule["8: 20"] = "高数";
// alert(`应该输出false：${isEmpty(schedule)}`);



// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == "number") {
//             menu[key] *= 2;
//         }
//     }
// }

// 在调用之前
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// multiplyNumeric(menu);

// for (let key in menu) {
//     alert(`${key} : ${menu[key]}`);
// }