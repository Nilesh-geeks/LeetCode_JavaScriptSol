Question:: 3005. Count Elements With Maximum Frequency

You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
  Solution::

Complexity::

Time complexity:
O(N) 

Space complexity:
O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let cnt = 0
  let maxi = 0
  let map = new Map();
  for (let i of nums) {
    map.set(i, (map.get(i) || 0) + 1)
  }
  for (let f of map.values()) {
    maxi = Math.max(maxi, f);
  }
  for (let f of map.values()) {
    if (f === maxi) cnt += f;
  }
  return cnt
};