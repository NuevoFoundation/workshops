import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import linear_model 
import matplotlib.pyplot as plt
import random

data = pd.read_csv("Experience_vs_Salary-More_Data.csv")
experience = data['Experience']
salary = data['Salary']

x_train, x_test, y_train, y_test = train_test_split(experience,salary, test_size=0.7, train_size=100)
x_train = np.array(x_train).reshape((len(x_train),1))
y_train = np.array(y_train).reshape((len(y_train),1))
x_test = np.array(x_test).reshape(len(x_test), 1)
y_test = np.array(y_test).reshape(len(y_test), 1)

model = linear_model.LinearRegression()
model.fit(x_train, y_train)

experience = 3.4
x_value = np.array([[experience]])

y_predicted = model.predict(x_value)

print(f'Experience = {experience}')
print('Salary = ' + '{:.2f}'.format(y_predicted[0][0]))

y_test_pred = model.predict(x_test)

plt.figure()
plt.scatter(x_test, y_test, color='blue', label='True Values')
plt.plot(x_test, y_test_pred, color='black', linewidth=1, label='Prediction Line')
plt.scatter(x_value, y_predicted, color='red', label='Predicted Value')
plt.xlabel("Experience")
plt.ylabel("Salary")
plt.title('Prediction Result')
plt.legend()
plt.show()

