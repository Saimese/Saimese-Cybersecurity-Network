---
title: "TryHackMe – Metasploit: Introduction"
date: 2026-01-28
tags: [cyber-security-101, tryhackme, walkthrough,]
difficulty: Easy
description: "An introduction to the main components of the Metasploit Framework."
---
## Answers

What is the name of the code taking advantage of a flaw on the target system?

**Exploit**

What is the name of the code that runs on the target system to achieve the attacker's goal?

**Payload**

What are self-contained payloads called?

**Singles**

Is "windows/x64/pingback_reverse_tcp" among singles or staged payload?

**Singles**

How would you search for a module related to Apache?

**search apache**

Who provided the auxiliary/scanner/ssh/ssh_login module?

**todb**

How would you set the LPORT value to 6666?

**set LPORT 6666**

How would you set the global value for RHOSTS  to 10.10.19.23 ?

**setg RHOSTS 10.10.19.23**

What command would you use to clear a set payload?

**unset PAYLOAD**

What command do you use to proceed with the exploitation phase?

**exploit**

## Key Takeaways

**Exploit:** A piece of code that uses a vulnerability present on the target system.

**Vulnerability:** A design, coding, or logic flaw affecting the target system. The exploitation of a vulnerability can result in disclosing confidential information or allowing the attacker to execute code on the target system.

**Auxiliary:** Any supporting module, such as scanners, crawlers and fuzzers, can be found here.

**Encoders:** Encoders will allow you to encode the exploit and payload in the hope that a signature-based antivirus solution may miss them. Signature-based antivirus and security solutions have a database of known threats. They detect threats by comparing suspicious files to this database and raise an alert if there is a match. Thus encoders can have a limited success rate as antivirus solutions can perform additional checks.

**Evasion:** While encoders will encode the payload, they should not be considered a direct attempt to evade antivirus software. On the other hand, “evasion” modules will try that, with more or less success.

**NOPs:** (No OPeration) do nothing, literally. They are represented in the Intel x86 CPU family with 0x90, following which the CPU will do nothing for one cycle. They are often used as a buffer to achieve consistent payload sizes.

### Payload 
An exploit will take advantage of a vulnerability. However, if we want the exploit to have the result we want (gaining access to the target system, read confidential information, etc.), we need to use a payload. Payloads are the code that will run on the target system.

Examples could be; getting a shell, loading a malware or backdoor to the target system, running a command, or launching calc.exe as a proof of concept to add to the penetration test report. Starting the calculator on the target system remotely by launching the calc.exe application is a benign way to show that we can run commands on the target system.

Running command on the target system is already an important step but having an interactive connection that allows you to type commands that will be executed on the target system is better. Such an interactive command line is called a "shell". Metasploit offers the ability to send different payloads that can open shells on the target system.

Adapters: An adapter wraps single payloads to convert them into different formats. For example, a normal single payload can be wrapped inside a Powershell adapter, which will make a single powershell command that will execute the payload.

Singles: Self-contained payloads (add user, launch notepad.exe, etc.) that do not need to download an additional component to run.

Stagers: Responsible for setting up a connection channel between Metasploit and the target system. Useful when working with staged payloads. “Staged payloads” will first upload a stager on the target system then download the rest of the payload (stage). This provides some advantages as the initial size of the payload will be relatively small compared to the full payload sent at once.

Stages: Downloaded by the stager. This will allow you to use larger sized payloads.





