
// # Write a program that reads 5 Random 2 Digit values , then find their sum and the average

var total=0;
for(var i=0;i<5;i++){
    let temp=Math.floor(Math.random()*10);
    console.log(i+" "+temp);
    total+=temp;
}
console.log("sum is " + total);
console.log("Average is "+ total/5);