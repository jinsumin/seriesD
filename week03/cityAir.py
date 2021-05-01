import pprint

import requests

# HTTP GET request

response = requests.get(
    'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99'
)

result = response.json()
# print(result)
data = result['RealtimeCityAir']['row']

