function isValidSequence(array, sequence){
    let index = 0;
    
    for(let i=0; i<array.length; i++){
        if(sequence[index] === array[i]){
          index++;
      }
    }
    
    return sequence.length === index; 
   
  }

  console.log(isValidSequence([5,1,22,25,6,-1,8,10],[1,6,-1,10]))