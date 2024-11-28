'''4) შექმენით პროგრამა სადაც მომხმარებელს შეეკითხებით რამდენი რიცხვის
 შემოტანა სურს შემდეგ კი for ციკლის მეშვეობით იმდენჯერ შემოატანინეთ რიცხვი
   რამდენიც მიუთითა ამის შემდეგ ეს რიცხვები 
დაამატეთ სიაში და საბოლოოდ გამოიტანეთ ამ რიცხვების ჯამი'''

count = int(input("Please enter quantity of how many numbers you want to enter: "))

numbers = []

for i in range(count):
    num = int(input("Please enter number: "))
    numbers.append(num)

print(sum(numbers))