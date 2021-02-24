---
slug: '/ruby'
title: 'Ruby'
keywords: 'ruby'
---

# Ubuntu

## # Using apt

```bash
sudo apt update
sudo apt install ruby-full
ruby --version
```

## # Using Rbenv

```bash
sudo apt update
sudo apt install git curl autoconf bison build-essential 
    libssl-dev libyaml-dev libreadline6-dev zlib1g-dev 
    libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash
rbenv -v
rbenv install -l # versions list
rbenv install VERSION
rbenv global VERSION
```

## # Using RVM

```bash
sudo apt install curl
sudo gpg2 --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 # import open key in system
curl -sSL https://get.rvm.io | bash -s stable # download RVM
source /etc/profile.d/rvm.sh
rvm requirements # install requirements
rvm list known # versions list
rvm install VERSION # install version
rvm use VERSION --default
ruby --version
```

</br>

# Arch Linux

## # Using pacman

```bash
sudo pacman -S ruby
```

</br>

# macOS

## # Using Homebrew

```bash
brew install ruby
```

</br>

# CentOS, Fedora, RHEL

## # Using yum

```bash
sudo yum install ruby
```