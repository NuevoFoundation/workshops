# Plotting data from data set.
import pandas as pd
from sklearn import linear_model 
import matplotlib.pyplot as plt

# Importing old
original_sample = pd.read_csv("Experience_vs_Salary.csv")
x0 = original_sample.iloc[:, :-1].values 
y0 = original_sample.iloc[:, 1].values # Get all the values from "Salary"
model0 = linear_model.LinearRegression()
model0.fit(x0,y0)

# Fir model to new sample

random_sample = pd.read_csv("Experience_vs_Salary-More_Data.csv").sample(n=30)
x1 = random_sample.iloc[:, :-1].values
y1 = random_sample.iloc[:, 1].values
model1 = linear_model.LinearRegression()
model1.fit(x1,y1)

print('############## VALUES ################')
print('Old Coefficient: ' + '{:.2f}'.format(model0.coef_[0]))
print('Old Intercept: ' + '{:.2f}'.format(model0.intercept_))
print('New Coefficient: ' + '{:.2f}'.format(model1.coef_[0]))
print('New Intercept: ' + '{:.2f}'.format(model1.intercept_))
print('')
print('############## NEW SAMPLE ################')
print(random_sample)

# Visualize data set
plt.scatter(x1, y1, color = 'red')
plt.plot(x0, model0.predict(x0), color='green', label="Original Sample")
plt.plot(x1, model1.predict(x1), color='blue', label="New Sample")
plt.title('Salary vs Experience')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.legend()
plt.show()