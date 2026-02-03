---
layout: page
title: Honey Pot Demonstration (Cowrie)
description: Walkthrough of Cowrie useage
img: assets/img/cowrie_attack1.png
importance: 3
category: Personal Projects
---

**Introduction**

Hello Everyone,

Thank you for joining me for another Cowrie related walkthrough, This walkthrough I am quite excited about as not only do I have screenshots but I have also recorded a video to go along with it!  

I was able to complete this walkthrough today with Cowrie thanks to the vast amount of tutorials I have seen which has allowed me to present this to you today. This was quite exciting as I was able to simulate real world usage of Cowrie from both the Attacker / Defender perspective. 

If you would like to watch the video please look below, otherwise join me with my walkthrough below.


<iframe width="560" height="315" src="https://www.youtube.com/embed/dElIddzyDgo?si=D5uhr_BDBi-RKY_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Before I start the simulated attack first I need to prepare my Attacker Virtual Machine (Kali Linux) and then my Honeypot (Ubuntu) so they can communicate with each other ensuring the attack is successful. I will first ensure that both virtual machines are connected with the internal network I have created in Virtual Box.

![Screensot1](/assets/img/cowrie_attack2.JPG)


Now lets ping the honey pot using Kali Linux to ensure that there is connection.


![Screensot1](/assets/img/cowrie_attack3.JPG)

We have connectivity! This will ensure that Kali Linux can perform the attack on the Honey pot as well as Cowrie recording the attackers commands and actions.  Now we need to get Cowrie up and running (Previously installed, please see previous walkthrough for information on installation).

![Screensot1](/assets/img/cowrie_attack4.JPG)

Cowrie is now running! Now lets simulate an attack on this honeypot. On Kali Linux I will be performing an NMAP port scan and will be using the T5 flag to speed things up (Do not do this in a real environment). We will see that port 2222 is open, this is the default SSH port used by Cowrie. 


![Screensot1](/assets/img/cowrie_attack5.JPG)

Now that we have identified that port 2222 is open, lets gain entry to this port and begin the attackers enumeration of the honey pot system. I will be recording the commands that I use while I enter the system and some common commands that an attacker will do. 

![Screensot1](/assets/img/cowrie_attack6.JPG)


We have now entered the system, lets starting looking around and run some commands.

![Screensot1](/assets/img/cowrie_attack7.JPG)


More commands for important system information

![Screensot1](/assets/img/cowrie_attack8.JPG)

And a few more

![Screensot1](/assets/img/cowrie_attack9.JPG)

So this is our attack completed on the Kali Virtual box and all the commands that where run at this time, now we will be switching back our focus to the Honey Pot Virtual Machine to see exactly what was run by the attacker. We first need to go to the log files in cowrie located /cowrie/var/log/cowrie. From there we will use the command cat to see the logs captured by cowrie. 

![Screensot1](/assets/img/cowrie_attack10.JPG)

Here we can see the logs captured by Cowrie, to make things a bit clearer lets use the grep command to only show us the commands run by the attacker.

![Screensot1](/assets/img/cowrie_attack11.JPG)

This screenshot shows the time stamps and the commands used by the attacker from start to finish. Though this is a very basic attack in a real work simulation this would show the thought process, specific attacks and plans made by attacker when a system is compromised. It can then be used by Blue Team professionals to better understand the attacker methodology and improve defences in the future to reduce the impact of attacks.

This concludes the walkthrough, stay tuned for more walkthroughs in the future.

See you soon,

**IM9ERIUS**