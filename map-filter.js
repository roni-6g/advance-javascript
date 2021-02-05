
// const outPut = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     outPut.push(result);
// }

// const numbers = [3, 5, 4, 8, 9];

// function square(element){
//     return element * element;
// }
// var result = numbers.map(function(element){
//     return element * element;    
// });
// console.log(result);


const numbers = [3, 5, 4, 8, 9];

const result = numbers.filter(element => element < 5);

const result2 = numbers.find(x => x > 4);

console.log(result2);