from db import do_command

customers = do_command("select ID, name, address from customer_list")
customerrentals = do_command("select rental.rental_id, ID, name, address from customer_list inner join rental on rental.customer_id=ID")


# for row in customers:
#     print(row)

for row in customerrentals:
    print(row)