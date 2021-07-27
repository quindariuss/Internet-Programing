import sqlite3

connection = sqlite3.connect('courses.sq')

cursor = connection.cursor()

select_above_90 = 'select * from grade where score > 90'

id = input()
password=input()
try :
	result = cursor.execute(select_above_90)
	for row in result:
		print(row)
		except:
		print ("Error")