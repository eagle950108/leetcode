/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    // Use a Set to store unique elements
    let aryElmCnts = {};
    var result = 0;
      // Loop through the array
      for (let i = 0; i < nums.length; i++) {
        let element = nums[i];

        if (!aryElmCnts[element]) {
          aryElmCnts[element] = 1;
        } else {
          aryElmCnts[element]++;
        }
      }
    Object.keys(aryElmCnts).every(key => {
        var cnt = aryElmCnts[key];
        if(cnt === 1) {
            result = -1;
            return false;
        }
        
        if(cnt % 3 === 0) {
            result += cnt / 3;
            return true;
        } else {
            for (var i = 0; i <= cnt; i += 2) {
                if(cnt - i === 0) {
                    result += cnt / 2;
                    return true;
                }
                // Check if the remaining part is divisible by 3
                if ((cnt - i) % 3 === 0) {
                    result += i / 2;
                    result += (cnt -i) / 3;
                    return true;
                }
            }
            result = -1;
            return false;
        }
    })
    return result;
};