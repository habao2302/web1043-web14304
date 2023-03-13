// nhap a b c
let a,b,c;


a = parseInt( prompt("nhap a"));
b = parseInt( prompt("nhap b"));
c = parseInt( prompt("nhap c"));
if(a==0){
    let x=-c/b;
    console.log("phuong trinh co 1 nghiem"+x);
}else {
    let  delta=Math.pow(b,2)-4*a*c;
    if(delta<0){
       console.log("phuong trinh vo nghiem");

    }else if(delta==0){
        x=-b/(2*a);
        console.log(x)
    }else{
       let x1=(-b+Math.sqrt(delta))/(2*a);
       let x2=(-b-Math.sqrt(delta))/(2*a);
        console.log("x1="+x1+"x2="+2);
        
    }
}