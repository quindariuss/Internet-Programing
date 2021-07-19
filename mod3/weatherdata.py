import requests
import json





try:
	response = requests.get(
		url="http://api.openweathermap.org/data/2.5/weather",
		params={
			"zip": "30004",
			"appid": "11271fea6ea6149b516e57a7960ad03a",
		},
	)
	print('Response HTTP Status Code: {status_code}'.format(
		status_code=response.status_code))
	content = json.loads(response.content)
except requests.exceptions.RequestException:
	print('HTTP Request failed')

print("Name: ",content['name'])
print("Current Tempture: ",content['main']['temp'])
print("Atmospheric Pressure: ",content['main']['pressure'])
print("Wind Direction: ",content['wind']['deg'])
print("Time of Report: ",content['dt'])


