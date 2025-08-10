'''15)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. შემდეგ გამოიყენეთ
 ციკლი, რათა განიხილოთ ამ სიის ყველა რიცხვი - თუ რიცხვი ლუწია, ახალ სიაში დაამატეთ
   მისი განაყოფი ორზე, ხოლო თუ კენტია, მაშინ რიცხვის ნამრავლი ორზე.
 საბოლოოდ დააბრუნეთ განახლებული სია/ '''


def process_numbers(numbers_list):
    # ახალი სიის შექმნა
    updated_list = []
    
    # Iterate over the list of numbers
    for number in numbers_list:
        if number % 2 == 0:
            # თუ რიცხვი ლუწია, დაამატეთ მისი განაყოფი ორზე
            updated_list.append(number // 2)
        else:
            # თუ რიცხვი კენტია, დაამატეთ მისი ნამრავლი ორზე
            updated_list.append(number * 2)
    
    return updated_list

