---
title: "Using Virtual Machines Part 2"
description: "Continuing the introductory guide to using virtual machines."
date: 2020-09-17
prereq: "Completed Virtual Box set up and imported the Nuevo Linux Basics Virtual Machine."
difficulty: "Intermediate"
weight: 2
---

*Good work on getting the host environment ready! Now let's load the image of the hacked computer as a vm.*

{{% notice info %}}
## What is an image
`Images` come in a variety of types. We have photographs, which are images. The images in computers are very similar.
Both are copies of things from a single point in time.

This means what we will be working with is a copy of the computer that has been acting weird.
Don't worry though, this won't hurt your computer!
{{% /notice %}}

## Setting up Kali Linux

### Downloading the image

**Images** files make it easy to send exact copies of computers.  
VirtualBox uses the .ova for their machine images.

Let's download our copy of the computer! Click the link below to download.  
Most images are big (~8GB), but ours is only ~3GB. The download still might take a few minutes.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:u:/r/personal/beatris_mendezgandica_nuevofoundation_org/Documents/Linux-Workshop/nuevo-linux-basics.ova?csf=1&web=1&e=5sekOO">
Download link
</a>

### Importing the Virtual Machine
Now that you have the machine image downloaded, let's set it up!  

#### Step 1
In the VirtualBox application, we are able to *import* our images.  
Let's click on the "Import' button to get started!

![virtual box import button](../images/import-01.PNG?classes=border,shadow)

#### Step 2
The appliance we want to import will be the .ova file you downloaded earlier.  
Go ahead and click on the little folder with a green caret  symbol.  
This will open up a window so you can find and select the .ova file.

![virtual box import screen](../images/import-02.PNG?classes=border,shadow)

#### Step 3
Now that you selected the .ova image file. Click "Open".  
Then click "Next" on the "Appliance to Import" screen.

![virtual box import screen](../images/import-03.PNG?classes=border,shadow)

#### Step 4
The last step!  
In the "Name" field, feel free to give it a new name. It's your own VM!  
Make sure that the "USB Controller" option is <b>not</b> selected. Likely you will need to uncheck it.  
Then for the MAC Address Policy, it is a good idea to make sure that says, "Generate new MAC addresses for all network adapters".
Finally click "Import"!

![virtual box import screen](../images/import-05.PNG?classes=border,shadow)

Note: this will have a pop-up with the time needed to complete the import.  
Typically this is about 5 minutes, but might be a little longer depending on your computer.

![virtual box import screen](../images/import-06.JPG?classes=border,shadow)

Now we can launch the virtual machine!
