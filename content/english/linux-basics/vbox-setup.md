---
title: "Using Virtual Machines Part 1"
description: "An introductory guide to using virtual machines"
date: 2022-09-23
difficulty: "Intermediate"
weight: 1
---

<p style="text-align: center;"><iframe width="50%" height="500px" src="https://www.youtube.com/embed/zoutwedSLKI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        We are providing you with a copy of the hacked computer as a virtual machine so you can help us.
    </div>
</div>

{{% notice info %}}

### What is a virtual machine?

A **virtual machine** (commonly called a VM) is a computer file (called an `image`), that behaves like an actual computer.  
In other words, it is a computer inside a computer. It runs in a window, like any other program.  
This gives you the same experience on a VM as you would on a regular computer.

The VM is `sandboxed` from the rest of the system, meaning that the software inside a VM can’t affect the computer itself.  
This produces an ideal environment for testing other operating systems, accessing virus-infected data, and creating new software or applications.
{{% /notice %}}

## What is VirtualBox?

VirtualBox is a virtualization software, also called a `hypervisor`. It allows your computer to host virtual machines.

## Downloading VirtualBox

You can download VirtualBox using this link:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Download link
</a>

If you are using Windows: Select "Windows hosts"  
If you are using macOS: Select "OS X hosts"  
If you are using something else, we recommend using Windows or macOS for this workshop. Anything else is beyond the scope for this workshop.

![virtual box download page](../images/vbox-dlpage-update.PNG?classes=border,shadow)

Next run the installer that you just downloaded.

The default options will be good enough for today! Keep clicking "Next" on the installer.

Please note that there are some option selections on the third page.
![virtual box install options](../images/vbox-install-03.PNG?classes=border,shadow)

If you see this warning, do not worry as this is expected.
![virtual box network warning](../images/vbox-install-04.PNG?classes=border,shadow)

Once you arrive at this page click "Install" to finish the setup.
![virtual box install](../images/vbox-install-05.PNG?classes=border,shadow)

Finally, select the checkbox to start VirtualBox after it finishes installing.
![virtual box launch after install](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Yes! We finished the installation of VirtualBox. We are ready to get started on using it now.
    </div>
</div>
