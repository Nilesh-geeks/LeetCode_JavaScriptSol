Question:: 349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection.Each element in the result must be unique and you may return the result in any order.



  Solution::

Complexity::

Time complexity:
O(N) 

Space complexity:
O(N)

Code::

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const mp = {}
  for (let x of nums1) {
    mp[x] = (mp[x] || 0) + 1
  }

  const res = []
  for (let x of nums2) {
    if (mp[x]) {
      res.push(x);
      delete (mp[x])
    }
  }
  return res;
};