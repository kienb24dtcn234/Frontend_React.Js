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
    getTitle(): string {
        return this.title;
    }
    getInfo(): string {
        return `${this.id} - ${this.title} - ${this.author}`;
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
    searchBookByTitle(title: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(title.toLowerCase())
        );
        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm cho "${title}":`);
            for (let book of foundBooks) {
                console.log(book.getInfo());
            }
        } else {
            console.log(`Không tìm thấy sách với tên "${title}"`);
        }
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
library.searchBookByTitle("Nhật Ký");
