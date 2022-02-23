let animal = {
    eats: true,
    stomach: [],

    walk() {
        console.log("Animal walking!");
    },

    eat() {
        this.stomach = this.stomach + "food";
    },

    get isFull() {
        return this.stomach.length != 0;
    }
};

let rabbit = {
    jump: true,
    __proto__: animal,
};

let longEar = {
    longEar: true,
    __proto__: rabbit,
};

// console.log(rabbit.eats);
// longEar.walk();

// for(let key in Object.keys(longEar)){
//         console.log(`${key} : ${longEar[key]}`);
// }

function Speedy() {
};

Speedy.prototype = animal

let lazy = {
    __proto__: animal
};

let speedy = new Speedy();
speedy.eat();

console.log(`speedy吃饱了吗：${speedy.isFull}`);
console.log(`lazy吃饱了吗：${lazy.isFull}`);