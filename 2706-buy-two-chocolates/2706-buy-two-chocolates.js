/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    if(prices.length < 2) return money;
    prices.sort((a, b) => a - b);    
    var minPrices = prices[0] + prices[1];

    if(minPrices <= money) {
        return money - minPrices;
    }
    return money;
};