---
title: "步驟 3：載入資料集"
description: "機器學習基礎"
prereq: "none"
difficulties: ["中階"]
draft: false
weight: 3
---

將 `mypath` 更改為您解壓縮資料集檔案的資料夾（例如，`C:\fifa_dataset\`）。為了驗證我們是否成功載入資料集，我們會使用名為 `describe()` 的函式來列印其統計資訊。

```python
# 載入資料集
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # 根據您的路徑進行修改
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # 載入資料集
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # 根據您的路徑進行修改
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined