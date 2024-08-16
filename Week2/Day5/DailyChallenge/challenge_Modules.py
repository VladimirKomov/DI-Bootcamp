import time

import requests


def get_time_request(url: str) -> float:
    start = time.time()
    respose = requests.get(url)
    end = time.time()

    return end - start

sites = [
    "https://www.google.com",
    "https://www.ynet.co.il",
    "https://www.imdb.com",
    "https://www.wikipedia.org"
]

for site in sites:
    time_request = get_time_request(site)
    print(f'{site} : {time_request}')