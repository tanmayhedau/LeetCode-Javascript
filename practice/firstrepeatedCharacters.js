
function firstRepeating(str)
{
    // Creates an empty hashset
    let h = new Set();
     
    // Traverse the input array from left to right
    for(let i = 0; i <= str.length - 1; i++)
    {
        let c = str[i];
 
        // If element is already in hash
        // set, update x and then break
        if (h.has(c))
            return c;
             
        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}
// Driver code
let str = "geeksforgeeks";
console.log(firstRepeating( str))