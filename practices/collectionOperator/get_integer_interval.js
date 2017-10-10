'use strict';

function get_integer_interval(number_a, number_b) {
    if(number_b>number_a){
      return get_sort(number_a,number_b);
    }
    else if(number_b<=number_a){
      return get_sort(number_b,number_a).reverse();
    }
}

function get_sort(a,b) {
  let collection = [];
  for(let i=a;i<=b;i++){
    collection.push(i);
  }
  return collection;

}

module.exports = get_integer_interval;

