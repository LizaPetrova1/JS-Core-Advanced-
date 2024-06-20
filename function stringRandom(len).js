function stringRandom(len)
{
    const sumbol = 'ABCDEFGJIHKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuwvxyz0123456789';
    let res = '';
    for (i = 0; i < len; i++)
        {
            const randomI = Math.floor(Math.random() * sumbol.length);
            res += sumbol[randomI];
        }
        return res;

}

console.log(stringRandom(10));
console.log(stringRandom(3));
console.log(stringRandom(33));
console.log(stringRandom(51));
