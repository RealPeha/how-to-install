---
slug: '/docker'
title: 'Docker'
keywords: 'docker'
---

# Ubuntu

---

## # Using apt

```bash
sudo apt update
sudo apt install @apt-transport-https@ @ca-certificates@ @curl@ @software-properties-common@
@curl@ -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
```

<br />

# CentOS 8

## # Using dnf

```bash
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
dnf install docker-ce
```