'''9. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს
 ორივე list'იდან მინიმალური რიცხვების სხვაობას.'''

def min_difference(list1, list2):
    min1=min(list1)
    min2=min(list2)

    difference=abs(min1-min2)

    return difference

list1=[22,34, 66,]
list2=[39,44,55]
print(min_difference(list1, list2))