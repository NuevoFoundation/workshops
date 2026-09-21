```yaml
---
title: "使用虚拟机第一部分"
description: "使用虚拟机的入门指南"
date: 2022-09-23
difficulties: ["中级"]
weight: 1
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="使用虚拟机第一部分 - YouTube视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        我们为您提供了一台被“黑客攻击”的计算机副本作为虚拟机，您可以帮助我们处理。
    </div>
</div>

{{% notice info %}}

### 什么是虚拟机？

**虚拟机**（通常称为 VM）是一种计算机文件（称为 `镜像`），它的行为就像一台真实的计算机。  
换句话说，它是一台电脑中的电脑。它在一个窗口中运行，就像其他程序一样。  
这让您在虚拟机上的体验可以与普通电脑上完全相同。

虚拟机与主系统是**沙盒隔离**的，这意味着虚拟机中的软件不会影响到主机系统。  
因此，它是测试新操作系统、访问带病毒的数据以及开发新软件或应用程序的理想环境。

{{% /notice %}}

## 什么是 VirtualBox？

VirtualBox 是一种虚拟化软件，也被称作 `虚拟机管理器`。它允许您的计算机运行虚拟机。

## 下载 VirtualBox

您可以通过以下链接下载 VirtualBox:

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
下载链接
</a>

如果您使用的是 Windows：请选择 "Windows hosts"  
如果您使用的是 macOS：请选择 "OS X hosts"  
如果您使用的是其他操作系统，我们推荐在本次工作坊中使用 Windows 或 macOS。其他操作系统不在本次工作坊范围内。

![虚拟机下载页面](../images/vbox-dlpage-update.PNG?classes=border,shadow)

接下来运行您刚刚下载的安装程序。

默认选项已经足够满足我们的需求！在安装程序中连续点击 "Next" 即可。

请注意，在第三页会有一些选项可以选择。
![虚拟机安装选项](../images/vbox-install-03.PNG?classes=border,shadow)

如果看到以下警告，请不用担心，这是正常的。
![虚拟机网络警告](../images/vbox-install-04.PNG?classes=border,shadow)

当您看到以下页面时，点击 "Install" 完成安装。
![虚拟机安装完成](../images/vbox-install-05.PNG?classes=border,shadow)

最后，选择复选框以确保安装完成后启动 VirtualBox。
![虚拟机启动安装完成后](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Nuvi 的一张照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        太棒了！我们完成了 VirtualBox 的安装，现在即可开始使用它。
    </div>
</div>