# [How to install](https://peha.fun/how-to-install) - Collection of Install Tutorials

This project is a collection of instructions for installing programs and utilities for Linux, Windows, MacOS, etc.

# Contribute
The project really needs community support, so contributors are always welcome!

You can create a new instruction or edit an existing

How to add a new instruction:
1. Fork the repo
2. Create new branch
3. Create a new file with .md extension in the src/markdown folder. You can use [template.md](https://github.com/RealPeha/how-to-install/blob/master/template.md) file for example 
4. This file must have the required header in it:
```
---
slug: '/your-slug'
title: 'Some utility'
keywords: 'your-slug, random'
---
```
Where `slug` is a unique identifier of the utility, which is its url address, for example `peha.fun/how-to-install/your-slug`

- and make sure your instructions are working 😄


Before adding a new instruction please ensure your pull request adheres to the following guidelines:
- it is divided into blocks according to operating systems
- does not contain unnecessary comments and optional clarifications
- if an install of some utility requires an install of another one, you may create a link to it right in the code using the `@` symbol

use `sudo @snap@ install atom --classic` for create a link to the `snap` like `peha.fun/how-to-install/snap`

or `@make build-essential@ ./` for create a link to the `make` like `peha.fun/how-to-install/build-essential`
