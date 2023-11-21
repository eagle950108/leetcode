/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const MOD = 1000000007;
    let count = 0;
    const diffFreq = {}; // Object to store frequencies of differences

    for (const num of nums) {
        // Calculate the difference and update the count
        const diff = num - reverse(num);
        count = (count + (diffFreq[diff] || 0)) % MOD;
        diffFreq[diff] = (diffFreq[diff] || 0) + 1;
    }

    return count;
};

function reverse(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}