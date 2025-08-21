
import * as readline from "readline";

/* ======================= Models ======================= */
class Customer {
  private static _nextId = 1;
  public id: number;
  public name: string;
  public email: string;
  public shippingAddress: string;

  constructor(name: string, email: string, shippingAddress: string) {
    this.id = Customer._nextId++;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }

  getDetails(): string {
    return `Customer#${this.id} - ${this.name} | ${this.email} | ${this.shippingAddress}`;
  }
}

abstract class Product {
  private static _nextId = 1;
  public id: number;
  public name: string;
  public price: number;
  public stock: number;

  constructor(name: string, price: number, stock: number) {
    this.id = Product._nextId++;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(quantity: number): void {
    if (quantity <= 0) return;
    if (quantity > this.stock) {
      throw new Error(`Không đủ hàng cho "${this.name}". Còn: ${this.stock}`);
    }
    this.stock -= quantity;
  }

  restock(quantity: number): void {
    if (quantity > 0) this.stock += quantity;
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  public warrantyPeriod: number;

  constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
    super(name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }

  getProductInfo(): string {
    return `[Electronics] #${this.id} ${this.name} | ${this.price.toLocaleString("vi-VN")} VND | Stock: ${this.stock} | BH: ${this.warrantyPeriod} tháng`;
  }
  getShippingCost(_: number): number { return 50_000; }
  getCategory(): string { return "Electronics"; }
}

class ClothingProduct extends Product {
  public size: string;
  public color: string;

  constructor(name: string, price: number, stock: number, size: string, color: string) {
    super(name, price, stock);
    this.size = size;
    this.color = color;
  }

  getProductInfo(): string {
    return `[Clothing]  #${this.id} ${this.name} | ${this.price.toLocaleString("vi-VN")} VND | Stock: ${this.stock} | Size: ${this.size} | Màu: ${this.color}`;
  }
  getShippingCost(_: number): number { return 25_000; }
  getCategory(): string { return "Clothing"; }
}


type OrderLine = { product: Product; quantity: number };

class Order {
  private static _nextId = 1;
  public orderId: number;
  public customer: Customer;
  public products: OrderLine[];
  public totalAmount: number;

  constructor(customer: Customer, products: OrderLine[]) {
    this.orderId = Order._nextId++;
    this.customer = customer;
    this.products = products;
    this.totalAmount = products.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  }

  getDetails(): string {
    const lines = this.products
      .map(l => `- ${l.product.name} x${l.quantity} = ${(l.product.price * l.quantity).toLocaleString("vi-VN")} VND`)
      .join("\n");
    return `Order#${this.orderId} | Customer: ${this.customer.name}\n${lines}\nTổng: ${this.totalAmount.toLocaleString("vi-VN")} VND`;
  }
}

/* ======================= Store ======================= */
class Store {
  public products: Product[] = [];
  public customers: Customer[] = [];
  public orders: Order[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(name: string, email: string, address: string): Customer {
    const c = new Customer(name, email, address);
    this.customers.push(c);
    return c;
  }

  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const customer = this.findEntityById(this.customers, customerId);
    if (!customer) {
      console.log("Khách hàng không tồn tại.");
      return null;
    }

    const lines: OrderLine[] = [];
    for (const pq of productQuantities) {
      const product = this.findEntityById(this.products, pq.productId);
      if (!product) {
        console.log(`Không tìm thấy sản phẩm ID ${pq.productId}.`);
        return null;
      }
      if (pq.quantity <= 0 || pq.quantity > product.stock) {
        console.log(`Số lượng không hợp lệ cho "${product.name}". Còn: ${product.stock}`);
        return null;
      }
      lines.push({ product, quantity: pq.quantity });
    }

    lines.forEach(l => l.product.sell(l.quantity));
    const order = new Order(customer, lines);
    this.orders.push(order);
    console.log(`Tạo đơn hàng thành công: Order#${order.orderId}`);
    return order;
  }

  cancelOrder(orderId: number): void {
    const idx = this.orders.findIndex(o => o.orderId === orderId);
    if (idx === -1) {
      console.log("Không tìm thấy đơn hàng.");
      return;
    }
    const order = this.orders[idx];
    order.products.forEach(l => l.product.restock(l.quantity));
    this.orders.splice(idx, 1);
    console.log(`Đã hủy Order#${orderId} và hoàn kho.`);
  }

  listAvailableProducts(): void {
    const available = this.products.filter(p => p.stock > 0);
    if (available.length === 0) {
      console.log("Không có sản phẩm còn hàng.");
      return;
    }
    available.forEach(p => console.log(p.getProductInfo()));
  }

  listCustomerOrders(customerId: number): void {
    const list = this.orders.filter(o => o.customer.id === customerId);
    if (list.length === 0) {
      console.log("Khách hàng chưa có đơn hàng.");
      return;
    }
    list.forEach(o => console.log(o.getDetails()));
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
  }

  countProductsByCategory(): void {
    const counts = this.products.reduce<Record<string, number>>((acc, p) => {
      const cat = p.getCategory();
      acc[cat] = (acc[cat] ?? 0) + 1;
      return acc;
    }, {});
    console.log("Thống kê theo danh mục:", counts);
  }

  updateProductStock(productId: number, newStock: number): void {
    const idx = this.products.findIndex(p => p.id === productId);
    if (idx === -1) {
      console.log("Không tìm thấy sản phẩm.");
      return;
    }
    this.products[idx].stock = Math.max(0, Math.floor(newStock));
    console.log(`Cập nhật tồn kho #${productId} -> ${this.products[idx].stock}`);
  }

  findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
    return collection.find(item => item.id === id);
  }

  viewProductDetail(productId: number): void {
    const p = this.products.find(pr => pr.id === productId);
    if (!p) {
      console.log("Không tìm thấy sản phẩm.");
      return;
    }
    console.log(p.getProductInfo());
  }
}

/* ======================= CLI Helpers ======================= */
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, ans => res(ans.trim())));
}

