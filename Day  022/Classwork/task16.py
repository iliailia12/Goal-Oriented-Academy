'''16. დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს და ითვლის ხმოვანთა რაოდენობას (a, e, i, o, u) სტრიქონში.'''

def count_vowels(s):
    
    vowels = "aeiou"

    
    count = 0
    
    
    for char in s.lower():  
        if char in vowels:
            count += 1
            
    return count


text = "Hello, World!"
print(f" {count_vowels(text)}")
