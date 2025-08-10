'''5) შექმენით სია სადაც შეიტანთ თქვენი საყვარელი მანქანების სახელებს მინიმუმ 5
 ელემეტნი. გამოიყენეთ სლაისინგი რომ ჩამოაჭრათ 1) პირველი 3 ელემენტი და 2) ბოლო
   ორი ელემენტი საბოლოოდ კი დაბეჭდეთ ჩამოჭრილი სიები. ამის შემდეგ მინუსებიანი
 ინდექსებით გამოიტანეთ მარჯვნიდან
 მესამე და მეოთხე ელემენტები'''


car_names = ["Tesla Model S", "BMW M3", "Audi A4", "Porsche 911", "Mercedes-Benz S-Class"]
first_three = car_names[:3]
last_two = car_names[-2:]
print("First 3 elements:", first_three)
print("Last 2 elements:", last_two)
third_from_right = car_names[-3]
fourth_from_right = car_names[-4]
print("Third element from the right:", third_from_right)
print("Fourth element from the right:", fourth_from_right)

