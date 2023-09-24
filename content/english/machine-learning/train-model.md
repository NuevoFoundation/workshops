---
title: "Step 6: Train the model"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Intermediate"
draft: false
weight: 6
---

Now we are ready to train the model. we use 'LinearRegression().fit()' to train it. and this model object has a `score()` function to return the score of the model, which is the coefficient of determination R^2 of the prediction. For now you only need to know the higher the better.

```python
# prepare training data
x_train = train_data[features]
y_train = train_data[target]

# Applying Linear regression
# fit() is the method to train the model
model = LinearRegression().fit(x_train,y_train)

# Model's score
print("Score: " + str(model.score(x_train,y_train)))
```

    Score: 0.9875123836174596