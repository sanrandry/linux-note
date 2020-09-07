---
title: "Manipulating packages with dpkg"
description: 'Manipulating packages with dpkg'
position: 3.1
category: 'Debian'
---

## installing packages
```bash
sudo dpkg -i man-db_2.8.5-2_amd64.deb
```
## update the entire operating system
<spam style="color: red;">this is dangerous </spam>
```bash
sudo apt full-upgrade
```
## package removal
remove the package
```bash
sudo dpkg --remove man-db_2.8.5-2_amd64.deb
```
purge the package directory
```bash
sudo dpkg --purge man-db_2.8.5-2_amd64.deb
```