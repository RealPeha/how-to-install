---
slug: '/nodejs'
title: 'Node.js'
keywords: 'node, nodejs'
---

# Ubuntu 20.04

---

## # From the Default Repositories

```bash
sudo apt update # Refresh your local package index
sudo apt install nodejs # Install Node.js
nodejs -v # Check that the install was successful
```

## # Using a NodeSource PPA

Install the PPA

```bash
cd ~
@curl@ -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
```

Install Node.js

```bash
sudo apt install nodejs
nodejs -v # Check that the install was successful
```

## # Using Node Source Control

```bash
@nvm@ list-remote
@nvm@ install v14.0.0 # Install Node.js v.14.0.0 for example
@nvm@ use v14.0.0 # Switch to v14.0.0 version
```
