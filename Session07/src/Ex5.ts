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
    status: "active" | "banned"
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else {
      console.log("Tài khoản đã bị khóa");
    }
  }
}
const u1 = new UserAcc(1, "kien", "123456", "user", "active");
u1.login();
u1.logout();
const u2 = new UserAcc(2, "banuser", "abcdef", "user", "banned");
u2.login();
