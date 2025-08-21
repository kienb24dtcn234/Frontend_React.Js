class Vehicle {
    name: string;      
    year: number;      
    company: string;   
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng xe: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Camry", 2022, "Toyota");
vehicle1.displayInfo();
vehicle2.displayInfo();
