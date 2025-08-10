'''7)მომხმარებელს input-ის გამოყენებით შემოატანინეთ ორი რიცხვი. შემდეგ
შეამოწმეთ რომელია უდიდესი და გამოიყენეთ for ციკლი: 
უმცირესიდან უდიდესამდე დაპრინტეთ ყველა რიცხვი'''


num1=int(input('enter your first number: '))
num2=int(input('enter your second number: '))
if num1<num2:
    for num in range(num1,num2):
        print(num)
else:
    for num in range(num2,num1):
        print(num)