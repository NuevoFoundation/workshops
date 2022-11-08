import pandas as pd
from sklearn import linear_model 
import statsmodels.api as sm


# Importing data sample
sample_size = 30
original_sample = pd.read_csv("Experience_vs_Salary.csv").sample(n=sample_size)
x0 = original_sample.iloc[:, :-1].values 
y0 = original_sample.iloc[:, 1].values

# Fit the model and add the intercept value to the y0 array.
model0 = linear_model.LinearRegression()
model0.fit(x0,y0)
y0.__add__(model0.intercept_)

# Run the stats model to get the information from the data.
ols = sm.OLS(y0, x0)
ols_result = ols.fit()
print(ols_result.summary())