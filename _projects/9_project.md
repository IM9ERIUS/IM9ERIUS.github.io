---
layout: page
title: Wazuh Home Lab Installation
description: Walkthrough of the creation of my SIEM homelab
img: /assets/img/homelab_install_1.png
importance: 4
category: Personal Projects
---

**Introduction**

Hello everyone, IM9ERIUS here again and today I will be setting up a SIEM Home-Lab from scratch. I will be using Wazuh as my SIEM of choice & I will be adding a few agents to ingest logs. I have decided to undertake this project as it will allow me to get some hands on experience with a SIEM, understand the configurations behind them. In the future I will be using this Home-Lab to simulate some real life events including attacks from a threat actor and how the SIEM reacts.

I will be installing Wazuh on Ubuntu and dedicating enough virtual hardware to have a few agents connected at any given time. This lab will have a mixture of Linux / Windows machines to get a mixture of different ingested data logs. 

![Screensot1](/assets/img/homelab_install_2.JPG)


While installing Windows 11 I encountered an issue where I was required to make a Microsoft Account, this was bypassed with the command start ms-cxh//locallyonly

![Screensot1](/assets/img/homelab_install_3.JPG)

After installing the additional Ubuntu & Windows Virtual Machine I will go back to the Wazuh Virtual machine where I will be installing the Wazuh sever on. I will be following the Wazuh Quickstart guide and will be using the following command to commence the installation.

![Screensot1](/assets/img/homelab_install_4.JPG)

It looks like Curl did not come pre-installed with Curl after installing Curl I will run the command again.

![Screensot1](/assets/img/homelab_install_5.JPG)

Now the installation has been completed.

![Screensot1](/assets/img/homelab_install_6.JPG)

Now that Wazuh has been installed successfully we can log in directly to Wazuh through Firefox by searching our IP address and entering our username and password. Once completed this will take us to the home screen.

![Screensot1](/assets/img/homelab_install_7.JPG)

The next step will involve setting up the two agent virtual machines (One linux one Windows) to start collecting logs. I will first add the linux agent. 

![Screensot1](/assets/img/homelab_install_8.JPG)

From the Ubuntu agents terminal I will run the following command.

![Screensot1](/assets/img/homelab_install_9.JPG)

![Screensot1](/assets/img/homelab_install_10.JPG)

By going  to the homescreen for Wazuh we can see that the end point has been added

![Screensot1](/assets/img/homelab_install_11.JPG)

Now we will be deploying the Windows agent using the following command in power shell (this will need to be run as administrator)

![Screensot1](/assets/img/homelab_install_12.JPG)

After this the two agents are ready and testing can begin. 

![Screensot1](/assets/img/homelab_install_13.JPG)