# Plotting data from data set.
import pandas as pd
from sklearn import linear_model 

# Importing dataset
dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values # Get all the values from "Experience"
y = dataset.iloc[:, 1].values # Get all the values from "Salary"

# Set linear model and fit
model = linear_model.LinearRegression()
model.fit(x,y)

print('')
print('============================== RESULTS ==========================')
print('Coefficient / Slope: ' + '{:.2f}'.format(model.coef_[0]))
print('Intercept: ' + '{:.2f}'.format(model.intercept_))