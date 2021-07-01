
import sqlite3

# conn=sqlite3.connect('sqlite-sakila.sq') c=conn.cursor() sql="select * from actor" data=c.execute(sql)

conn= sqlite3.connect('sqlite-sakila.sq')

c=conn.cursor()

sql="select * from actor"

data = c.execute(sql)

for row in data:
    print(row)

    conn = sqlite3.connect('sqlite-sakila.sq')
    c = conn.cursor()
    sql = "select * from actor"
    data = c.execute(sql)

    for row in data:
        print(row)

    print("==" * 50)

    for row in data: print(row)