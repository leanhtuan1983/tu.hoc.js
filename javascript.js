alert("Xin chào! Hãy hoàn thành các yêu cầu sau nhé!!!");
let lastName = prompt("hãy nhập tên của bạn:");
let firstName = prompt("Hãy nhập họ của bạn");
let bornIn = prompt("Hãy nhập năm sinh của bạn");
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let age = currentYear - bornIn;
alert(
  "Xin chào bạn " +
    firstName +
    " " +
    lastName +
    "! Số tuổi của bạn là: " +
    age +
    "."
);
