---
layout: page
title: Active Directory SOC Home Lab
description: Walkthrough of the creation of Active Directory Server & SIEM
img: /assets/img/ad_1.png
importance: 6
category: Personal Projects
---

**Introduction**

Hello everyone, Long time no see. I am pleased to announce my new personal project which will be the creation of a Home Lab Mini SOC. The premise of this project will be to showcase the creation of an Active Directory service, Installation of Splunk and the ingesting of data through the use of Splunk forwarders. This will be one of many projects where I will simulate real world attacks as well as system hardening. The creation of this home lab has been a positive experience and I intend to document my trouble shooting to show how I overcome obstacles.

![Screenshot1](/assets/img/ad_2.png)

The following diagram above was created using Cisco Packet tracer and is intended to be a visual of how the Mini SOC will look like and how an attacker will be interacting with it when we start generating alerts. We have a DC (Domain Controller) server which will be responsible for the Active Directory settings and deployment, A user to ingest user logs, an indexer machine (Splunk will be used on this machine) to monitor alerts as well as an attacker machine which will be my personal kali virtual box. For the purpose of the lab all devices are logically connected through a switch and will be on the same subnet for communication. 

The first error I encountered was an issue with the installation of the Microsoft 2019 server & Windows 11 ISO.

![Screenshot1](/assets/img/ad_3.png)

The following error occurs when you select the recommended virtual box installation of Windows. If you select the manual installation options the installation will run smoothly. The first step was to create three separate virtual machines for the SOC, Active Directory User & Domain controller. I decided to user Windows 11 for the SOC & AD User & Windows Server 2019 for the Domain controller. I already have an attacker machine ready.

![Screenshot1](/assets/img/ad_4.png)


I will first create the Active Directory Service & Nominate the Windows 2019 Server to be a domain controller. All windows virtual machines will connect to the Domain Controller in order to access the Active Directory service. This is started by access the Server Manager service & Adding a new role and feature which will be Active Directory Domain Services. 

![Screenshot1](/assets/img/ad_5.png)

After going through the necessary steps the Active Directory service has been added to the Windows Server. In order to ensure that my other machines can always connect to the Active Directory service, The server needs to have a Static IP address listed. Without this the details for the Active Directory Server will change and this would cause severe issues (and head aches) as time goes on.  

![Screenshot1](/assets/img/ad_6.png)


The next step for the Windows 2019 server will be to nominate it as a Domain Controller. This is what is required for my other machines to be able to connect to the Active Directory service. I will follow the prompts of the Active Directory Domain Services Configuration Wizard and create a new forest. I have named it ‘simulation.internal’. 

![Screenshot1](/assets/img/ad_7.png)

![Screenshot1](/assets/img/ad_8.png)


After restarting the Domain Controller for the changes to take affect I created two separate users that will be used for the SOC account as well as a general user account. These have been named SIEM & Simon. SIEM has domain administrator to allow for the installation of Splunk later while Simon has no elevated permissions. This was all completed in the Active Directory Users and Computers located in the Server Manager resource. 

![Screenshot1](/assets/img/ad_9.png)


The next step involved updating the primary DNS IP address for both the User Virtual Machine & the SOC machine. Without updating this I could not logon to the domain controller to join the Active Directory Service. After updating a Static IP for both machines and verifying connectivity checking the virtual box network adapter I could commence the process of joining the Active Directory Service. 

![Screenshot1](/assets/img/ad_10.png)


I then encountered my next hurdle, for some reason I was unable to connect to the domain controller for both my SIEM & User virtual machine. After some digging I found out that Windows 11 home edition does not have the capability of joining an active directory service. I now had to remove these machines, download the enterprise version and set up all those details again.

![Screenshot1](/assets/img/ad_11.JPG)

After this hurdle (and head ache) I reinstalled the virtual machines, re-setup the configuration details and joined the Active Directory service. 

![Screenshot1](/assets/img/ad_12.png)


My next task was to Download & install Splunk on the SIEM machine. For safety reasons I decided the best way to approach this was to download the install file on my actual computer, drag and drop it using the virtual box guest additions upgrade. I do not want these machines having internet access, especially when the attacks begin. 

![Screenshot1](/assets/img/ad_13.png)


After a simple installation Splunk was successfully installed on the SIEM virtual box.

![Screenshot1](/assets/img/ad_14.png)

Through my research of other similar projects, it has recommended for me to download Sysmon and a specific Github configuration called ‘Olaf Configuration’. This was done as this configuration provides greater detail besides event numbers, which can be used for blue team to understand attacker methodology. 

![Screenshot1](/assets/img/ad_15.png)

After installing Sysmon with powershell, I downloaded the Splunk Universal Forwarder for both the Active Directory User & Domain controller. Both forwarders will connect to the static IP address of the SIEM machine and will communicate over port 8080. 

![Screenshot1](/assets/img/ad_16.png)


Then came my next challenge, after installing both forwarders I checked the settings of Splunk and found that no Forwarders were sending over data. After some research on the issue it recommended me to check the firewall settings for both the SIEM machines (Receiver) and Active Directory User, Domain Controller (Sender) 

![Screenshot1](/assets/img/ad_17.png)

![Screenshot1](/assets/img/ad_18.png)

After completing this and still having no luck, I updated the Receive Data section in Splunk and ensured that it was listening on port 9997. The previous port I entered was incorrect, I went back and also updated this on the Splunk Forwarders. 

![Screenshot1](/assets/img/ad_19.png)


I now checked the forwarder deployment page and confirm that both machines are present, concluding the initial installation. 

![Screenshot1](/assets/img/ad_20.png)

