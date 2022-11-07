# Plotting data from data set.
import pandas as pd
from sklearn import linear_model 
import statsmodels.api as sm


# Importing old
original_sample = pd.read_csv("Experience_vs_Salary.csv").sample(30)
x0 = original_sample.iloc[:, :-1].values 
y0 = original_sample.iloc[:, 1].values # Get all the values from "Salary"
model0 = linear_model.LinearRegression()
model0.fit(x0,y0)

y0.__add__(model0.intercept_)
ols = sm.OLS(y0, x0)
ols_result = ols.fit()
print(ols_result.summary())