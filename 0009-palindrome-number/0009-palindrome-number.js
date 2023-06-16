/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strX = x + '';
    if(strX === strX.split('').reverse().join('')) return true;
    return false;
};