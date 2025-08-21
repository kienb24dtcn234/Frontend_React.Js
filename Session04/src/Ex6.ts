type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};

const listProduct: Product[] = [
    {
        id: "P001",
        name: "Chuột không dây ",
        price: 500_000,
        category: {
            id: "C001",
            name: "Phụ kiện máy tính"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Bàn phím cơ ",
        price: 1_200_000,
        category: {
            id: "C001",
            name: "Phụ kiện máy tính"
        }
    },
    {
        id: "P003",
        name: "Tai nghe ",
        price: 1_500_000,
        category: {
            id: "C002",
            name: "Âm thanh"
        },
        discount: 5
    }
];

function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}

function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name} - Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);
    if (product.discount) {
        console.log(`Giảm giá: ${product.discount}% - Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    } else {
        console.log(`Không có giảm giá - Giá thanh toán: ${finalPrice.toLocaleString()} VND`);
    }
    console.log('---');
}

listProduct.forEach(printProductInfo);
