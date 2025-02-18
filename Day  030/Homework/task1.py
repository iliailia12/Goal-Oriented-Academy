'''3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი დავალებაა 
შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!,
 მიღებული ჯამი დააბრუნეთ ფუნქციიდან'''

def odd_imdex_sum(numbers):
    sum_of_even = 0

    for number in numbers:
        if number % 2 == 0:
            sum_of_even = sum_of_even + number

    return sum_of_even


result = odd_imdex_sum([1,2,3,4,5,6,7,8,9,10])

print(result)
