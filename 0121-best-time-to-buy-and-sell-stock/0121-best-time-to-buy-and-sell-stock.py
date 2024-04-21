class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        minPrice = prices[0]
        max_profit = 0
        for price in prices:
            if minPrice > price:
                minPrice = price
            if max_profit < price - minPrice:
                max_profit = price - minPrice
        
        return max_profit
    