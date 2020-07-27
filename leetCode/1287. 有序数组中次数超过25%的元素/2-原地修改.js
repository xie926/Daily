/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let count = 0, current;
  const l = arr.length;
  for(let ele of arr){
      if(ele == current){
          count++;
          if(count/l>0.25)return ele;
      }else{
          count=1;
          current=ele;
          if(count/l>0.25)return ele;
      }
  }
  throw Error('WTF HAVE YOU FED ME!!!')
};