'''4) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. ფუნქციამ უნდა იპოვოს ლისტში უდიდესი რიცხვი.'''


def find_max_number(lst):
    
    if not lst:
        return 'List is empty'
    
    return max(lst)

numbers = [3, 1, 4, 1, 5, 9, 2]
print(find_max_number(numbers))  
def find_max_number(lst):

    if not lst:
        return 'List is empty'
    
    
    if not all(isinstance(x, (int, float)) for x in lst):
        return 'List must contain only numbers'
    return max(lst)
