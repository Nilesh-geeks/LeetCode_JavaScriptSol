Question :: 2108. Find First Palindromic String in the Array

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
Solution::

Complexity
Time complexity:
O(N*s) , s = length of max string
Space complexity:
O(1)
Code
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let word of words){
        if(word == word.split("").reverse().join(""))return word;
    }
    return "";
};