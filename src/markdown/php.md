---
slug: '/php'
title: 'PHP'
keywords: 'php'
---

# Ubuntu

---

## # Using apt

If you’re using Apache
```bash
sudo apt update
sudo apt install php libapache2-mod-php
sudo systemctl restart apache2 # Restart Apache
```

If you’re using Nginx
```bash
sudo apt update
sudo apt install php-fpm
sudo systemctl restart nginx # Restart Nginx
```
