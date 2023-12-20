/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    if(prices.length < 2) return money;
    prices.sort((a, b) => a - b);    

    if((prices[0] + prices[1]) <= money) {
        return money - (prices[0] + prices[1]);
    }
    return money;
};