from datetime import datetime
import socket
address = ("localhost", 3001)
max_size = 1024
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(address)
server.listen(5)
client, addr = server.accept()
data = client.recv(max_size)
print("At", datetime.now(), client, "said", data)
client.sendall("Are you talking to me?")
client.close()
server.close()
