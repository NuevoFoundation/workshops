---
title: "Android Setup"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: false
weight: 2
---
Follow the steps below to get Android Studio installed on your computer. If you already have Android Studio installed, open it up and skip to the next step!

These steps have examples for installing on Windows computers, however the steps are similar for other types of computers as well.

## Download and Install Android Studio
1. [Download Android Studio](https://developer.android.com/studio/) for your operating system.
2. [Follow these steps](https://developer.android.com/studio/install) to install Android Studio.


## Set the JAVA_HOME environment variable
Android Studio comes with a version of Java needed for certain parts of the application to run. Follow the steps below to set the JAVA_HOME environment variable on your computer, which tells these tools where to find Java:
1. In the search box on the bottom left of the screen, type in `env`
2. Select the "Best Match" program `Edit the system environment variables`
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Edit system environment variables" alt="Edit system environment variables"/>
3. Click `Environment Variables...`
4. `New...` in the 'User variables' section
5. Type JAVA_HOME as the variable name
6. Copy the following into variable value:
```
C:\Program Files\Android\Android Studio\jre
```
7. Click OK
<img src="../resources/_gen/images/set_java_home.gif" height="60%" width="60%" title="Setting JAVA_HOME" alt="shows steps to set the JAVA_HOME environment variable"/>

{{% notice tip %}}
We strongly recommend that you restart your computer now for Android Studio to open correctly.
{{% /notice %}}

## Start Android Studio
Once installed, open Android Studio to work on the app.

{{% notice tip %}}
There are multiple ways to start the Android Studio application on your Windows computer, here are two methods:
#### Method 1
1. Click the Windows icon in the lower left hand corner of your computer
2. Scroll through the list until you see the `Android Studio` folder
3. Click the `Android Studio` folder to expand it
4. Click the `Android Studio` application in the folder to start Android Studio

#### Method 2
1. In the search box on the bottom left of the screen, type in `Android Studio`
2. In the results window, if "Best Match" highlights `Android Studio`, either click the `Android Studio` application or press `ENTER` on your keyboard
{{% /notice %}}

## Open Project Files
1. Click on `Open an Existing Project` on the start screen of Android Studio
2. Look for the location where you downloaded the project files
3. Select the 'TicTacToe' folder inside of the 'TicTacToe' folder that you unzipped earlier. 
   - The 'TicTacToe' folder to select should have a green Android icon next to it, indicating it is an Android project folder
<img src="../resources/_gen/images/open_android_project.gif" height="60%" width="60%" title="Open TicTacToe project" alt="Shows how to open the TicTacToe project in Android Studio"/>

Run Android Studio and open the project. Your view will look similar to this:
<img src="../resources/_gen/images/android_studio.png" height="70%" width="70%" title="Android Studio IDE" alt="Example of Android Studio IDE"/>

## Accept Licenses
Before you can run the code, you'll need to accept Android licenses, following the steps below:
1. Click the `Terminal` button at the bottom of the Android Studio window
2. Type the command below, replacing '<USER_NAME>' with your computer's user name
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Type `y` and press `ENTER` at the prompts, to accept the licenses. This will be needed multiple times
<img src="../resources/_gen/images/accept_licenses.gif" height="70%" width="70%" title="Accepting Android licenses" alt="shows the steps needed to accept Android licenses"/>
