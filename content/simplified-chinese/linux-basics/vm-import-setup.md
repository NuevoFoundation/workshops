```yaml
---
title: "使用虚拟机（第二部分）"
description: "继续关于使用虚拟机的入门指南"
date: 2022-09-23
difficulties: ["intermediate"]
weight: 2
---
```

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="使用虚拟机（第二部分） - YouTube视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="一张Nuvi的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        很棒！您已经为主机环境做好了准备！现在让我们加载被攻击电脑的镜像作为虚拟机。
    </div>
</div>

## 什么是镜像？

`镜像`有各种不同的类型。我们有照片，这些是图像。计算机镜像也非常类似。两者都是某个时间点的复制品。我们将使用一台行为异常的计算机的副本。但别担心，这不会对您的计算机造成任何损害！请记住，操作系统将在一个 `沙盒` 中运行，也就是说它不会影响您的电脑。

## 设置 Kali Linux

### 下载镜像

`操作系统镜像`使我们能够轻松传输计算机的精确副本。  
VirtualBox 使用 `.ova` 文件扩展名表示其虚拟机镜像。这类似于您将文档保存为 `.docx` 文件或图片保存为 `.png` 文件。

让我们下载计算机的副本吧！点击以下链接以下载。  
大多数操作系统的镜像文件都很大（约 8GB），但我们的文件只有约 3GB。不过下载仍然可能需要几分钟时间。

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
下载链接
</a>

### 导入虚拟机

现在您已经下载了虚拟机镜像，是时候设置它了！

#### 第一步

在 VirtualBox 应用中，我们可以 _导入_ 我们的镜像文件。点击“导入”按钮开始吧！

![virtual box import button](../images/import-01.PNG?classes=border,shadow)

#### 第二步

我们要导入的设备是您之前下载的 `.ova` 文件。点击带有绿色箭头符号的小文件夹图标。这将打开一个窗口，您可以在其中找到并选择您的 `.ova` 文件。

![virtual box import screen](../images/import-02.PNG?classes=border,shadow)

#### 第三步

现在您已经选择了 .ova 镜像文件。点击“打开”。然后在“要导入的设备”页面点击“下一步”。

![virtual box import screen](../images/import-03.PNG?classes=border,shadow)

#### 第四步

最后一步！在“名称”字段中，您可以随意为它起一个新的名字。这是属于您的虚拟机！确保“USB 控制器”选项是未选中的。请务必取消选择。然后，对于 MAC 地址策略，建议确保其显示为“为所有网络适配器生成新的 MAC 地址”。最后，点击“导入”！

![virtual box import screen](../images/import-05.PNG?classes=border,shadow)

**注意：** 导入过程中会弹出一个窗口显示所需时间。  
通常大约需要 5 分钟，但可能会根据您的计算机性能略有增加。

![virtual box import screen](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="一张Nuvi的照片" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        现在我们可以启动受感染的计算机，开始调查啦！
    </div>
</div>