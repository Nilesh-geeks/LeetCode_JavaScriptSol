Question :: 1481. Least Number of Unique Integers after K Removals

Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

 
 
Solution::

Complexity::

Time complexity:
O(N) 

Space complexity:
O(N)

Code::

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let m = new Map();
    for(let a of arr)m.set(a , (m.get(a) || 0 )+1);

    let v = Array.from(m.values());
    let cnt =0 ;
     v.sort((a,b) => a-b);
     for(let i=0 ; i<v.length ; i++ ){
         if(k>v[i]){
             k-= v[i];
             v[i] =0;
         }
         else{
             v[i]-=k;
             k=0;
         }
         if(v[i]>0)cnt++;
     }
     return cnt;
};