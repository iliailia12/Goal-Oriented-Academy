'''6) შექმენით ფუნქცია print_numbers რომელიც მიიღებს n მნიშვნელობას და გამოიტანს 1 დან ამ n 
რიცხვამდე ყველა რიცხვს for loop ის გამოყენებით '''

def print_numbers(n):
    for num in n:
        if num % 2 == 0:
            print('even:', num)
        else:
            print('odd:',num)

print_numbers([1,2,3,4,5,6,7,8,9,10]) 