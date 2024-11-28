def feast(beast, dish):
    beast_first_and_last = beast[0] + beast[-1]
    dish_first_and_last = dish[0] + dish[-1]
    return beast_first_and_last == dish_first_and_last

def feast(beast, dish):
    return beast[0] + beast[-1] == dish[0] + dish[-1]