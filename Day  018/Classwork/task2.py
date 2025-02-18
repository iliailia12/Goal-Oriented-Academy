'''2) შექმენით ისეთ პროგრამა რომელიც მომხმარებელს შემოატანინებს 2 რიცხვს.
 შემოტანის შემდეგ for loop ის მეშვეობით გამოთვალეთ ყველა რიცხვი ამ ორ რიცხვს შორის და შემდეგ ისიდი
 ჩაამატეთ ლისტში საბოოლოოდ კი დაპრინტეთ ტერმინალში'''



num1=int(input('please enter your number: '))
num2=int(input('please enter your number: '))
list=[]
for num in range(num1,num2):
    list.append(num)
print(list)