# Plotting data from data set.
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import random


# Importing dataset
dataset = pd.read_csv("Experience_vs_Salary.csv")
experience = list(dataset.iloc[:, :-1].values)
salary = list(dataset.iloc[:, 1].values)

file_object = open('Experience_vs_Salary-More_Data.csv', 'w')
file_object.write('Experience,Salary\n')
for idx, curr_exp in enumerate(experience):
    file_object.write(f'{curr_exp[0]},{salary[idx]}\n')
    if(idx == 0): continue
    if(idx == len(experience) - 1): break

    curr_salary = salary[idx]
    next_exp = experience[idx + 1][0]
    next_salary = salary[idx + 1]

    # Create random records
    for e in range(0,501):
        random_exp = random.uniform(curr_exp[0], next_exp)
        random_salary = 0
        randmon_error = 100 * np.random.randn(10,1)
        if(curr_salary > next_salary):
            random_salary = random.uniform(next_salary, curr_salary) + randmon_error[0][0]
        else:
            random_salary = random.uniform(curr_salary, next_salary) + randmon_error[0][0]
        
        file_object.write('{:.1f}'.format(random_exp) + ',' + '{:.0f}'.format(random_salary) + '\n')

file_object.close()   
        









