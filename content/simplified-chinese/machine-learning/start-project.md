---
title: "步骤 2: 开始项目"
description: "机器学习基础"
prereq: "无"
difficulties: ["中级"]
draft: false
weight: 2
---

打开 jupyter notebook，新建 notebook > python 3

在文件的开头，让我们导入一些必要的包。

```python
# 导入必要的包
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    <ipython-input-2-122d997e4faf> in <module>()
          1 # 导入必要的包
    ----> 2 import pandas as pd
          3 import numpy as np
          4 import matplotlib.pyplot as plt
          5 from sklearn.linear_model import LinearRegression
    

    ImportError: No module named pandas