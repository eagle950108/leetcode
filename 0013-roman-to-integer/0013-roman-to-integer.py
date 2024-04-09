class Solution:
    def romanToInt(self, s: str) -> int:
        roman_value = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
        }
        i = 0
        sum = 0
        while i < len(s):
            if i + 1 < len(s) and s[i:i + 2] in ["IV", "IX", "XL", "XC", "CD", "CM"]:
                sum += roman_value[s[i + 1]]
                sum -= roman_value[s[i]]
                i += 2
            else:
                sum += roman_value[s[i]]
                i += 1
        return sum