'''1) შექმენით ფუნქციოა სახელად filter_odd რომელსაც გადაეცემა ერთი არგუმენტი და ეს არის 
რიცხვების სია, თვქენი დავალებაა დააბრუნოთ ფუნქციიდან ახალი სია სადაც მხოლოდ იქნება ლუწი
 რიცხვები მოცემული (აგრეთვე ახსენით რა არის ფუნქცია, პარამეტრი, 
არგუყმენტი და რგორო უნდა გამოვიძახოთ ის)'''


def filter_odd(numbers):
    """

    
    :param numbers: 
    :return: 
    """
    
    return [num for num in numbers if num % 2 == 0]


numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered_list = filter_odd(numbers_list)
print(filtered_list)  