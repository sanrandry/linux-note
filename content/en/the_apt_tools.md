---
title: "the APT Tools"
description: "maintenance and updates"
position: 3.2
category: "Debian"
---

## source.list file
### syntax
```bash[/etc/apt/source.list]

deb url distribution component1 component2 component3 [..] componentX
deb-src url distribution component1 component2 component3 [..] componentX
```
the first field indicates the source type
deb: package source of binary packages
deb-src: package source of source packages
the second field gives the base URL of the source
the last field depends on the structure of the repository
### repository for stable users
```bash[/etc/apt/source.list]
# Security updates
deb http://security.debian.org/ buster/updates main contrib non-free
deb-src http://security.debian.org/ buster/updates main contrib non-free

## Debian mirror

# Base repository
deb https://deb.debian.org/debian buster main contrib non-free
deb-src https://deb.debian.org/debian buster main contrib non-free

# Stable updates
deb https://deb.debian.org/debian buster-updates main contrib non-free
deb-src https://deb.debian.org/debian buster-updates main contrib non-free

# Stable backports
deb https://deb.debian.org/debian buster-backports main contrib non-free
deb-src https://deb.debian.org/debian buster-backports main contrib non-free
```
## aptitude, apt-get and apt commands
### installing and removing packages
```bash
sudo apt install package1 package2
```
```bash
sudo apt remove package1 package2
```
reinstall packages
```bash
sudo apt --reinstall install package
```
### system upgrade
```bash
sudo apt upgrade
```
full upgrade
for apt
```bash
sudo apt full-upgrade
```
for aptitude and apt-get
```bash
sudo apt-get dist-upgrade
```
### tracking automatically istalled packages
delete the package that are no longer needed
```bash
sudo apt autoremove
```
## the apt-cache command
search a package in the internal database
```bash
sudo apt-cache search
```
## Some front-end for apt and apt-get
aptitude
```bash
sudo apt-get install aptitude
```
synaptic
```bash
sudo apt-get install synaptic
```
## Checking package authenticity
```bash
sudo apt-key fingerprint
```
## keeping a system up to date
just install the apticron package
```bash
sudo apticron
```
