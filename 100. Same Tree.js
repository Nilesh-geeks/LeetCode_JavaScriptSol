Question ::100. Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 
Solution::

Complexity::

Time complexity:
O(N) 

Space complexity:
O(1)

Code::

var isSameTree = function(p, q) {
  if(!p && !q)return 1;
  if(!p || !q)return 0;
  return p.val == q.val && isSameTree(p.left , q.left) && isSameTree(p.right , q.right);  
};