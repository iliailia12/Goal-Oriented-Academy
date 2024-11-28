'''17. განსაზღვრეთ ფუნქცია, რომელიც იღებს სტრიქონების ჩამონათვალს და აბრუნებს ახალ სიას ყველა სტრიქონის დიდი ასოებით. '''


def convert_to_uppercase(strings_list):

    return [s.upper() for s in strings_list]


example_list = ["hello", "world", "python", "is", "awesome"]
uppercase_list = convert_to_uppercase(example_list)
print(uppercase_list)