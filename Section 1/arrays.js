const nums= [23, 43, 56, 9 , 7, 'ABCD', 3776 ]

console.log(nums);

// -------------------------------------------------------------node --watch filename
console.log(typeof nums);


console.log('--------------------------------------------------------------');

const movies= ['Batman', 'Inception', 'Darknight', 'Asur', 'Joker'];

console.log(movies.length);
console.log(movies[3]);
console.log(movies[-3]);
console.log(movies.at(-3));

//SLICING

console.log(movies.slice(2,5));
console.log(movies.slice(2,-1));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

//ADDING ELEMENTS

movies.push('her');
// console.log(movies);

//removing elements
movies.unshift('flash');
console.log(movies);
// movies.shift();
// movies.shift();
// movies.shift();
// movies.shift();
movies.shift();//remove elements from the start of the array
movies.pop();//remove elements from the end of the array
console.log(movies);

//SPLICE 

movies.splice(3,2);
console.log(movies);
movies.splice(1,1,'PK')
console.log(movies);

movies.splice(2,3);
console.log(movies);
console.log(...movies);//Spread Operator
console.log(['HR',...movies, 'dhoom', 'dhoom2','dhoom3']);