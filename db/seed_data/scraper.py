# coding: utf-8
import requests
import json
import time
# from pandas import *
from bs4 import BeautifulSoup

dat = read_csv('scraper.csv', index_col=0)
credentials = {'email':'tradecraft9@gmail.com', 'password':'asdf1234'}
login_resp = sesh.post('https://www.instacart.com/accounts/login', data=credentials)

sesh = requests.Session()
target_url = "https://www.instacart.com/store/whole-foods/departments/82/aisles/513"
bsoup = BeautifulSoup(sesh.get(target_url).content)
matches = bsoup.find_all(class_='item')

for match in matches:
    if count == 0:
        break
    username = str(match.string)
    if len(dat.stage[dat.username == username]) != 0:
        print '[ ] ' + username
        continue
    else:
        msg_data = {'ajax':1, 'sendmsg':1, 'r1':username, 'body':body, 'authcode':auth}
        send_msg = sesh.get('http://www.okcupid.com/mailbox', params=msg_data)
        if json.loads(send_msg.content)['status'] == 3:
            print '[X] ' + username
            count -= 1
            dat = dat.append({'username':username, 'stage':1, 'fm_me':cur_time, 'to_me':'', 'location':'NY'}, ignore_index=True)
            dat.to_csv('users.csv')
        else:
            print '[!] ' + username
            continue