function showMenu() {
  console.log(`
===== MENU =====
1) Thêm khách hàng
2) Thêm sản phẩm (Electronics / Clothing)
3) Tạo đơn hàng
4) Hủy đơn hàng
5) Hiển thị sản phẩm còn hàng
6) Hiển thị đơn hàng của khách hàng
7) Tính tổng doanh thu
8) Thống kê sản phẩm theo danh mục
9) Cập nhật tồn kho
10) Tìm kiếm (generic) theo ID (Customer/Product)
11) Xem chi tiết sản phẩm
0) Thoát
`);
}

/* ======================= App (Main Loop) ======================= */
const store = new Store();

// (Tùy chọn) seed dữ liệu mẫu để demo nhanh:
(function seed() {
  const c1 = store.addCustomer("Nguyễn Văn A", "a@example.com", "Hà Nội");
  store.addCustomer("Trần Thị B", "b@example.com", "Đà Nẵng");

  const p1 = new ElectronicsProduct("Laptop Pro", 25_000_000, 5, 24);
  const p2 = new ElectronicsProduct("Tai nghe", 1_500_000, 20, 12);
  const p3 = new ClothingProduct("Áo thun", 199_000, 50, "L", "Đen");
  store.addProduct(p1);
  store.addProduct(p2);
  store.addProduct(p3);

  store.createOrder(c1.id, [{ productId: p1.id, quantity: 1 }]);
})();

async function addCustomerFlow() {
  const name = await ask("Tên KH: ");
  const email = await ask("Email: ");
  const addr = await ask("Địa chỉ giao hàng: ");
  const c = store.addCustomer(name, email, addr);
  console.log("Đã thêm:", c.getDetails());
}

