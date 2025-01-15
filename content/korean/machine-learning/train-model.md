---
title: "Step 6: 모델 훈련하기(Train the model)"
description: "머신러닝에 관한 기초 내용"
prereq: "없음"
difficulty: "중급"
draft: false
weight: 6
---

이제 모델을 훈련시킬 준비가 되었습니다. 우리는 LinearRegression().fit()을 사용하여 모델을 훈련할 것입니다. 이 모델은 `score()`라는 함수를 가지고 있으며, 이는 예측의 결정 계수 `R²`를 반환합니다. 지금은 `R²` 값이 높을수록 더 좋은 모델이라는 것만 기억하면 됩니다.

```python
# 훈련 데이터 준비
x_train = train_data[features]
y_train = train_data[target]

# 선형 회귀 적용
# fit()는 모델을 훈련하는 함수입니다.
model = LinearRegression().fit(x_train,y_train)

# 모델의 점수 출력
print("Score: " + str(model.score(x_train,y_train)))
```

출력 결과:


    Score: 0.9875123836174596