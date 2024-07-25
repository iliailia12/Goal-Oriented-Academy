'''8. შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს
 ორივე list'იდან მაქსიმალური რიცხვების ჯამს.'''

def max_sum(list1,list2):
    return max(list1)+max(list2)

print(max_sum([1,5,9,4,7,6,2],[1,2,3,4,5,6,7,8]))