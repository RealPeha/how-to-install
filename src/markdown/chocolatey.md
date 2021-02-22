---
slug: '/chocolatey'
title: 'Chocolatey'
keywords: 'chocolatey'
---

# Windows

---

## # With cmd.exe

```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

## # With PowerShell.exe

```bash
Get-ExecutionPolicy
# If it returns Restricted, then
Set-ExecutionPolicy AllSigned
#or
Set-ExecutionPolicy Bypass -Scope Process
```
Then
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```