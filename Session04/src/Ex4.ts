function handleUnionType(value: string | number): void {
    if (typeof value === "string") {
        console.log(`${value} => Output: ${value.length} ký tự`);
    } else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log(`${value} => Output: Đây là số chẵn`);
        } else {
            console.log(`${value} => Output: Đây là số lẻ`);
        }
    }
}
handleUnionType("demo123"); 
handleUnionType(10);       
handleUnionType(9);         
