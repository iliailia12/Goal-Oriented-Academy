'''5) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. თქვენი დავალებაა ამ
 ლისტიდან ამოიღიოთ ყველა ციფრი 
და დაახარისხოთ ისინი კენტებად და ლუწებად'''

def manual_max(num1 , num2):
    if num1>num2: 
        return num1
    elif num1<num2:
        return num2
    else:
        return 'both number is eqvale'
print(manual_max(6 , 8))