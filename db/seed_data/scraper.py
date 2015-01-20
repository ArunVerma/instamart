# coding: utf-8
import requests
import json
import time
# from pandas import *
from bs4 import BeautifulSoup

dat = read_csv('scraper.csv', index_col=0)
credentials = {'email':'', 'password':''}
login_resp = sesh.post('https://www.instacart.com/accounts/login', data=credentials)

sesh = requests.Session()
target_url = "https://www.instacart.com/store/whole-foods/departments/82/aisles/513"
bsoup = BeautifulSoup(sesh.get(target_url).content)
matches = bsoup.find_all(class_='item')
