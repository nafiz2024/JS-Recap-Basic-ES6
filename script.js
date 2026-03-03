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
getcardHTML('iphone 17', 'This is most common phone', '2 laks');
