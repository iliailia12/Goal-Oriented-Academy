'''10) შექმენით ფუნქცია რომელსაც გადაეცემა ინტეჯერი და თუ ლუწია 
აბრუნებს True-ს ხოლო თუ კი კენტია აბრუნებს False'''

def is_even(num):
    
    return num % 2 == 0

print(is_even(4))  
print(is_even(7))  
print(is_even(0))  
print(is_even(-2)) 
print(is_even(-3)) 