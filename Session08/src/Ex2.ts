enum WeekDays {
  Monday = "Thứ Hai",
  Tuesday = "Thứ Ba",
  Wednesday = "Thứ Tư",
  Thursday = "Thứ Năm",
  Friday = "Thứ Sáu",
  Saturday = "Thứ Bảy",
  Sunday = "Chủ Nhật",
}
function printAll<T>(items: T[]): void {
  for (const item of items) console.log(item);
}
const weekDaysList = Object.values(WeekDays);
printAll(weekDaysList);
