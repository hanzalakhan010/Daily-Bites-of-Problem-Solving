# def longestConsecutive(nums):
#     count = 0
#     nums = sorted(nums)
#     for index in range(1,len(nums)):
#         if (nums[index-1]) + 1 == nums[index]:
#             count +=1
#         print(nums[index])
#     return count

# print(longestConsecutive([1,2,3,4]))


# def longestConsecutive(nums):
#     if not nums:
#         return 0
#     nums = sorted(nums)
#     max_len, curr_len = 1, 1
#     for index in range(len(nums)-1):
#         if (nums[index] == nums[index+1]):
#             continue
#         elif (nums[index]+1 == nums[index+1]):
#             curr_len += 1
#         else:
#             curr_len = 1
#         max_len = max(max_len, curr_len)
#     return max_len
#     # print(nums[index])


# print(longestConsecutive([1, 2, 3, 4]))


def longestConsecutive(nums):
    nums = set(nums)
    max_len = 1
    for num in nums:
        if num - 1 not in nums:
            current = num
            curr_len = 1
            while current + 1 in nums:
                curr_len += 1
                current += 1
            max_len = max(max_len, curr_len)
    return max_len


print(longestConsecutive([1, 2, 3, 4]))
