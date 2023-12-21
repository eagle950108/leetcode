/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    var xNums = [];
    var result = 0;
    for(var i = 0; i < points.length; i++) {
        xNums.push(points[i][0]);
    }
    xNums.sort((a,b) => a - b);
    for(var i = 1; i < xNums.length; i++) {
        const diff = xNums[i] - xNums[i - 1];
        if(diff > result) result = diff;
    }
    return result;
};