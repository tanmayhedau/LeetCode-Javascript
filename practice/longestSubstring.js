// Longest Substring with At Least K Repeating Characters

function longestSubstring(s,k) {
    return helper(0, s.length);

    function helper(start,end){
       let map ={};

       for(let i=start; i<end; i++){
        map[s[i]] = (map[s[i]] || 0)+1;
       }

       for (let i = start; i < end; i++){
        if(map[s[i]]<k){
            let left = helper(start,i);
            let right = helper(i+1,end);
            return Math.max(left,right);
        }
       }
       return end-start
    }
}

let res1= longestSubstring("aaabb",3)
console.log(res1)


// var obj = {name:"first"}
// console.log(obj["name"])

// var went = true
// var going = went? "yes":"no"
// console.log(going)


// function sum(a,b) { console.log(a+b)}
// sum(5,6)
// // console.log(res)

// var x =0
// var y=""
// var z=4
// if(x==y){
//     z++
// }
// console.log(z)

// var I;
// var y=6
// var x="oooo"
// for(let i=0; i<x.length;i++){
//     y+=i
// }
// console.log(y)

// let a=1
// for(var i=1; i<5;i++){a++,i--}
// console.log(a)

// console.log(number)
// number=6

// "1"==1