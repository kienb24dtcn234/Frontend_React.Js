abstract class Job {
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    private workingHour: number;
    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary(): number {
        return 10000000;
    }
}
const part = new ParttimeJob(120);
const full = new FulltimeJob();
part.printType();
console.log(`Lương: ${part.calculateSalary().toLocaleString("vi-VN")} VND`);
full.printType();
console.log(`Lương: ${full.calculateSalary().toLocaleString("vi-VN")} VND`);
