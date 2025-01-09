---
title: "Step 3: 데이터셋 불러오기"
description: "머신러닝에 관한 기초 내용"
prereq: "없음"
difficulty: "중급"
draft: false
weight: 3
---

`mypath`를 데이터셋 파일을 추출한 폴더 경로로 변경하세요(예: C:\fifa_dataset\). 데이터가 성공적으로 불러와졌는지 확인하기 위해 `describe()` 함수를 사용하여 통계 정보를 출력합니다. 


```python
# 데이터셋 불러오기
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # 자신의 경로로 변경하세요
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

출력 결과:


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # load datasets
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # change it to your own path
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined