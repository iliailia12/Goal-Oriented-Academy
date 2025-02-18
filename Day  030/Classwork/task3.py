'''3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი
 დავალებაა შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!,
 მიღებული ჯამი დააბრუნეთ ფუნქციიდან'''

def odd_index_sum(numbers):
    """
    

    :param numbers: 
    :return: 
    """
    
    total = sum(numbers[i] for i in range(len(numbers)) if i % 2 != 0)
    return total

numbers_list = [10, 20, 30, 40, 50, 60, 70, 80]
result = odd_index_sum(numbers_list)
print(result)  
