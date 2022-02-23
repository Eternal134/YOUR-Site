let User = class MyClass {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log("MyClass: " + MyClass);
        console.log(`Hello!` + this.name);
    }
}

new User("吴振龙").sayHi();