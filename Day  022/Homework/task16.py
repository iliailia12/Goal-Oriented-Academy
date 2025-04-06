'''16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს.'''

def longest_string(list):
    result = ''
    for i in list:
        if len(i) > len(result):
            result = i
    return result

print(longest_string(['pencil','pen','beckraund color']))       