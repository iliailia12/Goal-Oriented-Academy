'''5) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. ფუნქციამ უნდა იპოვოს ამ ლისტში შემავალი რიცხვების ჯამი'''


def sum_of_numbers(lst):

    if not all(isinstance(x, (int, float)) for x in lst):
        return 'List must contain only numbers'

    return sum(lst)

numbers = [1, 2, 3, 4, 5]
print(sum_of_numbers(numbers))  

mixed_list = [1, 2, 'three', 4]
print(sum_of_numbers(mixed_list))
def sum_of_numbers(lst):
    return sum(lst)

