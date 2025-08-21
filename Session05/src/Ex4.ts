class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const v = new Vehicle(1, "Civic", 2020, "Honda");
v.displayInfo();
