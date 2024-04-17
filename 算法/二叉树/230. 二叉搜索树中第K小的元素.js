// 230. 二叉搜索树中第K小的元素
// 提示
// 中等
// 800
// 相关企业

// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

 

// 示例 1：

// 输入：root = [3,1,4,null,2], k = 1
// 输出：1

// 示例 2：

// 输入：root = [5,3,6,2,4,null,null,1], k = 3
// 输出：3

 

 

// 提示：

//     树中的节点数为 n 。
//     1 <= k <= n <= 104
//     0 <= Node.val <= 104

 

// 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const list = inorder(root)
  return list[k - 1]
};

function inorder (root) {
  let res = []
  let stack = []
  while (root || stack.length) {
    while (root.left) {
      stack.push(root.left)
      root = root.left
    }

    const node = stack.pop()
    res.push(node.val)
    root = node.right
  }
  return res
}