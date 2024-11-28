'''13)შექმენით ფუნქცია, რომელიც დააბრუნებს მარტივია თუ არა რიცხვი 
(მარტივია რიცხვი, თუ მას მარტო ორი გამყოფი აქვს).'''

def is_prime(number):
    
    if number <= 1:
        return False
    
    
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    
    
    return True
print(is_prime(2))   
print(is_prime(17))   
print(is_prime(18))   
print(is_prime(1))    