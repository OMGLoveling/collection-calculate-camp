'use strict';

function collect_all_even(collection_a) {
  let  collection_b=[];
  let  j=0;
  collection_a.forEach( i=>{
      if(i%2===0)
      {
       collection_b[j]=i;
       j++;
      }
  })
  return collection_b;
}

module.exports = collect_all_even;
