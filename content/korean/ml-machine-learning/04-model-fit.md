---
title: "모델 적합도"
prereq: "파이썬"
icon: ""
draft: false
weight: 4
---

# 우리가 만든 모델이 데이터를 잘 설명할까요?

우리가 만든 선형 방정식은 랜덤 오류 값(**ε**)을 포함하고 있습니다:

<h3>
\[
    급여 = 9449.96(경력) + 25792.20 + ε
\]
</h3>

**ε**는 우리가 정확히 알 수 없는 오류 값입니다. 그래서 다음과 같은 질문을 해봐야 합니다:

1. 우리의 모델이 현실을 얼마나 잘 반영하나요? 또는 모델이 우리가 가진 데이터를 얼마나 잘 설명하나요?
2. 경력이 정말로 급여에 영향을 미치는지 어떻게 알 수 있을까요?

이를 알아내는 방법은 여러 가지가 있지만, 머신 러닝과 통계의 세계에서는 이를 평가할 수 있는 `R-제곱(R-Squared 또는 R^2)`이라는 값을 사용합니다.

[R-제곱(R-Squared, R^2)](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.): R-제곱은 모델의 적합도를 나타내는 측정값입니다. 회귀 분석에서는 회귀선이 실제 데이터를 얼마나 잘 근사 하는지를 통계적으로 평가하는 척도입니다. 간단히 말해, R^2 값이 1에 가까울수록 우리가 선택한 수학적 모델이 데이터를 잘 설명하고, 실제 값을 정확히 예측할 가능성이 높다는 뜻입니다.

## 연습 문제 1: R-제곱(R-Squared) 찾기

`Experience_vs_Salary-More_Data` 파일에는 회사 직원 10,000명 이상의 경력과 급여 데이터가 포함되어 있습니다. 아래 Replit 코드를 실행하면, 처음 선택된 직원 30명의 샘플로부터 표준 오류와 R-제곱(R²) 값을 계산합니다. 

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">Replit 실행하기</a>

결과를 보면, R<sup>2</sup> 값이 0.973로 나타납니다. 이 값을 통해 "직원의 경력이 급여와 관련이 있을 확률이 97.3%이다"라고 자신 있게 말할 수 있습니다. 또한, 샘플 크기(sample_size) 변수를 더 크게 또는 더 작게 변경하여 R<sup>2</sup> 값이 어떻게 변하는지 확인해 보세요. 이제 예측을 시작해 봅시다!
