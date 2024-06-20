class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год публикации: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Год публикации: ${this.year}, Цена: $${this.price}`);
    }
}

// Создаем экземпляр класса Ebook
const myEbook = new Ebook('Название книги', 'Автор книги', 2023, 9.99);

// Отображаем сведения о книге
myEbook.displayInfo();