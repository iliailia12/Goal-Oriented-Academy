'''7) შექმენით ფუნქცია  print_even_numbers რომელიც მიიღებს ერთ პარამეტრს n შემდეგ 
გამოიტანს 2 დან ამ რიცხვამდე 
ყველა ლუწ რიცხვს გამოიყენეთ for loop '''

def print_even_numbers(n):
    for i in range(2, n + 1):
        if i % 2 == 0:
            print(i)
print_even_numbers(50)            