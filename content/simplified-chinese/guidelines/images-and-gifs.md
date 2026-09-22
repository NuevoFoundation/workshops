---
title: "图片和GIF动画"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

图片能够让年轻学习者的工作坊更加吸引人。请遵循以下指南，以确保图片的可访问性、适当大小以及能在所有平台上正常显示。

## 图片大小

永远不要使用没有宽度限制的图片。没有 `width` 属性的图片会以其原始尺寸呈现，这通常会超出内容区域的大小。

| 图片类型 | 目标宽度 | 示例 |
|-----------|-------------|---------|
| 全屏UI截图（例如Replit、IDE） | 60% | Replit上传窗口 |
| 代码输出 / 终端 | 70% | dotnetfiddle输出结果 |
| 概念图 | 50% | 色彩理论，数据结构 |
| 照片示例 | 40-50% | python-pixel猫图片 |
| 小图标 / 徽章 | 15-25% | 表格，小型图示 |
| 装饰性艺术 | 20-30% | 角色插图 |
| 主视觉图片 | 100% | 仅限于首页 `_index.md` |

**使用百分比而不是像素。** 百分比宽度具有响应性，并且可以在手机和平板上自适应缩放。像素宽度可能会在较小屏幕上溢出。

```markdown
<!-- 正确示例：响应式设计 -->
<img src="../media/screenshot.png" alt="Replit代码编辑器" width="60%">

<!-- 不推荐：固定像素宽度 -->
<img src="../media/screenshot.png" alt="Replit代码编辑器" width="900px">
```

## 添加图片

### 方法1：Markdown语法

```markdown
![图片描述](../media/filename.png)
```

### 方法2：HTML img标签（需要控制宽度时）

```html
<img src="../media/filename.png" alt="图片描述" width="50%">
```

### 方法3：Hugo的figure短码

```
{{</* figure src="../media/filename.png" alt="图片描述" width="50%" */>}}
```

`figure`短码会将图片包装在一个 `<figure>` 元素中。注意：大多数现有工作坊使用的是Markdown或HTML方法。较旧的工作坊可能使用`img/`而不是`media/`——两者的功能相同。

## 可访问性（Alt文本）

每张图片**必须**有描述性Alt文本。这是不可协商的要求。

| 正确 | 错误 |
|----|-------|
| `alt="Replit代码编辑器显示一个Python Hello World程序"` | `alt="screenshot"` |
| `alt="RGB色环图，红色、绿色和蓝色圆圈交叠"` | `alt="image"` |
| `alt=""`（用于仅装饰用的图片，如分隔符） | `alt="Cannot load image"` |

对于翻译的工作坊，Alt文本必须使用页面的语言：
- 英文：`alt="A friendly chatbot welcoming users"`
- 葡萄牙语：`alt="Um chatbot amigavel dando boas-vindas aos usuarios"`
- 韩语：`alt="사용자를 환영하는 친근한 챗봇"`

## 文件命名

- 使用**小写**文件扩展名：`.png`，`.jpg`，`.gif`（不要使用`.PNG`，`.JPG`）
- 使用**描述性名称**：`replit-upload-dialog.png`（不要使用`img1.png`）
- 使用**连字符**分隔单词：`color-theory-diagram.png`（不要使用`color_theory_diagram.png`）
- 保持名称简短且有意义

## 图片位置

新的工作坊应该使用`media/`目录（脚手架脚本会自动生成）。某些旧工作坊使用`img/`替代——两者在Hugo中功能相同。

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- 图片放在这里
    screenshot.png
    diagram.png
```

从页面使用相对路径引用图片。在`_index.md`中，使用`media/image.png`。在活动页面和答案键中，使用`../media/image.png`（它们在Hugo中渲染为更深一级）。

{{% notice warning %}}
Hugo从**页面URL**解析相对路径，而不是文件系统位置。对于位于`/workshop/section/activity/`的子页面，路径`../media/file.png`解析为`/workshop/media/file.png`。这是正确的模式。不要“修复”这些`../`路径——它们是有意设计的。
{{% /notice %}}

## GIF动画

GIF动画非常适合展示短时间的交互（点击按钮、拖动元素）。请保持以下方面：

- **短**：建议5-15秒
- **小**：尽量控制在2MB以下（较大的GIF会降低页面加载速度）
- **清晰**：采用适当的帧率。屏幕录制使用10-15fps效果较佳。
- **可访问**：添加Alt文本描述GIF展示的内容

如果动画不是理解内容所必需的，可以考虑用带文字说明的静态图片代替GIF。

## 截图

为工作坊拍摄截图时：

1. **紧密裁剪**到相关区域
2. **使用干净的环境**（不要包含个人书签、通知等）
3. **工作坊内部截图尺寸保持一致**（不要混用1080p和4K截图）
4. **突出显示相关区域** 如果截图包含较多UI内容