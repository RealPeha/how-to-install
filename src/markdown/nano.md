---
slug: '/nano'
title: 'Nano'
keywords: 'nano, text editor'
---

# Ubuntu / Debian

---

## # Using apt (for older versions)

```bash
sudo apt update # Refresh your local package index
sudo apt install nano # Install Nano
nano --version # Check that the install was successful
```

## # Build from source

Download nano

```bash
@wget@ http://www.nano-editor.org/dist/v2.4/nano-2.4.2.tar.gz
# or using curl
@curl@ http://www.nano-editor.org/dist/v2.4/nano-2.4.2.tar.gz > nano-2.4.2.tar.gz
```

Build & Install nano

```bash
@tar@ -xzf nano-2.4.2.tar.gz
cd nano-2.4.2
./configure
@make@
sudo @make@ install
```

<br />

# RedHat / CentOS / Fedora

---

## # Using yum

```bash
sudo yum install nano # Install nano
nano --version # Check that the install was successful
```
