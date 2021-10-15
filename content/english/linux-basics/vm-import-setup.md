---
title: "Using Virtual Machines Part 2"
description: "Continuing the introductory guide to using virtual machines"
date: 2020-09-17
difficulty: "Intermediate"
weight: 2
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Good work on getting the host environment ready! Now let's load the image of the hacked computer as a vm.*

{{% notice info %}}
## What is an image?
`Images` come in a variety of types. We have photographs, which are images. The images in computers are very similar.
Both are copies of things from a single point in time.

`Images` come in a variety of types. We have photographs, which are images. The images in computers are similar. Both are copies from a single point in time. This means what we will be working with is a copy of the computer that has been acting weird. Don't worry though, this won't hurt your computer!

## Setting up Kali Linux

### Downloading the image

**Image** files make it easy to send exact copies of computers.  
VirtualBox uses the .ova for their machine images.

Let's download our copy of the computer! Click the link below to download.  
Most images are big (~8GB), but ours is only ~3GB. The download still might take a few minutes.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Download link
</a>

### Importing the Virtual Machine

Now that you have the machine image downloaded, let's set it up!  

#### Step 1

In the VirtualBox application, we are able to *import* our images. Let's click on the "Import' button to get started!

![virtual box import button](../images/import-01.PNG?classes=border,shadow)

#### Step 2

The appliance we want to import will be the .ova file you downloaded earlier. Go ahead and click on the little folder with a green caret symbol. This will open up a window so you can find and select the .ova file.

![virtual box import screen](../images/import-02.PNG?classes=border,shadow)

#### Step 3

Now that you selected the .ova image file. Click "Open". Then click "Next" on the "Appliance to Import" screen.

![virtual box import screen](../images/import-03.PNG?classes=border,shadow)

#### Step 4

The last step! In the "Name" field, feel free to give it a new name. It's your own VM! Make sure that the "USB Controller" option is **not** selected. Likely you will need to uncheck it. Then for the MAC Address Policy, it is a good idea to make sure that says, "Generate new MAC addresses for all network adapters". Finally click "Import"!

![virtual box import screen](../images/import-05.PNG?classes=border,shadow)

**Note:** this will have a pop-up with the time needed to complete the import.  
Typically this is about 5 minutes, but might be a little longer depending on your computer.

![virtual box import screen](../images/import-06.JPG?classes=border,shadow)

Now we can launch the virtual machine!
