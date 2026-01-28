---
title: "TryHackMe – Linux Fundamentals Part 1"
date: 2026-01-28
tags: [cyber-security-101, tryhackme, walkthrough,]
difficulty: Easy
description: "Embark on the journey of learning the fundamentals of Linux. Learn to run some of the first essential commands on an interactive terminal."
---
# Linux Fundamentals Part 1
## Answers
Research: What year was the first release of a Linux operating system?

**1991**

If we wanted to output the text "TryHackMe", what would our command be?

**echo TryHackMe**

What is the username of who you're logged in as on your deployed Linux machine?

**tryhackme**

On the Linux machine that you deploy, how many folders are there?

**4**

Which directory contains a file? 

**folder4**

What is the contents of this file?

**Hello World!**

Use the cd command to navigate to this file and find out the new current working directory. What is the path?

**/home/tryhackme/folder4**

Use grep on "access.log" to find the flag that has a prefix of "THM". What is the flag? Note: The "access.log" file is located in the "/home/tryhackme/" directory.

**THM{ACCESS}**

If we wanted to run a command in the background, what operator would we want to use?

**&**

If I wanted to replace the contents of a file named "passwords" with the word "password123", what would my command be?

**echo password123 > passwords**

Now if I wanted to add "tryhackme" to this file named "passwords" but also keep "passwords123", what would my command be

**echo tryhackme >> passwords**

## Things You Should Know

|Command|Description|
|echo|Output any text that we provide|
|whoami|Find out what user we're currently logged in as!|
|ls|List the name of a file or folder|
|cd|Change directory or path you are currently in on command prompt|
|cat| Short for concatenate, it allows you to view the contents inside a file|
|pwd| Print Working Directory allows you to view the full file path of a folder or file|
