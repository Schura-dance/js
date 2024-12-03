class Person{

    #name
    #age

    constructor(name, age){
        this.#age = age
        this.#name = name
    }

    getName(){
        return this.#name
    }

    getAge(){
        return this.#age
    }
}

const person = new Person("Виталик", 33)
console.log(`Имя: ${person.getName()}, возраст: ${person.getAge()}`)