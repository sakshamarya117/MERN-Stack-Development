const nums=[1,5,7,6,23,89,75,32]

//program to square each elements of array

const res= nums.map((n)=>{return n**2});  //map

console.log(res);

//program to each element of array by 2

// const nums=[1,5,7,6,23,89,75,32]

// const res= nums.map((n)=>{return n/2});  //map

// console.log(res);


const prices= ['$43.99', '$9.20', '$992.50','$34.999'];
//program to convert each element of array to integer

console.log(parseInt('$43.99'.slice(1)));
const res3 = prices.map((p)=>{return parseInt(p.slice(1))});
console.log(res3);

const filterArr1=nums.filter((a) => {return a%2==0});
console.log(filterArr1);


const price2 = [345, 299, 788,1024, 99, 291,124,3821, 800]
const filterArr2=price2.filter((b) => {return b<=500});
console.log(filterArr2);
//program to filter out prices greater than 500

const perfectPrices= prices.filter((p) => {return Math.sqrt(p)%1==0});
console.log(perfectPrices);
// filter out price which is not a perfect square.

//filter out price which is a prime number.






