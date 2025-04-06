'''11. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ყველა ელემენტის ჯამს.'''


def sum_of_elements(list):
    total = 0
    for num in list:
        total += num
    return total

print(sum_of_elements([1, 2, 3, 4, 5]))
print(sum_of_elements([-1, 5, 7, -3]))
print(sum_of_elements([]))