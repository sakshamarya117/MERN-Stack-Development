let user = {
    name:'saksham',
    email:'sakshamarya@gmail.com',
    password:'89898665gf',
    age:32
}

console.log(user.name);

user.password= 'abrakadabra';
user.address= 'Lucknow';
console.log(user);

let smartphone={
    brand:'samsung',
    model: 's23',
    price:70000,
    colors:['black', 'white','blue'],
    features:{
        cpu:'sd865',
        ram:'8gb',
        storage:'128gb'
    }
}
console.log(smartphone.colors[2]);
smartphone.colors[2]='grey';
console.log(smartphone);

//syntax to change the cpu to 'sd888'
// display to display all feature
smartphone.features.cpu='sd888';
console.log(smartphone);

console.log('--------------------------------------------------');

let smartphone=
{
brand:'moto',
model :'g8',
price:16000,
colors:['black','blue', 'white']
},

{
    brand:'nothing',
    model :'2',
    price:50000,
    colors:['black', 'white']
    },
            

//change the price of  2nd phone to 35000.
// ans 
smartphones[1].price=35000;
// adda new color to last 2nd phone.
ans/
//use a for of loop to count the number of phone having price less than 50000. 
