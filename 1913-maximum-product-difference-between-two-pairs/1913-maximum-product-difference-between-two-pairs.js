/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a);
    const length = nums.length;
    return nums[0] * nums[1] - nums[length - 2] * nums[length - 1]
};