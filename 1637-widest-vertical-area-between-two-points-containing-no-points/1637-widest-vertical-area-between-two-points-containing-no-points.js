/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    // var xNums = [];
    var result = 0;
    // for(var i = 0; i < points.length; i++) {
    //     xNums.push(points[i][0]);
    // }
    points.sort((a,b) => a[0] - b[0]);
    
    for(var i = 1; i < points.length; i++) {
        const diff = points[i][0] - points[i - 1][0];
        if(diff > result) result = diff;
    }
    return result;
};