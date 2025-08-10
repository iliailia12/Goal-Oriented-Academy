'''17. შექმენით ფუნქცია, რომელიც იღებს მთელი რიცხვების სიას და აბრუნებს სიაში ყველაზე მცირე რიცხვს.'''

def find_smallest_number(list):
    if not list:
        return None
    
    smallest = list[0]
    for num in list[1:]:
        if num < smallest:
            smallest = num
    return smallest        
        
print(find_smallest_number([4, 2, 7, 1, 5]))
print(find_smallest_number([-1, -5, -3, -7]))
print(find_smallest_number([10]))