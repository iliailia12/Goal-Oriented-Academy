
'''3) შექმენით სია, სადაც გექნებათ 10-იდან 20-ის ჩათვლით რიცხვები. გაიხსენეთ ის'
 ფაქტი, რომ თქვენ შეგიძლიათ უკვე შექმნილი სიის ელემენტების შეცვლა - შეცვალეთ სიის
   ლუწ ინდექსებზე მყოფი ელემენტები და მათ მაგივრად დაწერეთ 1.'''


arr=[10,11,12,13,14,15,16,17,18,19,20]
for i in range(len(arr)):
    if i %2==0:
        arr[i]=1
print(arr)
        