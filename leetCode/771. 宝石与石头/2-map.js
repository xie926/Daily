var numJewelsInStones = function (J, S) {
  const map = new Map();
  for (let i = 0; i < J.length; i++) {
      map.set(J[i], true);
  }
  let result = 0;
  for (let i = 0; i < S.length; i++) {
      if (map.get(S[i])) {
          result += 1;
      }
  }
  return result;
};