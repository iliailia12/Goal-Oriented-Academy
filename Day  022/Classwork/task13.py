'''13. დაწერეთ პითონის ფუნქცია, რომელიც ითვლის მართკუთხედის ფართობს მისი
 სიგრძისა და სიგანის პარამეტრების მიხედვით.'''

def rectangle_area(length,width):
    area=length * width
    return area
length=5
width=30
area = rectangle_area(length, width)

print(area)
