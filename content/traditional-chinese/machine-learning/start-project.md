---
title: "步驟 2：開始項目"
description: "機器學習基礎"
prereq: "無"
difficulties: ["中級"]
draft: false
weight: 2
---

開啟 jupyter notebook，選擇新建筆記本 > Python 3。

在文件的開頭，我們先匯入一些必要的套件。

```python
# 匯入必要的套件
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    <ipython-input-2-122d997e4faf> in <module>()
          1 # 匯入必要的套件
    ----> 2 import pandas as pd
          3 import numpy as np
          4 import matplotlib.pyplot as plt
          5 from sklearn.linear_model import LinearRegression
    

    ImportError: 沒有名為 pandas 的模組