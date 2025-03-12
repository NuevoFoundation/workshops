---
title: "예측하기"
prereq: "파이썬"
icon: ""
draft: false
weight: 5
---

# 모델 학습시키기

모델이 값을 예측하려면 학습이 필요합니다. 그런데, 어떻게 학습을 시킬까요? 사실, 우리는 이미 이 작업을 하고 있었답니다!😉

모델을 학습시키는 과정은 데이터와 모델 간의 관계가 적절한지 확인하는 것을 말합니다. 우리는 R<sup>2</sup> 값이 1에 가까운지 확인함으로써 이를 수행했습니다. 이제, 10,000개 이상의 데이터셋을 사용해 훈련 데이터와 테스트 데이터를 만들어야 합니다. 훈련 데이터는 초기 샘플 30개 대신 무작위 샘플을 사용합니다. 텍사스 엘파소 대학교에 따르면, 데이터의 30%를 샘플로 사용하는 것이 정확한 모델을 만드는 이상적인 방법이라고 합니다. ([70/30 또는 80/20 훈련과 테스트 데이터 비율에 대한 자세한 내용은 여기를 참고하세요.](https://scholarworks.utep.edu/cs_techrep/1209/)) 직원 수가 증가하면 데이터셋도 함께 늘어나고 R<sup>2</sup>값도 변하게 됩니다. 따라서, 직원 데이터셋이 10,000개 이상으로 업데이트될 때마다 이 과정을 반복해야 가장 최신의 상태로 모델을 유지할 수 있습니다. 


# 예측하기

아래 Replit에서 코드는 10,000개 이상의 데이터를 나누어 훈련 데이터와 테스트 데이터를 생성하고, 각각의 데이터셋에 대해 예측을 실행합니다. 

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">Replit 실행하기</a>

결과 그래프를 보면, 훈련 데이터와 테스트 데이터에서 생성된 예측선(prediction line)이 매우 비슷하다는 것을 알 수 있습니다. 또한, 두 데이터셋에 대해 계산된 R<sup>2</sup> 값도 거의 동일하거나 때로는 완전히 동일합니다. 이제 아래 코드를 사용해 `경력` 변수를 원하는 값으로 변경해 보세요. 입력한 경력을 기준으로 예측된 급여를 그래프에서 확인할 수 있습니다.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">Replit 실행하기</a>