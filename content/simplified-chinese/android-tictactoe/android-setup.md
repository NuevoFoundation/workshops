---
title: "Android 环境设置"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
按照以下步骤在您的计算机上安装 Android Studio。如果您已经安装了 Android Studio，可以直接打开并跳到下一步！

以下步骤以在 Windows 计算机上安装为示例。然而，其他类型的计算机的步骤也类似。

## 下载和安装 Android Studio
1. [下载 Android Studio](https://developer.android.com/studio/)，选择适合您的操作系统版本。
2. [按照这些步骤](https://developer.android.com/studio/install) 安装 Android Studio。

## 设置 JAVA_HOME 环境变量
Android Studio 自带了一版 Java，用于运行应用程序的某些部分。请按照以下步骤在计算机上设置 `JAVA_HOME` 环境变量，该变量用于告诉这些工具 Java 的位置：
1. 在屏幕左下角的搜索框中输入 `env`。
2. 选择“最佳匹配”的程序 `Edit the system environment variables`。
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Edit system environment variables" alt="编辑系统环境变量"/>
3. 点击 `Environment Variables...`。
4. 在“用户变量”部分，点击 `New...`。
5. 输入 JAVA_HOME 作为变量名。
6. 将以下内容复制到变量值中：
```
C:\Program Files\Android\Android Studio\jre
```
7. 点击 OK。
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="设置 JAVA_HOME" alt="显示设置 JAVA_HOME 环境变量的步骤"/>

{{% notice tip %}}
我们强烈建议您现在重启计算机，以确保 Android Studio 正确打开。
{{% /notice %}}

## 启动 Android Studio
安装完成后，打开 Android Studio 来进行应用开发。

{{% notice tip %}}
您可以通过多种方法在 Windows 计算机上启动 Android Studio。以下是两种方法：
#### 方法 1
1. 点击计算机左下角的 Windows 图标。
2. 滚动列表直到看到 `Android Studio` 文件夹。
3. 点击 `Android Studio` 文件夹以展开。
4. 点击文件夹内的 `Android Studio` 应用程序来启动 Android Studio。

#### 方法 2
1. 在屏幕左下角的搜索框中输入 `Android Studio`。
2. 如果“最佳匹配”中高亮显示的是 `Android Studio`，点击 `Android Studio` 应用程序或按下键盘上的 `ENTER` 键。
{{% /notice %}}

## 打开项目文件
1. 在 Android Studio 的启动界面上，点击 `Open an Existing Project`。
2. 找到您下载项目文件的路径。
3. 选择您之前解压的 'TicTacToe' 文件夹中的 'TicTacToe' 文件夹。
   - 应选择显示绿色 Android 图标的 'TicTacToe' 文件夹，表示它是一个 Android 项目文件夹。
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="打开 TicTacToe 项目" alt="演示如何在 Android Studio 中打开 TicTacToe 项目"/>

运行 Android Studio 并打开项目后，您的界面会类似于下图：
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="Android Studio IDE" alt="Android Studio IDE 示例"/>

## 接受许可协议
在运行代码之前，您需要按照以下步骤接受 Android 的许可协议：
1. 点击 Android Studio 窗口底部的 `Terminal` 按钮。
2. 输入以下命令，将 '<USER_NAME>' 替换为您计算机的用户名。
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. 在每次提示时输入 `y` 并按下 `ENTER` 键以接受许可协议。这需要多次重复。
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="接受 Android 许可协议" alt="演示接受 Android 许可协议的步骤"/>