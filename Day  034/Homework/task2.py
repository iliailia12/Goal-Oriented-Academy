'''2) განიხილეთ და კომენტარებით ახსენით როგორ მუშაობს გაკვეთილზე დაწერილი კოდი: 

def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))'''



def find_short(s):
    # სტრიქონი გაყოფილია სიტყვებზე და შეიქმნა სია, რომელიც შეიცავს ყველა სიტყვას
    list1 = s.split(" ")

    # პირველ სიტყვას აღენიშნება მისი სიგრძე (ამ მომენტისთვის ეს არის ყველაზე მოკლე სიგრძე)
    word_len = len(list1[0])

    # თითოეული სიტყვის სიგრძის შემოწმება
    for i in list1:
        # თუ სიტყვის სიგრძე ნაკლებია იმაზე, რაც ამ მომენტისთვის აღინიშნება, განაახლეთ word_len
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

# ფუნქციის გაწვდვა და შედეგის გამოტანა
print(find_short(""))

