'''10. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ამ 
სიაში მაქსიმალური და მინიმალური რიცხვების სხვაობას.'''

def difference_max_min(nums):
    if not nums:
        return None
    
    max_num = max(nums)
    min_num = max(nums)

    difference = max_num-min_num

    return difference

nums1 = [3, 6, 2, 9]
nums2 = [6, 1, 9, 4, 10]
nums3 = [-10, 0, 20, -30]

print(difference_max_min(nums1))
print(difference_max_min(nums2))
print(difference_max_min(nums3))