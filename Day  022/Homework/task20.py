'''20. შექმენით ფუნქცია, რომელიც იღებს integer'ების სიას და აბრუნებს მათ საშუალო არითმეტიკულს.
(მაგალითად: input: [1, 5, 12]. output: (1 + 5 + 12)/3, ანუ 6.) (ელემენტების 
დასათვლელად გამოიყენეთ ფუნქცია len).'''


def arithmetic_mean(numbers):
    if not numbers:
        return 0

    total_sum = sum(numbers)

    num_elements = len(numbers)

    mean = total_sum / num_elements

    return mean

input_list = [1, 5, 12]
result = arithmetic_mean(input_list)
print(f"Arithmetic mean of {input_list}: {result}")