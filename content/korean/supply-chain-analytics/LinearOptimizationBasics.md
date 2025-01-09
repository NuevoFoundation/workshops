---
title: "선형 최적화 - 기초"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---


## 최적화란 무엇일까?
공식 정의: 수학적 최적화 모델은 목표 함수와 제약 조건으로 이루어진 방정식이나 부등식의 시스템이에요.


선형 최적화는 복잡하게 들릴 수 있어요. 하지만 시작할 때는 몇 가지 기본 개념만 이해하면 돼요.


## 최적화란?

최적화는 제한된 자원을 가지고 가장 효율적인 결정을 내리는 방법이에요. 예를 들어, Xbox를 할 수 있는 시간이 제한되어 있다면, 가장 좋아하는 게임을 최대한 오래 하도록 시간을 쓰는 것이 최적화된 선택이겠죠.


최적화 문제에서는 컴퓨터 사용 시간이나 계란의 수처럼 현실의 제약을 수학 공식으로 나타내요. (보세요, 결국 우리는 대수학을 사용하는 거예요!)
 

요즘에는 Excel이나 Python을 사용해서 이런 문제를 직접 공식을 쓰지 않고도 풀 수 있어요.
 

최적화 문제를 풀기 위해 알아야 할 세 가지 주요 부분은 다음과 같아요: 의사결정 변수, 목표 함수, 제약 조건.


## 의사결정 변수

의사결정 변수는 여러분이 최적화하고 싶은 항목이에요. 예를 들어, 계란의 수 같은 것이 될 수 있죠. 컴퓨터는 이 변수를 최적으로 계산해 주고, 가장 적절한 양을 추천해 줘요.
 
 
<img src= ../img/decision_var.jpg alt="Image showing the two types of cookies with #1 and #2 written" width="600" height="300">

## 목표 함수

목표 함수는 여러분의 목표를 설명하는 식이에요. 예를 들어, 베이커리에서 수익을 최대화하고 싶다면 어떻게 수익을 계산할까요? 각 쿠키의 수익에 쿠키를 얼마나 만들 것인지 곱한 값이 될 거예요. 여기서 의사결정 변수가 사용되는 거죠!

 
![Image that shows the calculation of the objective function using the pictures of the cookies and the pictures of money](../img/objective_function.jpg)

## 제약 조건

제약 조건은 여러분이 가지고 있는 제한을 의미해요. 예를 들어, 계란의 수가 제한되어 있다면, 사용하려는 총 계란의 수가 가지고 있는 계란 수보다 적거나 같아야 해요. 이렇게 해서 방정식을 만들 수 있어요.
 


![Image that shows the constraint function in terms of pictures of cookies and pictures of eggs](../img/constraint_equation.jpg)
