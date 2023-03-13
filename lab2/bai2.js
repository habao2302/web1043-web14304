// nhap a b c
let a = parseInt (prompt ("nhap a:"));
let b = parseInt(prompt ("nhap b:"));
let c = parseInt(prompt ("nhap c:"));
// xac dinh phai tam giac hay khong
if(a<b+c && b<a+c && c<a+b){
    //xac dinh tam giac vuong
    if(a*a ==b*b+c*c || b*b ==a*a+c*c || c*c== a*a+b*b ){
        console.log("day la tam giac vuong");

    }// xac dinh tam giac deu
    else if(a==b && b==c){
        console.log("đây là tam giác đều");
    }// xac dinh tam giac can
    else if(a==b || a==c || b==c){
        console.log("đây là tam giác cân");
    }// xac dinh tam giac tu
    else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b){
        console.log("đây là tam giác tù");

    }//xac dinh tam giac nhon
    else{
        console.log("đây là tam giác nhọn");
    }
}// nguoc lai khong phai la tam giac
else{
    console.log("a b c khong phai la 1 tam giac");
}