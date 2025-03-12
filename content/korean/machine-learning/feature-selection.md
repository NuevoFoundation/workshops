---
title: "Step 5: 특징 선택하기(Feature selection)"
description: "머신러닝에 관한 기초 내용"
prereq: "없음"
difficulty: "중급"
draft: false
weight: 5
---

다음 단계는 적절한 특징(feature)을 선택하는 것입니다. 특징 선택은 머신러닝에서 모델을 학습하는 데 중요한 특징을 선택하는 방법과 과정을 설명하는 용어입니다. 특징(feature)이란 공식에서 사용되는 하나의 변수, 즉 `x`입니다. 이번 프로젝트에서 특징은 축구 선수의 속성 중 하나입니다. <br>
우리는 선형 회귀(Linear Regression) 모델을 사용하고 있으므로, 각 속성이 목표값(즉, 종합 능력치(overall ratings))과 얼마나 상관관계가 있는지가 적절한 특징을 선택하는 기준이 됩니다. <br>
우리는 피어슨 상관계수(Pearson correlation coefficient)를 사용하여 각 열의 상관관계를 계산할 것입니다. 사용할 수 있는 세 가지 방법은 다음과 같습니다:
- 피어슨(Pearson): 표준 상관계수
- 켄달(Kendall): 켄달 타우 상관계수
- 스피어만(Spearman): 스피어만 순위 상관계수

이번 튜토리얼에서는 피어슨(Pearson) 방법을 사용할 것입니다.

```python
# 목표 변수 선택
target = "Overall"

# 피어슨 방법을 사용하여 열 간의 상관관계 찾기
feature_corr = train_data.corr(method ='pearson') [target]

# 특징을 내림차순으로 정렬
feature_corr = feature_corr.sort_values(ascending = False)

# 상위 20개의 특징을 출력
# 전체 목록에서 첫 번째는 항상 "종합 능력치(Overall)"이므로, 1부터 시작합니다.
print(feature_corr[1:21]) 
```

출력 결과:


    Positioning        0.904367
    Special            0.903856
    Finishing          0.899783
    BallControl        0.896988
    ShotPower          0.877842
    Reactions          0.861441
    Volleys            0.834433
    Composure          0.827529
    ShortPassing       0.813074
    Dribbling          0.802565
    LongShots          0.794059
    HeadingAccuracy    0.711129
    Vision             0.671054
    Skill Moves        0.649300
    Curve              0.641426
    Crossing           0.603249
    Potential          0.593139
    Penalties          0.583906
    LongPassing        0.575092
    FKAccuracy         0.569704
    Name: Overall, dtype: float64
    

이제 상위 10개 또는 12개의 특징을 복사하고 붙여 넣습니다. (참고: 공백은 복사하지 마세요.)


```python
# 특징 선택
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

또한, 우리는 index에서 특징 이름만 추출할 수 있습니다. 참고로, 목록에서 첫 번째는 항상 종합 능력치(Overall)이므로, 1부터 시작합니다.


```python
# 시리즈에서 특징 이름을 추출
features = feature_corr[1:21].index.tolist()

# 특징 목록 출력
print(features)
```

출력 결과:


    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']