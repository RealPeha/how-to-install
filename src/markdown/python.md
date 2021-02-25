---
slug: '/python'
title: 'Python'
keywords: 'python'
---

# Ubuntu 16.04

---

## # Using apt

```bash
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt update
sudo apt install python3.6
```

## # Using source

```bash
sudo apt install build-essential checkinstall
sudo apt install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev
wget https://www.python.org/ftp/python/3.6.0/Python-3.6.0.tar.xz
tar xvf Python-3.6.0.tar.xz
cd Python-3.6.0/
./configure
sudo make altinstall
python3 -V
```

<br />

# Linux Mint

## # Using apt

```bash
apt update
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.9
python3.9 -V
```