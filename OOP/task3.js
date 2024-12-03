class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
    }

    getInfo(){
        console.log(`Тип животного: ${this.type}, Имя животного: ${this.name}`)
    }
}



class Dog extends Animal{

    constructor(name, breed){
        super(name, "cобака")
        this.breed = breed
    }

    getInfo(){
        super.getInfo()
        console.log(`Собака породы ${this.breed}. Гав-гав!`)
    }
}

const dog = new Dog("Урса", "Лабрадор")
dog.getInfo()