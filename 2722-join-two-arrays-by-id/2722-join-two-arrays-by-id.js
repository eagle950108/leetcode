/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const resultAry = []
    const obj1 = Object.fromEntries(arr1.map(val => [val.id, val]));
    const obj2 = Object.fromEntries(arr2.map(val => [val.id, val]));
    
    let tmpObj = {...obj1, ...obj2};

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    Object.keys(tmpObj).forEach((key) => {
     if (obj1[key] && obj2[key]) {
        resultAry.push({...obj1[key], ...obj2[key]});
      } else {
        resultAry.push(obj1[key] || obj2[key]);
      }
    });
    return resultAry;
};