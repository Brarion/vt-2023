function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    const xStr = x.toString();
    const reversedStr = xStr.split('').reverse().join('');

    return xStr === reversedStr;
}
