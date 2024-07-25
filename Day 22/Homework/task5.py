'''.5 შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის 
არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და 
მარჯვნიდანაც მაგალითად: "wow") და სხვა შემთხვევაში False-ს.'''



def palindrom_check(strng):
    if strng==strng[::-1]:
        return True
    else:
        return False
    
print(palindrom_check('mom'))
print(palindrom_check('iliolen'))
