---
slug: '/mongodb'
title: 'MongoDB'
keywords: 'mongodb, db'
---

# Ubuntu 20.04

---

## # Using apt

Install MongoDB

```
@curl@ -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod.service
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```

<br />

# Ubuntu 18.04

---

## # Using apt

Install MongoDB

```
@curl@ -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod.service
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```

<br />

# Ubuntu 16.04

---

## # Using apt

Install MongoDB

```
@wget@ -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```

Adjusting the Firewall (Optional)

```
sudo ufw allow from your_other_server_ip/32 to any port 27017
sudo ufw status
```

<br />

# CentOS 8

---

## # Using dnf

```
sudo @nano@ /etc/yum.repos.d/mongodb-org.repo
```

Then add the following content to the empty file:

```ini
[mongodb-org]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

Following that, you can install the mongodb-org package with this command:

```
sudo dnf install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```

<br />

# CentOS 7

---

## # Using yum

```
sudo @vim@ /etc/yum.repos.d/mongodb-org.repo
```

Then add the following content to the empty file:

```ini
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
```

Following that, you can install the mongodb-org package with this command:

```
sudo yum install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```

<br />

# Debian 9

---

## # Using apt

Download the key and pass it to apt-key add:

```
@curl@ https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
```

Open the source list file in a text editor

```
sudo @nano@ /etc/apt/sources.list.d/mongodb-org-4.0.list
```

Then add the following content to the empty file:

```textile
deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main
```

Install MongoDB

```
sudo apt update
sudo apt-get install mongodb-org
```

Starting the MongoDB Service

```
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongo --version # Check that the install was successful
```
