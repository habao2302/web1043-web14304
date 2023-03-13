   // nhap ho ten
   let hoTen = prompt("Nhập vào họ và tên:");
   // nhap gioi tinh
   let gioiTinh = prompt("Nhập vào giới tính (Nam/Nữ):");

   // tach ho ten ten dem
   let hten = hoTen.split(" ");
   let ho = hten[0];
   let tenDem = hten.slice(1, hten.length - 1).join(" ");
   let ten = hten[hten.length - 1];

   // In ho ten dem ten
   console.log("Họ: " + ho);
   console.log("Tên đệm: " + tenDem);
   console.log("Tên: " + ten);

   // thay ten dem them gio tinh
   if (gioiTinh.toLowerCase("nam")) {
       tenDem = "Văn";
   } else if (gioiTinh.toLowerCase("nữ")) {
       tenDem = "Vẽ";
   } else {
       console.log("giới tính không hợp lệ ");
   }