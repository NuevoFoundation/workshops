---
title: "Machine Learning (FIFA) - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This answer key provides the complete Python code for the FIFA Player Rating Prediction workshop. Students use a Jupyter notebook with the FIFA 2019 dataset from Kaggle. Results may vary slightly due to the random train/test split.
{{% /notice %}}

## Step 2: Setup and Imports

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

## Step 3: Load the Dataset

```python
mypath = "C:/fifa_dataset/"  # change to your actual path
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

## Step 4: Preprocess the Data

### View all positions

```python
print(fifa_data['Position'].dropna().unique())
```

### Filter by position (strikers)

```python
fifa_data_by_pos = fifa_data[fifa_data['Position'] == 'ST']
```

### Plot histogram of overall ratings

```python
target = "Overall"
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
plt.xlabel("Overall Rating")
plt.ylabel("Number of Players")
plt.title("Distribution of Striker Overall Ratings")
plt.show()
```

### Split into training and testing sets

```python
train_data, test_data = train_test_split(fifa_data_by_pos, test_size=0.25)
print("The # of training data is " + str(len(train_data)))
print("The # of testing data is " + str(len(test_data)))
```

## Step 5: Feature Selection

### Find top correlated features

```python
target = "Overall"
feature_corr = train_data.corr(method='pearson')[target]
feature_corr = feature_corr.sort_values(ascending=False)
print(feature_corr[1:21])
```

### Extract feature names as a list

```python
features = feature_corr[1:21].index.tolist()
print(features)
```

**Typical top features** (order may vary with random split):
```python
features = ["Positioning", "Finishing", "Special", "BallControl",
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

## Step 6: Train the Model

```python
x_train = train_data[features]
y_train = train_data[target]

model = LinearRegression().fit(x_train, y_train)
print("Score: " + str(model.score(x_train, y_train)))
```

**Expected output:** Score of approximately `0.9875` (98.75% accuracy on training data).

## Step 7: Test the Model

```python
test_data = test_data.sort_values([target], ascending=False)
x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)

test_data['Predicted Overall'] = y_pred.copy()
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

test_data[["Name", "Nationality", "Club", "Overall",
           "Predicted Overall", "Difference (%)"]]
```

**Expected results:** Predictions typically within 1-3% error margin. Example:

| Player | Actual | Predicted | Error |
|--------|--------|-----------|-------|
| Cristiano Ronaldo | 94 | ~92.0 | ~-2.2% |
| R. Lewandowski | 90 | ~88.1 | ~-2.1% |
| L. Suarez | 91 | ~90.5 | ~-0.5% |

{{% notice tip %}}
**For teachers:** Results vary with each run because `train_test_split` randomly divides the data. The key learning is that the model achieves high accuracy (R² > 0.95) regardless of the specific split. Encourage students to run it multiple times and compare.

**Extension ideas from the workshop:**
- Try different positions (GK, CB, CM) instead of ST
- Try different target variables (Value, Wage instead of Overall)
- Change the train/test ratio (try 0.1 or 0.5 instead of 0.25)
- Use fewer or more features and compare the score
{{% /notice %}}
