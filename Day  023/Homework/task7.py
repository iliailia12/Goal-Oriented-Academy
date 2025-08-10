'''7) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგების ლისტი. ამ ფუნქციამ უნდა იპოვოს
 ყველაზე გრძელი და ყველაზე მოკლე სტრინგები ამ ლისტში.'''

def find_longest_and_shortest(strings):
    
    if not strings:
        return 'List is empty'

    longest = max(strings, key=len)
    shortest = min(strings, key=len)
    
    return longest, shortest
strings = ["apple", "banana", "kiwi", "pineapple"]
longest, shortest = find_longest_and_shortest(strings)
print(f"Longest string: {longest}")  
print(f"Shortest string: {shortest}")  

