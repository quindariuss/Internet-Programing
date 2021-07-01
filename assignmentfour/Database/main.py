from db import do_command

customers = do_command("select ID, name, address from customer_list")
customerrentals = do_command("select distinct customer_id from rental")


for row in customers:
    print(row)

# for row in customerrentals:
#     print(row)