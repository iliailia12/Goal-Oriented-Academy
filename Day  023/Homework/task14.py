'''14)შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. თქვენი დავალებაა
, რომ დააბრუნოთ ამ სიის განახლებული
 ვერსია, სადაც ყველა სახელი დიდი ასოთი დაიწყება.'''

def capitalize_names(names_list):

    updated_names = [name.capitalize() for name in names_list]
    return updated_names
names = ["john", "alice", "bob"]


def capitalize_names(names_list):

    updated_names = [name.upper() for name in names_list]
    return updated_names