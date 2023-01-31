// function getPrime(left,right){
//     let primes=[]
//     for(let i=left;i<right;i++){
//         if(i==0||i==1){
//             continue
//         }
//         let check=false
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 check=true
//                 break
//             }
//         }
//         if(check==false){
//             primes.push(i)
//         }
//     }
//     return primes
// }

// function getPrime(left,right){
//     let arr=new Array(right-left)
//     let primes=[]
//     let consonent=[]
//     arr.fill("Prime")
//     arr[0]=null
//     arr[1]="Consonent"
//     for(let i=left;i<arr.length;i++){
//         if(i==0||i==1){
//             continue
//         }
//         if(arr[i]=="Prime"){
//             primes.push(i)
//             let index=i+i
//             while(index<arr.length){
//                 arr[index]="consonent"
//                 index=index+i
//             }
//         }else{
//             consonent.push(i)
//         }
//     }
//     primes[primes.length]=[primes.length]
//     consonent[consonent.length]=[consonent.length]
//     let output={primes:primes,consonent:consonent}
//     return output

// }

// console.log(getPrime(0,100))

//[[({{}})]]
//[[[[[{]]]]]
function checkParanthethis(str){
    let arr=[]
    let invalidPair=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=="{"||str[i]=="("||str[i]=="["){
            arr.push(str[i])
        }else{
            if((arr[arr.length-1]=="{" && str[i]=="}")||(arr[arr.length-1]=="(" && str[i]==")")||(arr[arr.length-1]=="[" && str[i]=="]")){
                arr.pop()
            }else{
                invalidPair.push(arr[arr.length-1])
                invalidPair.push(str[i])
                return invalidPair
            }
        }
    }
    if(arr.length==0){
        return "Valid Paranthesis"
    }else{
        return "invalid Paranthesis"
    }

}

console.log(checkParanthethis("[[({{)()}})]]"))

//Delete Middle node of a linked list
// function getPrime(left,right){
//     let primes=[]
//     for(let i=left;i<right;i++){
//         if(i==0||i==1){
//             continue
//         }
//         let check=false
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 check=true
//                 break
//             }
//         }
//         if(check==false){
//             primes.push(i)
//         }
//     }
//     return primes
// }

// function getPrime(left,right){
//     let arr=new Array(right-left)
//     let primes=[]
//     let consonent=[]
//     arr.fill("Prime")
//     arr[0]=null
//     arr[1]="Consonent"
//     for(let i=left;i<arr.length;i++){
//         if(i==0||i==1){
//             continue
//         }
//         if(arr[i]=="Prime"){
//             primes.push(i)
//             let index=i+i
//             while(index<arr.length){
//                 arr[index]="consonent"
//                 index=index+i
//             }
//         }else{
//             consonent.push(i)
//         }
//     }
//     primes[primes.length]=[primes.length]
//     consonent[consonent.length]=[consonent.length]
//     let output={primes:primes,consonent:consonent}
//     return output

// }

// console.log(getPrime(0,100))

//[[({{}})]]
//[[[[[{]]]]]
function checkParanthethis(str){
    let arr=[]
    let invalidPair=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=="{"||str[i]=="("||str[i]=="["){
            arr.push(str[i])
        }else{
            if((arr[arr.length-1]=="{" && str[i]=="}")||(arr[arr.length-1]=="(" && str[i]==")")||(arr[arr.length-1]=="[" && str[i]=="]")){
                arr.pop()
            }else{
                invalidPair.push(arr[arr.length-1])
                invalidPair.push(str[i])
                return invalidPair
            }
        }
    }
    if(arr.length==0){
        return "Valid Paranthesis"
    }else{
        return "invalid Paranthesis"
    }

}

console.log(checkParanthethis("[[({{)()}})]]"))

//Delete Middle node of a linked list
// function getPrime(left,right){
//     let primes=[]
//     for(let i=left;i<right;i++){
//         if(i==0||i==1){
//             continue
//         }
//         let check=false
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 check=true
//                 break
//             }
//         }
//         if(check==false){
//             primes.push(i)
//         }
//     }
//     return primes
// }

// function getPrime(left,right){
//     let arr=new Array(right-left)
//     let primes=[]
//     let consonent=[]
//     arr.fill("Prime")
//     arr[0]=null
//     arr[1]="Consonent"
//     for(let i=left;i<arr.length;i++){
//         if(i==0||i==1){
//             continue
//         }
//         if(arr[i]=="Prime"){
//             primes.push(i)
//             let index=i+i
//             while(index<arr.length){
//                 arr[index]="consonent"
//                 index=index+i
//             }
//         }else{
//             consonent.push(i)
//         }
//     }
//     primes[primes.length]=[primes.length]
//     consonent[consonent.length]=[consonent.length]
//     let output={primes:primes,consonent:consonent}
//     return output

// }

// console.log(getPrime(0,100))

//[[({{}})]]
//[[[[[{]]]]]
function checkParanthethis(str){
    let arr=[]
    let invalidPair=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=="{"||str[i]=="("||str[i]=="["){
            arr.push(str[i])
        }else{
            if((arr[arr.length-1]=="{" && str[i]=="}")||(arr[arr.length-1]=="(" && str[i]==")")||(arr[arr.length-1]=="[" && str[i]=="]")){
                arr.pop()
            }else{
                invalidPair.push(arr[arr.length-1])
                invalidPair.push(str[i])
                return invalidPair
            }
        }
    }
    if(arr.length==0){
        return "Valid Paranthesis"
    }else{
        return "invalid Paranthesis"
    }

}

console.log(checkParanthethis("[[({{)()}})]]"))

//Delete Middle node of a linked list