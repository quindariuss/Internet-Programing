get_odds = (num for num in range(10) if not num % 2 == 0)
count = 0
for num in get_odds:
	if count == 2:
		print(num)
		break
	count += 1