'''8) შექმენით ფუნქცია რომელსაც გადაეცემა რაიმე სტრინგი. ამ ფუნქციამ 
უნდა შეძლოს და თითოეული ასო შეცვალოს
 (პატარა ასო დიდი ასოთ a-A ხოლო დიდი ასო პატარათი A-a)'''

def swap_case(s):
    return s.swapcase()

text = "Hello World!"
result = swap_case(text)
print(result)  