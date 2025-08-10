'''18. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და 
აბრუნებს მათ უდიდეს საერთო გამყოფს (GCD-Greatest common divisor).'''

def gcd(a, b):
    while b != 0:
        a, b = b, a  % b
    return abs(a)    


print(gcd(1, 2))
print(gcd(3, 5))
print(gcd(9, 7))