---
title: "Step 3: Load dataset"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Intermediate"
draft: false
weight: 3
---

Change `mypath` to the folder you extract the dataset file (i.e., `C:\fifa_dataset\`). To verify we loaded it successfully, we use a function called `describe()` to print its statistics. 


```python
# load datasets
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # change it to your own path
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # load datasets
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # change it to your own path
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined