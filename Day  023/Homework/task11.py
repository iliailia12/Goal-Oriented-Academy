'''11)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია.
 თქვენი დავალებაა, რომ ამ სიის ლუწ ინდექსებზე მყოფი რიცხვების ჯამი დააბრუნოთ. აუცილებლად 
გამოიყენეთ return ამ და ასევე შემდეგ დავალებებში.'''

def sum_even_indexed_numbers(numbers):
    
    total_sum = 0

   
    for index, number in enumerate(numbers):
        
        if index % 2 == 0:
            total_sum += number
    
    
    return total_sum

numbers = [10, 20, 30, 40, 50]
print(sum_even_indexed_numbers(numbers))  