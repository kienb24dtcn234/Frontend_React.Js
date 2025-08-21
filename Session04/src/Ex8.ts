type OrderItem = {
    readonly id: string;
    name: string;
    price: number;
    quantity: number;
    note?: string;
};

type Order = {
    readonly orderId: string;
    customerName: string;
    items: OrderItem[];
};

function calculateOrderTotal(order: Order): number {
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    return total;
}

function printOrder(order: Order): void {
    console.log(`Mã đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Danh sách sản phẩm:`);

    for (let item of order.items) {
        console.log(`- ${item.name} | Đơn giá: ${item.price.toLocaleString()} | SL: ${item.quantity} | Thành tiền: ${(item.price * item.quantity).toLocaleString()}${item.note ? ` | Ghi chú: ${item.note}` : ''}`);
    }

    const total = calculateOrderTotal(order);
    console.log(`Tổng đơn hàng: ${total.toLocaleString()} VND`);
}

const sampleOrder: Order = {
    orderId: "NTK12345",
    customerName: "Nguyễn thế Kiên",
    items: [
        {
            id: "P001",
            name: "Chuột không dây",
            price: 300000,
            quantity: 2
        },
        {
            id: "P002",
            name: "Bàn phím cơ",
            price: 1200000,
            quantity: 1,
            note: "Giao hàng trong giờ hành chính"
        }
    ]
};

printOrder(sampleOrder);
