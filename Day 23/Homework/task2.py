'''2) შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი. ამ ფუნქციამ პირველ რიცხვს მანამ
უნდა დაუმატოს მეორე რიცხვი სანამ ჯამი
არ გახდება 100ის ტოლი ან 100ზე მეტი.'''

def add_until_100(a, b):

    while a < 100:
        a += b
    return a
result = add_until_100(45, 15)
print(result)  