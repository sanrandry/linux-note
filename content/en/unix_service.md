---
title: Unix service
description: "Unix service"
position: 3.4
category: "Debian"
---

## system boot
configuration file location: /etc/systemd/system/
use systemctl utilities to manipulate a service status
status of the service
```bash
sudo systemctl status servicename
```
start the service
```bash
sudo systemctl start servicename
```
stop the service
```bash
sudo systemctl stop servicename
```
restart the service
```bash
sudo systemctl restart servicename
```
start automatically the service on boot
```bash
sudo systemctl enamble|disable|is-enabled servicename
```
service log
```bash
sudo journalctl -u servicename
```
## remote login
install openssh-client and openssh-server

```bash
sudo apt-get install ssh
```
connection with password
```bash
ssh user@server_ip 
```
Key-based authentication
```bash
ssh-copy-id user@server_ip 
```
the key will be stored in ~/.ssh/authorize_keys file
if you want to remove, just remove it inside the authorize_keys file

## managing right
- owner (symbolise by u as user)
- owner goup (symbolise by g as group)
- other (symbolise by o as other)
- all (symolise by a as all)
r= read, w= write, x= execute
### commands control
chown: change the owner of the file
chgrp: alter the owner group
chmod: change the permissions for th file
explict change: =
```bash
chmod u=rwx test.txt
```
substracting: -
```bash
chmod o-x test.txt
```
adding: +
```bash
chmod u+r test.txt
```
### the octal numeric representation
4: read, 2: write, 1: execute
4+2+1= 7: read write execute
4+1= 5: read execute
4+2= 6: read write
0: no right
```bash
chmod 751 test.txt
```
### recursive mode
```bash
chomd -R a+x test.txt
```

## syslog system events
linux log directory: /var/log</br>
linux log configuration files: /etc/rsyslog.conf</br>
you can store the log in another machine 

