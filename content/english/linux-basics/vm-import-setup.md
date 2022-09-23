---
title: "Using Virtual Machines Part 2"
description: "Continuing the introductory guide to using virtual machines"
date: 2022-09-23
difficulty: "Intermediate"
weight: 2
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excellent work on preparing the host environment! Now let's load the hacked computer's image as a VM.
    </div>
</div>

{{% notice info %}}

## What is an image?

`Images` come in a variety of types. We have photographs, which are images. Computer images are very similar. Both are copies of things from a single point in time. We will be working with a copy of a computer that has been acting weird. Don't worry though, this won't hurt your computer! Remember that the OS will be in a `sandbox`, meaning that it can't affect your computer.

## Setting up Kali Linux

### Downloading the image

`OS images` make it easy to send exact copies of computers.  
VirtualBox uses the `.ova` file extension for their machine images. This is similar to how you save documents as a `.docx` file and photographs as `.png`.

Let's download our copy of the computer! Click the link below to download.  
Most OS images are big (~8GB), but ours is only ~3GB. The download may still take a few minutes.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Download link
</a>

### Importing the Virtual Machine

Now that you have the machine image downloaded, it is time to set it up!

#### Step 1

In the VirtualBox application, we are able to _import_ our images. Let's click on the "Import" button to get started!

![virtual box import button](../images/import-01.PNG?classes=border,shadow)

#### Step 2

The appliance we want to import will be the `.ova` file you downloaded earlier. Go ahead and click on the little folder with a green caret symbol. This will open up a window so you can find and select the `.ova` file.

![virtual box import screen](../images/import-02.PNG?classes=border,shadow)

#### Step 3

Now that you selected the .ova image file. Click "Open". Then click "Next" on the "Appliance to Import" screen.

![virtual box import screen](../images/import-03.PNG?classes=border,shadow)

#### Step 4

The last step! In the "Name" field, feel free to give it a new name. It's your own VM! Make sure that the "USB Controller" option is **not** selected. Make sure to uncheck it. Next, for the MAC Address Policy, it is a good idea to make sure that it says, "Generate new MAC addresses for all network adapters". Finally, click "Import"!

![virtual box import screen](../images/import-05.PNG?classes=border,shadow)

**Note:** this will have a pop-up with the time needed to complete the import.  
Typically this is about 5 minutes, but it might take a little longer depending on your computer.

![virtual box import screen](../images/import-06.JPG?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Now we can launch the infected machine and get started in our investigations!
    </div>
</div>
