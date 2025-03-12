---
title: "Step 2: 프로젝트 시작하기"
description: "머신러닝에 관한 기초 내용"
prereq: "없음"
difficulty: "중급"
draft: false
weight: 2
---

Jupyter Notebook을 열고, 새 노트북을 생성한 후 Python 3을 선택하세요.

파일의 시작 부분에 필요한 패키지를 먼저 불러옵니다.

```python
# 필요한 패키지 불러오기
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

출력 결과:


    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    <ipython-input-2-122d997e4faf> in <module>()
          1 # Importing necessary packages
    ----> 2 import pandas as pd
          3 import numpy as np
          4 import matplotlib.pyplot as plt
          5 from sklearn.linear_model import LinearRegression
    

    ImportError: No module named pandas