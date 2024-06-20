"use strict";

function hasDuplicates(arr) 
{

    const seen = {};
    
    for (let i = 0; i < arr.length; i++) 
    {
        if (seen[arr[i]])
        {
            return true;
        }
        seen[arr[i]] = true;
    }
    
    return false;
}

console.log(hasDuplicates([1, 2, 3, 4])); 
console.log(hasDuplicates([1, 2, 3, 4, 2]));
