/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max.apply(null, candies)

  return candies.map((item, index) => {
      return (item + extraCandies) >= max
  })
};