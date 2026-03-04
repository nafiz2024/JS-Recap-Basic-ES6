function solve(num1, num2=0) {
    let num = num1 + num2;
    return num;
}
const add = solve(34, );
// console.log(add);

function fullname(first, last = '') {
    const name = first + ' ' + last;
    console.log(name);
}
// fullname('Nafiz',);

function multiply(num1, num2 = 1) {
    const result = num1 * num2;
    console.log(result);
}
// multiply(3, 3)

function getcardHTML(name, discription, price){
    const div = `
        <div class="card">
            <h2>${name}</h2>
            <p>${price}</p>
            <p>${discription}</p>
        </div>
    `;
    console.log(div);
}
// getcardHTML('iphone 17', 'This is most common phone', '2 laks');

const multiply1 = (num1, num2) => num1 * num2;
// console.log(multiply1(2, 3));

const tenTimes = num => num * 10;
// console.log(tenTimes(10));

const max = Math.max(3, 5, 1, 8, 4, 48, 2);
// console.log(max);

const numbers = [3, 5, 1, 8, 4, 48, 2];
const max2 = Math.max(...numbers);
// console.log(...numbers);

const details = {
    name: 'Nafiz',
    age: 24,
    family : {
        father: 'Masud Alam',
        mother: {
            name: 'Nasrin Aktery',
            age: 45
        }
    }
}
// console.log(details?.family?.mother?.age);

// function add2 (a, b) {
//     const result = (a + b);
//     const total = doubleIt(result);
//     return total;
// }
//
// function doubleIt(result){
//     total = result * result;
//     return total;
// }
// const result = add2(5, 5);
// console.log(result)

function outerFunction(){
    function innerFunction(){
        console.log("This is inner Function!");
    }
    return innerFunction;
}
// const result = outerFunction();
// result()

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const square = number.map(num => num * num);

console.log(square);
console.log(number);