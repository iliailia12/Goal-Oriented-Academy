'''3) შექმენით პროგრამა სადაც მომხმარებელი შემოიტანს ორ რიცხვს საწყისი რიცხვი და
 ბოლო რიცხვი, გამოიანგარიშეთ ამ რიცხვებს შორის ყველა რიცხვი და დაამატეთ სიაში, 
 საბოლოოდ დაბეჭდეთ ამ სიიდან მაქსიმალური, 
მინიმალური და ყველა რიცხვის ჯამის მნიშნელობები'''

list=[]
num1=int(input('please enter your number: '))
num2=int(input('please enter your number'))
for num in range(num1,num2):
    list. append(num)
print(min(list))
print(max(list))
print(sum(list))