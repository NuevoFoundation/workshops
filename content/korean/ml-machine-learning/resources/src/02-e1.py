# Plotting data from data set.
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd


# Importing dataset
dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

plt.scatter(x, y, color='red')
plt.title('Salary vs Experience')
plt.xlabel('Experience (in years)')
plt.ylabel('Salary')
plt.show()