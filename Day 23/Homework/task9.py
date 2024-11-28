'''9) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი. ამ ფუნქციის
 მეშვეობით უნდა დაითვალოთ თანხმოვნების რაოდენობა ამ სტრინგში.'''

def count_consonants(s):
    
    vowels = 'aeiouAEIOU'

    consonants = [char for char in s if char.isalpha() and char not in vowels]
    return len(consonants)

text = "Hello World!"
result = count_consonants(text)
print(result)  