---
title: "TryHackMe – Linux Fundamentals Part 3"
date: 2026-02-02
tags: [cyber-security-101, tryhackme, walkthrough,]
difficulty: Easy
description: "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!"
---

## Answers
Edit "task3" located in "tryhackme"'s home directory using Nano. What is the flag?

**THM{TEXT_EDITORS}**

Download the file http://MACHINE_IP:8000/.flag.txt onto the TryHackMe AttackBox. Remember, you will need to do this in a new terminal.
What are the contents?

**THM{WGET_WEBSERVER}**

If we were to launch a process where the previous ID was "300", what would the ID of this new process be?

**301**

If we wanted to cleanly kill a process, what signal would we send it?

**SIGTERM**

Locate the process that is running on the deployed instance (MACHINE_IP). What flag is given?

**THM{PROCESSES}**

What command would we use to stop the service "myservice"?

**systemctl stop myservice**

What command would we use to start the same service on the boot-up of the system?

**systemctl enable myservice**

What command would we use to bring a previously backgrounded process back to the foreground?

**fg**

When will the crontab on the deployed instance (MACHINE_IP) run?

**@reboot**

What is the IP address of the user who visited the site?

**10.9.232.111**

What file did they access?

**catsanddogs.jpg**

## Key Takeaways

Know and understand the commands

