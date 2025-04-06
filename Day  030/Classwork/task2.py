'''2) შექმენით ფუნქცია სახელად even_sum, რომელსაც გადასცემთ რიცხვების სია,
 თქვენი დავალებაა ამ სიაში შეკრიბოთ ლუწი
 რიცხზვები და მიღებული ჯამი დააბრუნოთ ფუნქციიდან'''



def even_sum(numbers):
    """
    
    """
    
    total = sum(num for num in numbers if num % 2 == 0)
    return total


numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = even_sum(numbers_list)
print(result)  