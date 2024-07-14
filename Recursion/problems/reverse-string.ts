//https://leetcode.com/problems/reverse-string/

function reverseString( s: string[]) {
    reverse(s, 0, s.length - 1);
}

function reverse(s, start, end) {
    if (start > end) return;

    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    reverse(s, start + 1, end - 1);
}