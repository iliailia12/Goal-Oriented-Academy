'''7. შექმენით ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის factorial'ს (რა არის ფაქტორიალი: 
https://en.wikipedia.org/wiki/Factorial).'''


def factorial(num):
    product = 1
    for i in range(1, num + 1):
        product = product * i

    return product

print(factorial(6))
