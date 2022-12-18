let x=parseInt (prompt("Enter the number"));
let sum=0;
let tem=x;
while(tem>0){
    y=tem % 10;
    sum+=y**3;
    tem=parseInt(tem/10)
}
document.write(x)
if(x==sum){
    document.write("yes armstrong")
}
else{
    document.write("not armstrong") 
}