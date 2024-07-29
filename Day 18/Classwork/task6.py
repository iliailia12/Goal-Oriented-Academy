'''6) შექმენით სია სადაც გექნებათ თქვენი სახელი გამეორებული ორჯერ. როცა გადაუვლით
 სიას თუკი სახელი უდრის თქვენს სახელს დაწერეთ hello admin 
სხვა შემთხვევაში დაწერეთ hello user'''

def greet_user(name):
    names_list = [name, name]

    for name_in_list in names_list:
        if name_in_list == name:
            print("hello admin")
        else:
            print("hello user")

my_name = "John"

greet_user(my_name)