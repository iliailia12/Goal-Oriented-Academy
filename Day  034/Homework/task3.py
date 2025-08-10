'''3) იმუშავეთ split-ის გამოყენებაზე: შექმენით 10 string და თითოეულზე გამოიყენეთ split ბრძანება, მოახდინეთ გახლეჩვა ნებისმიერი სიმბოლოთი'''


s1 = "apple banana cherry date"
result1 = s1.split(" ")
print(result1)  # ['apple', 'banana', 'cherry', 'date']

s2 = "one,two,three,four"
result2 = s2.split(",")
print(result2)  # ['one', 'two', 'three', 'four']

s3 = "www.example.com.page1"
result3 = s3.split(".")
print(result3)  # ['www', 'example', 'com', 'page1']

s4 = "home/user/documents/file.txt"
result4 = s4.split("/")
print(result4)  # ['home', 'user', 'documents', 'file.txt']

s5 = "one;two;three;four"
result5 = s5.split(";")
print(result5)  # ['one', 'two', 'three', 'four']

s6 = "2024-07-30"
result6 = s6.split("-")
print(result6)  # ['2024', '07', '30']

s7 = "a|b|c|d"
result7 = s7.split("|")
print(result7)  # ['a', 'b', 'c', 'd']


s8 = "word1|word2|word3"
result8 = s8.split("|")
print(result8)  # ['word1', 'word2', 'word3']


s9 = "key:value:key2:value2"
result9 = s9.split(":")
print(result9)  # ['key', 'value', 'key2', 'value2']

s10 = "start..middle..end"
result10 = s10.split("..")
print(result10)  # ['start', 'middle', 'end']

