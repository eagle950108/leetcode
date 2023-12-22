/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    var aryStr = s.split("");
    var maxCnt = 0;
    for(var i = 1;i < aryStr.length; i++) {
        var zeroCnt = aryStr.slice(0, i).filter(num => num === '0').length || 0;
        var oneCnt = aryStr.slice(i).filter(num => num === '1').length || 0;
        if((zeroCnt + oneCnt) > maxCnt) maxCnt = zeroCnt + oneCnt;
    }
    return maxCnt;
};