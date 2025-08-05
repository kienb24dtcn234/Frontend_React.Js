function typeConsole(type = "log") {
  const message = `Đây là type: ${type}`;
  if (typeof console[type] === "function") {
    console[type](message);
  } else {
    console.log("Type không hợp lệ. In bằng console.log:");
    console.log(message);
  }
}

typeConsole();
typeConsole("Warn");
typeConsole("error");
typeConsole("log");

