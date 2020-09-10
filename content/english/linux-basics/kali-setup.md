---
title: "Using Virtual Machines Part 2"
description: "Continuing the introductory guide to using virtual machines."
date: 2020-08-05
weight: 2
translationKey: "linux-basics-vbox-setup"
---

*Now that we have the host environment ready, we can load the image as a VM.*

## Setting up Kali Linux

### Downloading the image

Images files make it easy to send exact copies of computers.  
VirtualBox uses the .ova for their machine images.

Let's download our copy of the computer! Click the link below to download.  
Most images are big (~8GB), so this might take a few minutes.

**TODO**
Add link  
Add image of download from new source

### Importing the Virtual Machine
Now that you have the machine image downloaded, let's set it up!  

#### Step 1
In the VirtualBox application, we are able to *import* our images.  
Let's click on the "Import' button to get started!

![virtual box import button](../images/import-01.JPG?classes=border,shadow)

#### Step 2
The appliance we want to import will be the .ova file you downloaded earlier.  
Go ahead and click on the little folder with a green caret  symbol.  
This will open up a window so you can find and select the .ova file.

![virtual box import screen](../images/import-02.JPG?classes=border,shadow)

#### Step 3
Now that you selected the .ova image file. Click "Open".  
Then click "Next" on the "Appliance to Import" screen.

![virtual box import screen](../images/import-03.JPG?classes=border,shadow)

#### Step 4
The last step!  
In the "Name" field, feel free to give it a new name. It's your own VM!  
Make sure that the "USB Controller" option is **not** selected. Likely you will need to uncheck it.  
Then for the MAC Address Policy, it is a good idea to make sure that says, "Generate new MAC addresses for all network adapters".
Finally click "Import"!

![virtual box import screen](../images/import-05.JPG?classes=border,shadow)

Note: this will have a pop-up with the time needed to complete the import.  
Typically this is about 5 minutes, but might be a little longer depending on your computer.

![virtual box import screen](../images/import-06.JPG?classes=border,shadow)

Now we can launch the virtual machine!
Double click on the VM in VirtualBox!
