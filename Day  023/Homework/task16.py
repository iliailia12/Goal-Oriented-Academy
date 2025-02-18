'''16)შექმენით ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნეთ ეს სტრინგდი 
შებრუნებულ + დიდი ასოებით (reversed / upper). '''

def longest_string(strings_list):
    # გამოიყენეთ max ფუნქცია სიის ელემენტების სიგრძის მიხედვით
    return max(strings_list, key=len)

strings = ["apple", "banana", "cherry", "date"]
print(longest_string(strings))  # შედეგი იქნება 'banana'