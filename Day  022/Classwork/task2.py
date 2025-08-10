'''2)შექმენით ფუნქცია manual_sum ჩვენი ფუნქცია მიირესბს ერთ მნიშვნელბას სიას.
 თქვენი დავალება არის გაიგოთ ამ სიის რიცხვთ
ა ჯამი გაიგოთ for ციკლის მეშვეობით'''

def manual_sum(number_list):
    sum=0

    for num in number_list:
        sum = sum + num
        
    return sum

print(manual_sum([1,2,3,4,5,6,7,8]))