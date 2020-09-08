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

## Scheduling task with cron and atd
cron: responsible for executing scheduled and recurring commands(every day, every week, etc...).</br>
atd: deals with commands to be executed a single time, but at a specific moment in the future.</br>
Each user has thus their own crontab. </br>
it can edited by running:
```bash
crontab -e
```
its content is stored in the /var/spool/cron/crontabs/user file</br>
to allow and deny a user to access to cron create and 
edit /etc/cron.allow or /etc/cron.deny, by default all user is allowed to access cron.</br>
the root user has their own crontab, but can also use the /etc/crontab file,  or write addtional crontab files in the /etc/cron.d directory. these last two solutions have the advantage of being able to specify the user identity to use when executing the command
### format of a crontab file
text shortcuts for cron: </br>
@yearly: once per year(january 1, at 00:00)</br>
@monthly: once per month(the 1st of the month, at 00:00)</br>
@weekly: once per week (Sunday at 00:00)</br>
@dayly: once per day (at 00:00)</br>
@hourly: once per hour (at the beginning of each hour)
### sample crontab file
```bash
#Format
#min hour day dow command
#Download data every night at 7:25 pm
25	19	*	*	$HOME/bin/get.pl
# 8:00 am, on weekdays (Monday through Friday)
00	08	*	* 	1-5	$HOME/bin/dosomething
# Restart the IRC proxy after each reboot
@reboot /usr/bin/dircproxy
```
### Using the at command
```bash
at 09:00 27.07.20 echo "Don't forget to wish a happy birthday to san randry"
```
to cancel a task scheduled by cron, simpy run crontab -e and delete the corresponding line in the crontab file.
for at, run atrm task-number.
## Quotas
chage the limits
```bash
edquota user or edquota -g group
```
there was two type of limits called "soft" and "hard"
