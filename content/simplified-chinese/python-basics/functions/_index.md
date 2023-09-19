---
title: "函数"
weight: 5
draft: false
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/0207zoiJ6s8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**函数** 是组织相似或重复代码的一种方式。与其重复写相同的代码，我们可以将所需的代码放在函数中，然后在需要使用它的任何地方调用它。

{{% notice info %}}
**注意** 函数的目的是帮助减少程序中的重复代码。
{{% /notice %}}

## 创建函数

### 定义函数 - 名称与参数

要在Python中创建函数，我们必须使用 `def` 关键字。该关键字告诉代码编辑器以下是一个函数。`def` 后面跟着函数的名称。函数的名称用于从程序的其他部分调用您的函数。
为了通用化函数（我们可以在多个地方使用它），我们可能需要向函数传递一些信息。这通过参数实现。它们位于括号 `()` 中，并紧跟在函数名称之后。如果不需要参数，则可以忽略它们。函数声明以冒号结尾。
每次调用函数时，后续行上的语句都会被执行。在这里，`Tab`符号非常重要，所以你需要确保代码有正确缩进。函数定义行之后的每个缩进行（除了注释之外）都会在调用函数时执行。

以下是一个函数的格式：

```python
def functionName(parameter1, parameter2, ...):
    # 编写一些代码
    # 从代码的其他部分使用 functionName 调用此函数
```
![Graphic describing the structure of a function](../img/annotated-screenshot-function.png)

{{% notice warning %}}
确保函数的第一行始终以冒号 `:` 结尾。
{{% /notice %}}

### 编写函数内容

In Python, indentation defines which code is controlled by the function. In the example below, in order to call the function `sectionA`, you must specify 2 parameters, `startMeasure` and `endMeasure`. When you call `sectionA`, the 3 `fitMedia` function lines are run. The 2 `fitMedia` function calls at the bottom are outside of the `sectionA` function body.

在Python中，缩进定义了由函数控制的代码。在下面的示例中，要调用函数 `sectionA`，你必须指定 2 个参数 `startMeasure` 和 `endMeasure`。当调用 `sectionA` 时，会运行 3 个 `fitMedia` 函数代码行。底部的 2 个 `fitMedia` 函数调用位于 `sectionA` 函数内容之外。

```python
#Section A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

 fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
 fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)   
```

位于 `sectionA` 函数下面缩进的代码是每次调用函数 `sectionA` 时执行的代码。

{{% notice warning %}}
**注意**： 由于 Python 中缩进非常重要，请确保函数的内容始终以 2 个空格开始
{{% /notice %}}

## 从函数返回一个值

许多情况下，我们不仅想要打印结果或执行操作，还想要函数将执行操作的结果返回。为此，我们可以使用 `return` 关键字。

```python
def my_function(x):
    return 5 * x

print(my_function(3)) # 输出 15
print(my_function(5)) # 输出 25
```

## 使用函数 - 函数调用

要调用函数，请在你希望执行函数的任何地方输入函数的名称和其参数。例如，要调用函数 `sectionA`，我们可以这样做：

```python
sectionA(1,9)
```
在此示例中，`sectionA` 将以 `startMeasure` 值为 `1` 和 `endMeasure` 值为 `9` 进行调用。

{{% notice warning %}}
**小心：** 在 Python 中创建函数时，必须在调用函数之前定义函数及其内容。换句话说，在代码中，你需要将函数声明放在函数调用之前。否则，将收到类似下面的 NameError。参考以下示例图：
![Example showing the function called before the name defintion and the producting NameError](../img/annotated-screenshot-function4-error.png)
{{% /notice %}}

### 小挑战一 - 创建你自己的函数！

**挑战：** 创建一个名为 `addNumbers` 的函数，它接受名为 `number1` 和 `number2` 的 2 个参数，并在控制台上打印它们的总和。使用参数 `3` 和 `5` 调用函数 `addNumbers`。
控制台上会打印什么？

<iframe src="https://trinket.io/embed/python/52ce76e1d0" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### 小挑战二

让我们尝试创建一些简单的数学函数。创建一个名为 `add` 的函数，该函数接受两个参数 `number1` 和 `number2`，并返回这两个数字的总和。

{{% notice tip %}}

首先复制 triple 函数的结构。更改 triple 函数的名称，并将参数 number 替换为 number1 和 number2，用逗号分隔。number1 和 number2 都应为<font color="blue">整数(int)</font>，不要忘记将它们相加！

{{% /notice %}}

为了检查你的函数是否正常工作，请在函数定义之后添加以下代码，该代码调用 `add()` 函数并将其值保存在一个变量中。例如：

<pre>
value2 = add(2, 3)
<font color="blue">print</font>("This should print 5: " + str(value2))
</pre>

### 小挑战三

你能否创建减法、乘法和除法的函数？

通过调用每个函数并保存其返回值来测试这些函数，然后将其打印到控制台上。