'''4. შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და აბრუნებს ამ string'ების სიგრძეების
list'ს (გამოიყენეთ ფუნქცია len()).'''



def lengths_convert(list):
    res=[]
    for string in list:
        res.append(len(string))

    return res

print(lengths_convert(['ilo','lexuxi','futball', 'luka']))

