```markdown
---
title: "Android 安裝設定"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
以下是如何在您的電腦上安裝 Android Studio 的步驟。如果您已安裝 Android Studio，請直接打開並跳到下一步！

這些步驟以在 Windows 電腦上安裝為例。然而，對其他類型的電腦來說步驟大致相同。

## 下載並安裝 Android Studio
1. [下載 Android Studio](https://developer.android.com/studio/) 適用於您的操作系統。
2. [按照這些步驟](https://developer.android.com/studio/install) 來安裝 Android Studio。

## 設置 JAVA_HOME 環境變數
Android Studio 包含了某些應用程序執行所需的 Java 版本。按照以下步驟在您的電腦上設置 `JAVA_HOME` 環境變數，此變數告訴相關工具 Java 的位置：
1. 在螢幕底部左側的搜尋框中輸入 `env`。
2. 選擇最佳匹配的程序 `Edit the system environment variables`。
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="編輯系統環境變數" alt="編輯系統環境變數"/>
3. 點擊 `Environment Variables...`。
4. 在'User variables'區域中選擇`New...`。
5. 輸入 JAVA_HOME 作為變數名稱。
6. 將以下內容複製到變數值：
```
C:\Program Files\Android\Android Studio\jre
```
7. 點擊確定。
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="設定 JAVA_HOME" alt="展示如何設置 JAVA_HOME 環境變數"/>

{{% notice tip %}}
我們強烈建議您現在重新啟動電腦，以確保 Android Studio 正確開啟。
{{% /notice %}}

## 啟動 Android Studio
安裝完成後，打開 Android Studio 開始使用應用程式。

{{% notice tip %}}
在 Windows 電腦上有多種方式可以啟動 Android Studio 應用程式。以下為兩種方法：
#### 方法一：
1. 點擊電腦左下角的 Windows 圖示。
2. 滑動列表，直到看到 `Android Studio` 文件夾。
3. 點擊 `Android Studio` 文件夾以展開。
4. 點擊文件夾中的 `Android Studio` 應用程式以啟動 Android Studio。

#### 方法二：
1. 在螢幕底部左側的搜尋框中輸入 `Android Studio`。
2. 在結果視窗中，如果"最佳匹配"高亮顯示`Android Studio`，請點擊 `Android Studio` 應用程式或按下鍵盤上的`ENTER`鍵。
{{% /notice %}}

## 開啟專案文件
1. 在 Android Studio 的啟動畫面上點擊 `Open an Existing Project`。
2. 找到您下載專案文件的位置。
3. 選擇您之前解壓縮的'TicTacToe'文件夾中的'TicTacToe'文件夾。
   - 要選擇的'TicTacToe'文件夾應有綠色的 Android 圖標，表示它是一個 Android 專案文件夾。
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="開啟 TicTacToe 專案" alt="展示如何在 Android Studio 中開啟 TicTacToe 專案"/>

運行 Android Studio 並開啟專案。您的視圖應類似於如下畫面：
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="Android Studio IDE" alt="Android Studio IDE 的範例界面"/>

## 接受許可協議
在您執行程式碼之前，您需要接受 Android 的許可協議，請按照以下步驟操作：
1. 點擊 Android Studio 窗口底部的 `Terminal` 按鈕。
2. 輸入以下命令，將 '<USER_NAME>' 替換為您的電腦用戶名稱。
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. 在提示框中輸入 `y` 並按下 `ENTER` 鍵以接受許可協議。此步驟需要多次操作。
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="接受 Android 許可協議" alt="顯示需要接受 Android 許可協議的步驟"/>
```