'''6) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები რაღაც 
თანმიმდევრობით. ფუნქციამ უნდა შეძლოს და ეს სტრინგების და ინტეჯერების
 თანმიმდევრობა უნდა გამოიტანოს შებრუნებულად.'''

def reverse_sequence(*args):
    
    reversed_list = list(reversed(args))
    return reversed_list
result = reverse_sequence("apple", 42, "banana", 100)
print(result)  
