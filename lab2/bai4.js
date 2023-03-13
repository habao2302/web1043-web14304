//khai bao mang
 // Tạo mảng ban đầu
 let arr = ["Tue", "Thu", "Sat", "Nine"];

 // Thêm các phần tử mới vào mảng theo thứ tự
 arr.splice(0, 0, "Mon");
 arr.splice(2, 0, "Wed");
 arr.splice(4, 0, "Fri");
 arr.splice(6, 1, "Sun");

 // In mảng kết quả


 document.write('Xuat chuoi ngay trong tuan: ' + arr);