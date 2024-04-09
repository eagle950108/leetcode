class Solution:
    def isPalindrome(self, x: int) -> bool:
        list1 = []
        list2 = []
        if x < 0:
            return False
        else:
            while(x):
                num = x % 10
                x = (int)((x - num) / 10)
                list1.append(num)
            list2 = list1[::-1]
            if list1 == list2:
                return True
            else:
                return False
            