class Book {

constructor(title, nameAuthor){
    this.title = title;
    this.nameAuthor = nameAuthor;
}

 getBookName() {
    console.log("Название книги: " + this.title + " Имя автора: " + this.nameAuthor)
}

}

const book = new Book("Война и Мир", "Лев")
book.getBookName()