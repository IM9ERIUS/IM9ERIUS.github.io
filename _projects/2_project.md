---
layout: page
title: Honey Pot Installation (Cowrie)
description: Blue Team Project
img: /assets/img/honeypot_21.JPG
importance: 2
category: Personal Projects
giscus_comments: true
---

**Introduction**

Hello Everyone,

I am excited to announce the first half of my project involving the installation / preparation for a Honey pot. A honey pot is a decoy computer system that is designed to look like a real sever / computer, However they are designed as a trap to be used by Blue Team Specialists in identifying attack patterns, techniques as well as particular motivations for an attack. This walkthrough will go through the installation and preparation of the Honey pot Cowrie. Cowrie is a SSH / Telnet honey pot which can be used to capture shell interactions performed by an attacker. This walkthrough will go through the Git Cloning of Cowrie, preparation of the honey pot virtual machine as well as checking connectivity with the attacker (For this I will be using Kali Linux, Ubuntu and Oracle Box)

![Screensot1](/assets/img/honeypot_1.JPG)

The first step will be downloading the Ubuntu ISO file to install / create the virtual machine we will be using for the honey pot.

![Screensot1](/assets/img/honeypot_2.JPG)

This has now been downloaded and I will configure the Virtual Machine to use the ISO file for Ubuntu. The screenshot below shows that it is now running and operational. 

![Screensot1](/assets/img/honeypot_3.JPG)

After an unexpected crash, I have determined that it may be best to allocate more memory for the virtual machine to allow for a smoother installation of Ubuntu. 

![Screensot1](/assets/img/honeypot_4.JPG)

The installation of Ubuntu has been successful and I can now start the installation process of Cowrie. Cowrie utilises Python and requires several dependencies in order for it to function appropriately. I first had to install Git in order for the Git Clone command to work. 

![Screensot1](/assets/img/honeypot_5.JPG)

After the installation of Git I am now able to run the Git Clone command allowing me to download Cowrie and all the necessary files required. 

![Screensot1](/assets/img/honeypot_6.PNG)

The first requirement is to ensure that Ubuntu is using Python 3.10+, without this version Cowrie may not work correctly and may cause issues down the road. The second requirement is downloading python-virtualenv, I am unfamiliar with this python feature and have discovered that it is used to create isolated folders containing their own Python executables & libraries. 

![Screensot1](/assets/img/honeypot_7.JPG)

I have confirmed that Ubuntu is running the latest version of Python ensuring that Cowrie will work as intended. 

![Screensot1](/assets/img/honeypot_8.JPG)

After attempting to install python-virtualenv it was not successful, meaning I have to first install pip before I can download it. 

![Screensot1](/assets/img/honeypot_9.JPG)

After attempting to install python virtual-env I have come across the following error advising me to use pipx.

![Screensot1](/assets/img/honeypot_10.JPG)

After using pipx the installation of python-virtualenv worked as required. 

![Screensot1](/assets/img/honeypot_11.JPG)

![Screensot1](/assets/img/honeypot_12.JPG)

It has now been installed! based on the Cowrie installation guide it advises to run Cowrie as an account without root privileges. 

![Screensot1](/assets/img/honeypot_20.JPG)

The new account has been created and I have followed the necessary steps to install necessary packages for Cowrie. 

![Screensot1](/assets/img/honeypot_13.JPG)


I now run the command required to start the cowrie environment and for cowrie to launch. 


![Screensot1](/assets/img/honeypot_14.JPG)

Part of the absolute joy (And Nightmare, perspectives) is troubleshooting. I had my second VM ready and noticed that I did not have an IP address for both the attacker VM and the Ubunutu VM. After troubleshooting with the Network settings in Virtual Box I had discovered that the DHCP (Dynamic Host Control Protocol) setting had been disabled meaning my VM's were not getting ip addresses automatically. This has now been resolved and can confirm connection from both machines.



![Screensot1](/assets/img/honeypot_15.JPG)
![Screensot1](/assets/img/honeypot_16.JPG)
![Screensot1](/assets/img/honeypot_17.JPG)


I now run an NMAP scan on my attackers machine and discover that port 2222 is open (Automatic port used by Cowrie) meaning that it is ready to be exploited and our honey pot is ready to log its attacks. 

![Screensot1](/assets/img/honeypot_18.JPG)

![Screensot1](/assets/img/honeypot_19.JPG)

This concludes the walkthrough of the installation of Cowrie and preparation of my virtual machines. I enjoy these exercises as it allows me to prepare for blue team operations and I do get a thrill when I am able to identify and fix a problem. Join me for my next walkthrough where I will attack Cowrie and use Cowrie to record all my actions in real time.

See you soon,

**IM9ERIUS**

```

