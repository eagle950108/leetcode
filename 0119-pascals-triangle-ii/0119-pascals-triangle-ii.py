class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        num = []
        
        for i in range(rowIndex + 1):
            row = [1] * (i + 1)
            for j in range(1, i):
                row[j] = num[i - 1][j - 1] + num[i - 1][j]
            num.append(row)
        
        return row
            
            