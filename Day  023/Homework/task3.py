'''3) შექმენით ფუნქცია რომელიც ამოწმებს რიცხვი კენტია თუ ლუწი.'''

def check_odd_or_even(num):
    # ამოწმებს არის თუ არა რიცხვი ლუწი თუ კენტია
    if num % 2 == 0:
        return 'Even'
    else:
        return 'Odd'
print(check_odd_or_even(4))  # 'Even'
print(check_odd_or_even(7))  # 'Odd'
def is_even(num):
    return num % 2 == 0
print(is_even(4))  # True
print(is_even(7))  # False
