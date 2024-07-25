'''6. შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.'''


def longest_string(list):
    len_list = []
    for string in list:
        len_list.append(len(string))
    
    for i in range (len(list)):
        if len_list[i] == max(len_list):
            return list[i]

print(longest_string(['kviciani','ilia','gio']))
