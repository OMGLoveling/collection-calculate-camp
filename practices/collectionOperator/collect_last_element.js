'use strict';

function collect_last_element(collection) {
  let k;
  collection.forEach(function (elem,i){
      if(i===collection.length-1)
      {
          k = collection[i];
      }

  })
  return k;
}

module.exports = collect_last_element;
