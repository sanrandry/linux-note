---
title: Basic configuration
description: "basic configuration: netowork, accounts, printing"
position: 3.3
category: "Debian"
---

## configuring the system for another language

### setting default language
```bash
sudo dpkg-reconfigure locales
```
### configuring the keyboard
```bash
sudo dpkg-reconfigure keyboard-configuration
```
## Configuring the network
### Ethernet interface
DHCP configuration
```bash[/etc/network/interfaces]
auto enp0s31f6
iface enp0s31f6 inet dhcp
```
static configuratin
```bash[/etc/network/interfaces]
auto enp0s31f6
iface enp0s31f6 inet static
	address 192.168.0.3/24
	broadcast 192.168.0.255
	network 192.168.0.0
	gateway 192.168.0.1
```
## wireless interface
### install the required firmwares
install isenkram-autoinsatall-firmware
```bash
sudo apt-get install  isenkram-autoinstall-firmware
```
this program find the appropriate firmware for you hardware
### configure the wireless interface
```bash[/etc/network/interfaces/]
auto wlp4s0
iface wlp4s0 inet dhcp
	wpa-ssid MADAVA
	wpa-psk the-password
```
## setting the hostname and configuring the name service
the configuration file is located to /etc/hostnmame
```bash[/etc/hostname]
127.0.0.1     localhost
192.168.0.1   a-dummy-hostname.com
```
### name resolution
configuration file: /etc/nsswitch.conf
### configuring DNS servers
```[/etc/resolv.conf]
nameserver 212.27.32.176
nameserver 8.8.8.8
```
## User and group databases
### user list
store in /etc/passwd file
### the hidden and encrypted password file
store in /etc/shadow
### disabling an account
lock the user
```bash
sudo passwd -l user
```
unlock the user
```bash
sudo passwd -u user
```
### group list
configuration file: /etc/group
add a new group
```bash
sudo addgroup new_group_name
```
sudo remove a group
```bash
sudo delgroup group_name_to_delete
```
change the password for the group
```bash
sudo gpasswd group
```
sudo delete password for the group
```bash
sudo gpasswd -r group
```
## Creating accounts
create an user
```bash
sudo adduser user_name
````
add an existing user to a group
```bash
sudo adduser user_name group_name
```
## shell environment
configuration file: 
~/.bashrc or ~/.bash_profile
## printer configuration
install cups an it will also install the recommended printer-driver
```bash
sudo apt-get install cups
```
## Timezone configuration
```bash
sudo dpkg-reconfigure tzdata
```