---
slug: '/yarn'
title: 'Yarn'
keywords: 'yarn'
---

# Common

---

## # Via npm

```bash
@npm@ install --global yarn
yarn --version # Check that the install was successful
```

<br />

# Ubuntu 20.04

---

## # Via apt
Import the repository’s GPG key and add the Yarn APT repository to your system 
```bash
@curl@ -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
Install yarn

```bash
sudo apt update # Refresh your local package index
sudo apt install yarn # Install yarn and Node.js
# or 
sudo apt install --no-install-recommends yarn # Skip the Node.js installation
yarn --version # Check that the install was successful
```
