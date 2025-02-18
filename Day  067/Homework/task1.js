//1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//2
class Car {
    constructor() {
        this.make = "Unknown";
        this.model = "Unknown";
        this.year = 0;
    }
}

//3
class Rectangle {
    constructor(width, height = width) {
        this.width = width;
        this.height = height;
    }
}

//4
class Employee {
    constructor(name, position = "Intern", salary = 0) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

//5
class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }
}

//6
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

//7

class Square {
    static calculateArea(side) {
        return side * side;
    }
}

//8

class Converter {
    static celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

//9

class StringUtil {
    static car (str) {
        return str.car();
    }
}

//10



class Animal {
    static count = 0;

    constructor(name) {
        this.name  = name;
        Animal.count++;
    }
}


//11
//11) ვყურე დღევანდელ ჩანაწერს
