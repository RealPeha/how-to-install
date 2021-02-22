---
slug: '/nodejs'
title: 'Node.js'
keywords: 'node, nodejs'
---

# Ubuntu / Debian

---

## # Using nvm ⭐

```bash
@nvm@ list-remote
@nvm@ install v14.0.0 # Install Node.js v.14.0.0 for example
@nvm@ use v14.0.0 # Switch to v14.0.0 version
```

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
@curl@ -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh # For example, install Node.js 14
sudo bash nodesource_setup.sh
```

## # Using snap
```bash
sudo @snap@ install node --classic --channel=14 # For example, install Node.js 14
```

Install Node.js

```bash
sudo apt install nodejs
nodejs -v # Check that the install was successful
```

<br />

# CentOS 8 / RHEL 8 / Fedora

## # Using dnf
```bash
dnf module install nodejs:<stream>
dnf module list nodejs # See a list of available streams
dnf module install nodejs:12 # For example, install Node.js 12
```

## # Using snap
```bash
sudo @snap@ install node --classic --channel=14 # For example, install Node.js 14
```

<br />

# Windows

## # Using installer ⭐
Download the Windows Installer directly from the nodejs.org web site.

## # Using choco
```bash
choco install nodejs
# or full install with npm
choco install nodejs.install
```

## # Using scoop
```bash
scoop install nodejs
```

# FreeBSD

---

## # Using pkg
```bash
pkg install node
```
Or compile it on your own using ports:
```bash
cd /usr/ports/www/node
make install
```

<br />

# Gentoo

---

## # Using emerge
```bash
emerge nodejs
```

# Arch Linux

---

## # Using pacman

```bash
pacman -S nodejs
```

<br />

# macOS

---

## # Using installer
```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

## # Using Homebrew
```bash
@brew homebrew@ install node
```

## # Using MacPorts
```bash
port install nodejs<major version>
# Example
port install nodejs7
```

## # Using pkgsrc
Install the binary package
```bash
pkgin -y install nodejs
```
Or build manually
```bash
cd pkgsrc/lang/nodejs && bmake install
```

<br />

# Android

## # Using Termux pkg
```bash
pkg install nodejs # Install latest Node.js version
```