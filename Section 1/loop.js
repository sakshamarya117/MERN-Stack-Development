for(let i=0; i<10;i++){
    console.log(i);
}
// ------------------------------------node --watch filename
console.log('----------------------------------');
for(let i=20; i>=0;i-=3){
    console.log(i);
}
// wap to print all numbers divisable by 7 & 11 in range of 50 - 100;
console.log('------------------------------------------------- ');
for(let i=50; i<=1000; i++)
{
    if(i%7==0 && i%11==0)
    {
        console.log(i);
    }
    
}
console.log('----------------------------------------------------------------------------');
//wap to check 

//WHILE LOOP

let mynum=5;
while(mynum<20){
    console.log(mynum);
    mynum +=2;
}

// wap to reverse digits of a No 

console.log('----------------------------------------------------------------------------------------');

let x=123;
let a=0;
// let y=x;
while(x>0){
    let r=x%10;
    a=a*10 + r;
    x=parseInt(x/10);
}
console.log(a);
