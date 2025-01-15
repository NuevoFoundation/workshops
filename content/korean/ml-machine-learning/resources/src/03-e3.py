# Plotting data from data set.
import pandas as pd
from sklearn import linear_model 
import matplotlib.pyplot as plt

# Importing old
number_of_samples = 100
dataset = pd.read_csv("Experience_vs_Salary-More_Data.csv")
coefficients = []

for index in range(1, number_of_samples + 1):
    sample = dataset.sample(int(number_of_samples/2), ignore_index=False)
    x = sample.iloc[:, :-1].values
    y = sample.iloc[:, 1].values
    model = linear_model.LinearRegression()
    model.fit(x,y)

    coefficients.append(float('{:.2f}'.format(model.coef_[0])))

print(coefficients)
plt.hist(coefficients)
plt.ylabel('Occurence')
plt.xlabel('Coefficient')
plt.show()