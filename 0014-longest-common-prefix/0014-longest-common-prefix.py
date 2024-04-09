class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        
        first_str = strs[0]
        last_str = strs[-1]
        
        i = 0
        while i < len(first_str) and first_str[i] == last_str[i]:
            i += 1
        
        return first_str[:i]