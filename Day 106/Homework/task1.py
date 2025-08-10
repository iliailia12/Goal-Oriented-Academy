def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True   
            else:
                return False  
        else:
            return True  
    else:
        return False   
 
year = 2000
print(f"{year} is a leap year: {is_leap_year(year)}")  

year = 2100
print(f"{year} is a leap year: {is_leap_year(year)}")   