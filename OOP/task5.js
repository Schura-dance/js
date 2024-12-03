class Shape{
    
    static count = 0;
    #name

    getName(){
        return this.#name
    }

    constructor(name){
        this.#name = name
        Shape.count++
    }

    getArea(){}
}

class Rectangle extends Shape{
    
    constructor(w, h){
        super("Прямоугольник")
        this.w = w
        this.h = h

    }

    getArea(){
        return this.h * this.w
    }
}

class Circle extends Shape{

    constructor(r){
        super("Круг")
        this.r = r
    }

    getArea(){
        return Math.PI * Math.pow(this.r, 2)
    }

}

const r = new Rectangle(4,9)
console.log(`Фигура: ${r.getName()}, Площадь: ${r.getArea()}`)

const c = new Circle(10)
console.log(`Фигура: ${c.getName()}, Площадь: ${c.getArea()}`)

console.log("Всего создано фигур: " + Shape.count)