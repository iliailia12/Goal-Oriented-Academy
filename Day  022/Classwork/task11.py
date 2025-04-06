'''2)შექმენით ფუნქცია manual_sum ჩვენი ფუნქცია მიირესბს ერთ მნიშვნელბას სიას. თქვენი დავალება არის
 გაიგოთ ამ სიის რიცხვთა ჯამი გაიგოთ for ციკლის მეშვეობით'''

def manual_sum(numbers):
    total_sum = 0

    for number in numbers:
        total_sum += number
        return total_sum
my_list = [1,2,3,4,5]

result=manual_sum(my_list)
print(result)


  