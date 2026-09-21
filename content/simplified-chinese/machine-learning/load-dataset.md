---
title: "步骤三：加载数据集"
description: "机器学习基础"
prereq: "无"
difficulties: ["中级"]
draft: false
weight: 3
---

将 `mypath` 修改为你解压数据集文件的文件夹路径（例如，`C:\fifa_dataset\`）。为了验证我们是否成功加载了数据集，可以使用一个名为 `describe()` 的函数来打印数据集的统计信息。

```python
# 加载数据集
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # 修改为你自己的路径
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # 加载数据集
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # 修改为你自己的路径
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined