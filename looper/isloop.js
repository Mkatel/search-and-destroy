'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
<<<<<<< HEAD
    
=======
  let curr = linkedlist.head
//console.log(curr)
  let seen=[];
  //console.log('seen',seen,curr.value)
  while(curr){
    //console.log('Am I in the loop')
    if(seen.includes(curr.value)){
     return true
    }
    seen.push(curr.value);
    curr=curr.next;

  }
return false;
>>>>>>> d8a2200f91e02932f3c2b118d4f67c8ce2e2523c
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
