function number(number)
{
    let numString = Math.abs(number).toString();
    return numString.length;
}

console.log(number(2345));
console.log(number(-672345));
console.log(number(0));
console.log(number(100000000));
