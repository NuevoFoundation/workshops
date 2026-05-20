import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import linear_model 
import sklearn.metrics as sm
import matplotlib.pyplot as plt

data = pd.read_csv("Experience_vs_Salary-More_Data.csv")
experience = data['Experience']
salary = data['Salary']

test_size=30
x_train, x_test, y_train, y_test = train_test_split(experience,salary, test_size=test_size, random_state=42)
x_train = np.array(x_train).reshape((len(x_train),1))
y_train = np.array(y_train).reshape((len(y_train),1))
x_test = np.array(x_test).reshape(len(x_test), 1)
y_test = np.array(y_test).reshape(len(y_test), 1)

model = linear_model.LinearRegression()
model.fit(x_train, y_train)

y_train_pred = model.predict(x_train)

plt.figure()
plt.scatter(x_train, y_train, color='blue', label="True Value")
plt.plot(x_train, y_train_pred, color='black', linewidth=5, label="Prediction")
plt.xlabel("Experience")
plt.ylabel("Salary")
plt.title('Prediction Result of Training Data')
plt.legend()
plt.show()

y_test_pred = model.predict(x_test)

plt.figure()
plt.scatter(x_test, y_test, color='green', label='True Value')
plt.plot(x_test, y_test_pred, color='black', linewidth=5, label='Prediction')
plt.xlabel("Experience")
plt.ylabel("Salary")
plt.title('Prediction Result of Test Data')
plt.legend()
plt.show()


print("Test R2 =", round(sm.r2_score(y_test, y_test_pred), 2))
print("Train R2 =", round(sm.r2_score(y_train, y_train_pred), 2))