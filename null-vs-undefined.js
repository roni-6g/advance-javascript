//check undefined result
// null = empty 

let userName;
console.log(userName);

function calculate(num1, num2){
    console.log(num1 + num2);
    return;
}
const result = calculate(14,17);
console.log(result);

function calculate(num1, num2){
    console.log(num1);
}
const result2 = calculate(14);

const roddur = {name: "Roddur Roy", phone: 0171000000}
console.log(roddur.job);

let hello = undefined ;
console.log(hello);

const age = [12, 9, 10];
console.log(age[5]);