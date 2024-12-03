class Person{

    #name

    constructor(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }

    setName(name){
        this.#name = name
    }

}

class Student extends Person{

    #grade
    constructor(name, grade){
        super(name);
        this.setGrade(grade);
    }

    getGrade(){
        return this.#grade
    }

    setGrade(newGrade){
        if(newGrade >= 1 && newGrade <= 5){
            this.#grade = newGrade
        }
        else{
            throw new Error("Ошибка: оценка должна быть в пределах от 1 до 5!")
        }
       
    }


}
try{
    const student = new Student("Петя", 2)
    console.log(`Имя студента: ${student.getName()}, оценка: ${student.getGrade()}`)
    student.setGrade(5)
    console.log(`Имя студента: ${student.getName()}, новая оценка: ${student.getGrade()}`)
    student.setGrade(10)
    console.log(`Имя студента: ${student.getName()}, новая оценка: ${student.getGrade()}`)
}
catch(error){
    console.error(error.message)
}