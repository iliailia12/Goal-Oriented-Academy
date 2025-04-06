# Tuple Destructuring არის ტექნიკა, რომელიც საშუალებას გაწვდოს tuple-ის ელემენტები ცვლადებში ერთდროულად. ეს განსაკუთრებით სასარგებლოა,
#  როდესაც გვინდა, რომ tuple-ის ელემენტები ცალკე ცვლადებად გამოვიყენოთ, რაც კოდის readability-ს ზრდის.

# 1)
point = (10, 20)

# Destructuring
x, y = point

print(f"x: {x}, y: {y}")





#2
person = ("ilia", 14, "gaoas moswavle")

# Destructuring
name, age, profession = person

print(f"Name: {name}, Age: {age}, Profession: {profession}")