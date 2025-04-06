'''12. შექმენით ფუნქცია, რომელიც იღებს string'ს და
 აბრუნებს ხმოვანი ასოების რაოდენობას string'ში.'''

def count_vowels(s):
    vowels = 'abcdefghijKLMN'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count 

print(count_vowels('hello world'))
print(count_vowels('goa best'))
print(count_vowels('programming'))