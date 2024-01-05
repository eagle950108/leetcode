/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const stack = [];
    
    for(var i = 0;i < nums.length; i++) {
        let isBig = false;
        for(var j = 0; j < stack.length; j++) {
            if(stack[j] >= nums[i]) {
                stack[j] = nums[i];
                isBig = true;
                break;
            }
        }
        if(!isBig) stack.push(nums[i]);
    }
    
    return stack.length;
};