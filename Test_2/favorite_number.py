import json
number = int(input("What's your favourite number? "))
with open("numbers.json", 'w') as document:
	json.dump(number,document)

with open("numbers.json") as document:
	number_ = json.load(document)

print("I know your favourite number! It's " + str(number_))