Question:: 2000. Reverse Prefix of Word

Given a 0 - indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch(inclusive).If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3(inclusive).The resulting string will be "dcbaefd".
Return the resulting string.
  Solution::

Complexity::
Time complexity:
O(N) 

Space complexity:
O(1)

Code::
var reversePrefix = function (word, ch) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      return word.substring(0, i + 1).split('').reverse().join('') + word.substring(i + 1);
    }
  }
  return word;
};