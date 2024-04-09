class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        result = 0
        for i in range(len(tickets)):
            
                
            if(tickets[i] < tickets[k]):
                result += tickets[i]
            else:
                if i > k:
                    result += tickets[k] - 1
                else:
                    result += tickets[k]
                    
        return result
            