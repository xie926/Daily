/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(items => {
        return items.reverse().map(item => {
            if(item){
                item = 0
            }else{
                item = 1
            }
            return item
        })
    })
};