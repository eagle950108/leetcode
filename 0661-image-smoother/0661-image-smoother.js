/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let dx = [1,1,1,0,-1,-1,-1,0];
    let dy = [-1,0,1,1,1,0,-1,-1];
    let m = img.length;
    let n = img[0].length;
    let result = [];
    for(let i = 0 ; i < m ; i ++){
        result.push([]);
        for(let j = 0 ; j < n ; j ++){
            let s = img[i][j];
            let count = 1;
            for(let k = 0 ; k < 8 ; k ++){
                let wi = i + dx[k];
                let wj = j + dy[k];
                if(wi<0||wj<0||wi>=m||wj>=n) continue ;
                s += img[wi][wj];
                count ++;
            }
            result[i].push(Math.floor(s/count));
        }
    }
    return result;
};