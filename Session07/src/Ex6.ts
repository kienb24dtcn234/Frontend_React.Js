class Account {
  public id: number;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;
  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.isLogin = false;
  }
  login(): void {
    console.log("Vui lòng đăng nhập qua lớp con.");
  }
  logout(): void {
    if (this.isLogin) {
      this.isLogin = false;
      console.log("Đăng xuất thành công");
    }
  }
}
class UserAcc extends Account {
  public status: "active" | "banned";
  constructor(
    id: number,
    userName: string,
    password: string,
    role: string,
    status: "active" | "banned" = "active"
  ) {
    super(id, userName, password, role);
    this.status = status;
  }
  login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log(`User ${this.userName} đăng nhập thành công`);
    } else {
      console.log("Tài khoản đã bị khóa");
    }
  }
}
class AdminAcc extends Account {
  constructor(id: number, userName: string, password: string) {
    super(id, userName, password, "admin");
  }
  banUser(id: number, users: UserAcc[]): void {
    const user = users.find(u => u.id === id);
    if (!user) {
      console.log(`Không tìm thấy user có id=${id}`);
      return;
    }
    user.status = "banned";
    if (user.isLogin) user.isLogin = false;
    console.log(`Đã khóa tài khoản user id=${id}`);
  }
}
const users: UserAcc[] = [
  new UserAcc(1, "kien", "123456", "user", "active"),
  new UserAcc(2, "hoa", "abcdef", "user", "active"),
];
const admin = new AdminAcc(99, "admin", "admin@123");
users[0].login();        
admin.banUser(1, users); 
users[0].login();       
console.log({
  id: users[0].id,
  userName: users[0].userName,
  status: users[0].status,
  isLogin: users[0].isLogin,
});
