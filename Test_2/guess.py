
import random
n = random.randint(1, 10)
guess = int(input("Enter an integer from 1 to 10: "))

while n != "guess":
	print
	if guess < n:
		print ("guess is low")
		guess = int(input("Enter an integer from 1 to 10: "))
	elif guess > n:
		print ("guess is high")
		guess = int(input("Enter an integer from 1 to 10: "))
	else:
		print( "you guessed it!")
		break
