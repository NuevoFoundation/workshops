---
title: "Step 5: Feature selection"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Intermediate"
draft: false
weight: 5
---

Our next step is selecting proper features. Feature selection is a term in machine learning to describe the method and process of choosing relevant features for the model. A feature is one \(x\) in the formula. In our story, it is an attribute of a soccer player.

Since we are using the linear regression model, how attribute correlated to the target ("Overall") becomes the criteria to choose the right features.

We use a built-in function correlation `corr` to Compute pairwise correlation of columns. There are three methods we can choose from,
- pearson : standard correlation coefficient
- kendall : Kendall Tau correlation coefficient
- spearman : Spearman rank correlation

In this tutorial we use pearson.


```python
# select target
target = "Overall"

# To find the correlation among the columns using pearson method 
feature_corr = train_data.corr(method ='pearson') [target]

# sort the features
feature_corr = feature_corr.sort_values(ascending = False)

# show the top 20 features
# note that we are start from 1 not zero, because Overall is alwasy on the top of the list
print(feature_corr[1:21]) 
```

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
    

Now, we can copy and paste the top 10 or top 12 features. (Note: Please don't copy the space)


```python
# select some features
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Also, we can just extract the feature names from the index. Note that, we start from 1 because we do not want include `overall` who is alwasy on the top of the list.


```python
# extract feature names from the series
features = feature_corr[1:21].index.tolist()

# show the features
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']