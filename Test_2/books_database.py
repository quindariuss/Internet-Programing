import sqlite3

connection = sqlite3.connect('books.db')

cursor = connection.cursor()

cursor.execute('''CREATE TABLE books(title TEXT, author TEXT, , year INT''')

select_title_alpha = 'select * from books order by title'
select_publication_alpha = 'select * from books order by author'

try :
	result = cursor.execute(select_title_alpha)
	for row in result:
		print(row)
		except:
		print ("Error")

try :
	result = cursor.execute(select_publication_alpha)
	for row in result:
		print(row)
		except:
		print ("Error")