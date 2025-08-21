class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getInfo(): string {
        return `${this.id} - ${this.title} - ${this.author}`;
    }
    setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
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
    updateBookById(id: number, newTitle: string, newAuthor: string): void {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setInfo(newTitle, newAuthor);
                console.log(`Đã cập nhật sách có ID ${id}`);
                return;
            }
        }
        console.log(`Không tìm thấy sách có ID ${id}`);
    }
}
const b1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const b2 = new Book(2, "Lão Hạc", "Nam Cao");
const b3 = new Book(3, "Nhật Ký Trong Tù", "Hồ Chí Minh");
const b4 = new Book(4, "Tắt Đèn", "Ngô Tất Tố");
const b5 = new Book(5, "Số Đỏ", "Vũ Trọng Phụng");
const library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.updateBookById(3, "Nhật Ký Cách Mạng", "Hồ Chí Minh");
library.showBooks();
