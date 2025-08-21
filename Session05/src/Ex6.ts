class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getInfo(): string {
        return `${this.title} - ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (let book of this.books) {
            console.log(book.getInfo());
        }
    }
}
const b1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const b2 = new Book("Lão Hạc", "Nam Cao");
const b3 = new Book("Nhật Ký Trong Tù", "Hồ Chí Minh");
const b4 = new Book("Tắt Đèn", "Ngô Tất Tố");
const b5 = new Book("Mao sơn tróc quỷ nhân", "Thanh Vân Tử");
const library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.showBooks();
