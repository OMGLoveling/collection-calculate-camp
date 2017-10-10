'use strict';

function get_integer_interval_2(number_a, number_b) {
  if(number_b>number_a){
    return get_sort(number_a,number_b);
  }
  else if(number_b<number_a){
    return get_sort(number_b,number_a).reverse();
  }
  else if(number_a=number_b){
    if(number_b%2===1)
    {
      return get_sort(number_a,number_b);
    }
    else if(number_b%2===0){
      return get_sort_1(number_a,number_b);
    }
  }

}
function get_sort(a,b) {
  let collection = [];
  for(let i=a+1;i<=b;i+=2){
    collection.push(i);
  }
  return collection;
}
function get_sort_1(a,b) {
  let collection_1=[];
  for(let i=a;i<=b;i++) {
    collection_1.push(i);
  }
  return collection_1;
}

module.exports = get_integer_interval_2;
