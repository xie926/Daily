/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true
  if (p == null || q == null) return false
  const queueP = [p], queueQ = [q]
  while (queueP.length && queueQ.length) {
    const nodeP = queueP.shift(), nodeQ = queueQ.shift()
    if (nodeP.val !== nodeQ.val) return false
    if (nodeP.left && nodeQ.left) {
      queueP.push(nodeP.left)
      queueQ.push(nodeQ.left)
    } else if (nodeP.left || nodeQ.left) {
      return false
    }

    if (nodeP.right && nodeQ.right) {
      queueP.push(nodeP.right)
      queueQ.push(nodeQ.right)
    } else if (nodeP.right || nodeQ.right) {
      return false
    }
  }

  return queueP.length === 0 && queueQ.length === 0

};