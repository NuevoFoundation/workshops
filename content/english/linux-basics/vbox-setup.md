---
title: "Using Virtual Machines Part 1"
description: "An introductory guide to using virtual machines"
date: 2020-09-17
difficulty: "Intermediate"
weight: 1
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*So you can help us, we are providing you with a copy of the hacked computer as a virtual machine.*

{{% notice info %}}
### What is a virtual machine?
A **virtual machine** (commonly called a VM) is a computer file (called an `image`), that behaves like an actual computer.  
In other words, creating a computer within a computer. It runs in a window, much like any other program.  
This gives you the same experience on a VM as you would on a regular computer.

The VM is `sandboxed` from the rest of the system, meaning that the software inside a VM can’t affect the computer itself.  
This produces an ideal environment for testing other operating systems, accessing virus-infected data, and creating new software or applications.
{{% /notice %}}

## Setting up VirtualBox

VirtualBox is a virtualization software, also called a `hypervisor`. It allows your computer to host virtual machines.

### Downloading VirtualBox

VirtualBox is available at this link:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Download link
</a>

If you are using Windows:  Select "Windows hosts"  
If you are using Mac:  Select "OS X hosts"  
If you are using something else, we recommend using Windows or Mac for this workshop. Anything else is beyond the scope for this workshop.  

![virtual box download page](../images/vbox-dlpage-update.PNG?classes=border,shadow)

Next run the installer that you just downloaded. The default options will be good enough for today! Keep clicking "Next" on the installer.

Note some option selections are on the third page.
![virtual box install options](../images/vbox-install-03.PNG?classes=border,shadow)

If you see this warning, do not worry, this is expected. 
![virtual box network warning](../images/vbox-install-04.PNG?classes=border,shadow)

Once you arrive at this page click "install" to finish the setup.
![virtual box install](../images/vbox-install-05.PNG?classes=border,shadow)

Now the installation is complete!  
Finally, you can keep the checkbox selected to start VirtualBox after installing.
![virtual box launch after install](../images/vbox-install-06.PNG?classes=border,shadow)
