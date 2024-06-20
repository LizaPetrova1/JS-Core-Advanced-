function ArrNumber(arr)
{
    return arr.filter(num => num > 0 && num < 9).reduce((sum, num) => sum + num, 0);

}

console.log(ArrNumber([1,2,3,4,55]));
console.log(ArrNumber([-1,2,3,8,55]));
console.log(ArrNumber([10,20,3,4,9]));
console.log(ArrNumber([1,2,-3,4,-55]));
