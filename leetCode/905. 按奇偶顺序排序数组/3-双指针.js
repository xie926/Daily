var sortArrayByParity = function(A) {
  let even = A.length - 1, odd = 0;
  while(even > odd){
      if(A[odd] % 2 > A[even] % 2){
          let temp;
          temp = A[even];
          A[even] = A[odd];
          A[odd] = temp;
      }
      if(A[even] % 2 === 1){
          even--
      }
      if(A[odd] % 2 === 0){
          odd++
      }
  }
  return A
};