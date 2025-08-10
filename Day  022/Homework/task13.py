'''13. შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ახალ
 list'ს თითოეული integer'ის კვადრატით. 
(მაგალითად: input: [2, 4]. output: [4, 16]'''

def square_list(lst):
    quared_list = []
    for num in lst:
        quared_list.append(num ** 2)
    return square_list

print(square_list([2, 4]))
print(square_list([-1, 0, 1]))
print(square_list([5, 10, 15]))