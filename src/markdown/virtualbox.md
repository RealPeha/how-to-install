---
slug: '/virtualbox'
title: 'VirtualBox'
keywords: 'virtualbox'
---

# Ubuntu / Debian

---

## # Using apt

```bash
@wget@ -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
@wget@ -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
sudo apt update # Refresh your local package index
sudo apt install virtualbox-5.2 # Install VirtualBox 5.2
```