async function addProductFlow() {
  const type = (await ask("Loại (1=Electronics, 2=Clothing): ")).toLowerCase();
  const name = await ask("Tên SP: ");
  const price = Number(await ask("Giá: "));
  const stock = Number(await ask("Tồn kho: "));
  if (!Number.isFinite(price) || !Number.isFinite(stock)) {
    console.log("Giá/Tồn kho không hợp lệ.");
    return;
  }

  if (type === "1" || type === "electronics") {
    const wp = Number(await ask("Bảo hành (tháng): "));
    const p = new ElectronicsProduct(name, price, Math.max(0, Math.floor(stock)), Math.max(0, Math.floor(wp)));
    store.addProduct(p);
    console.log("Đã thêm:", p.getProductInfo());
  } else if (type === "2" || type === "clothing") {
    const size = await ask("Size: ");
    const color = await ask("Màu: ");
    const p = new ClothingProduct(name, price, Math.max(0, Math.floor(stock)), size, color);
    store.addProduct(p);
    console.log("Đã thêm:", p.getProductInfo());
  } else {
    console.log("Loại không hợp lệ.");
  }
}

async function createOrderFlow() {
  const cid = Number(await ask("ID Khách hàng: "));
  const raw = await ask('Nhập items "productId:quantity" (cách nhau bởi dấu phẩy). Ví dụ: 1:2,3:1\n> ');
  const pairs = raw.split(",").map(s => s.trim()).filter(Boolean);

  const items: { productId: number; quantity: number }[] = [];
  for (const p of pairs) {
    const [pidStr, qtyStr] = p.split(":").map(x => x.trim());
    const pid = Number(pidStr);
    const qty = Number(qtyStr);
    if (!Number.isFinite(pid) || !Number.isFinite(qty)) {
      console.log(`Cú pháp sai ở "${p}".`);
      return;
    }
    items.push({ productId: pid, quantity: qty });
  }

  try {
    const order = store.createOrder(cid, items);
    if (order) console.log(order.getDetails());
  } catch (e: any) {
    console.log("Lỗi tạo đơn:", e?.message ?? e);
  }
}

async function cancelOrderFlow() {
  const id = Number(await ask("ID Đơn hàng cần hủy: "));
  store.cancelOrder(id);
}

async function listCustomerOrdersFlow() {
  const id = Number(await ask("ID Khách hàng: "));
  store.listCustomerOrders(id);
}

async function updateStockFlow() {
  const pid = Number(await ask("ID Sản phẩm: "));
  const ns = Number(await ask("Tồn kho mới: "));
  store.updateProductStock(pid, ns);
}

async function genericFindFlow() {
  const type = (await ask("Tìm (1=Customer, 2=Product): ")).toLowerCase();
  const id = Number(await ask("Nhập ID: "));
  if (type === "1" || type === "customer") {
    const found = store.findEntityById(store.customers, id);
    console.log(found ? found.getDetails() : "Không tìm thấy khách hàng.");
  } else if (type === "2" || type === "product") {
    const found = store.findEntityById(store.products, id);
    console.log(found ? found.getProductInfo() : "Không tìm thấy sản phẩm.");
  } else {
    console.log("Loại không hợp lệ.");
  }
}

async function viewProductDetailFlow() {
  const pid = Number(await ask("ID Sản phẩm: "));
  store.viewProductDetail(pid);
}

function showRevenue() {
  console.log("Tổng doanh thu:", store.calculateTotalRevenue().toLocaleString("vi-VN"), "VND");
}

function listAvailableProductsFlow() {
  store.listAvailableProducts();
}

function countByCategoryFlow() {
  store.countProductsByCategory();
}

async function main() {
  console.log("=== E-COMMERCE STORE (TypeScript CLI) ===");
  let running = true;

  while (running) {
    showMenu();
    const choice = await ask("Chọn chức năng: ");

    switch (choice) {
      case "1": await addCustomerFlow(); break;
      case "2": await addProductFlow(); break;
      case "3": await createOrderFlow(); break;
      case "4": await cancelOrderFlow(); break;
      case "5": listAvailableProductsFlow(); break;
      case "6": await listCustomerOrdersFlow(); break;
      case "7": showRevenue(); break;
      case "8": countByCategoryFlow(); break;
      case "9": await updateStockFlow(); break;
      case "10": await genericFindFlow(); break;
      case "11": await viewProductDetailFlow(); break;
      case "0": running = false; break;
      default: console.log("Lựa chọn không hợp lệ.");
    }
  }

  rl.close();
  console.log("Thoát.");
}

main().catch(err => {
  console.error("Lỗi:", err);
  rl.close();
});
