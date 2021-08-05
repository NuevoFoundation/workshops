---
title: "Activity 1: FIFA Linear Regression"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Beginner"
draft: false
---

# Let's learn some machine learning to evaluate player overall ratings in FIFA video game

<p>Machine learning is the science to study *algorithms* and *models* that enable computers to recognize things, make decisions, even predict results without explicit instructions. As an example, when talking to your phone assistant such as Siri or Cortana, machine learning helps to translate your voice into text and further understand what you requested. Is that amazing?
</p>
<p>
Today we are going to show you how to *teach* a computer evaluate overall ratings for soccer player based on their attributes step by step.  
</p>
<p> Let's get on to it! </p>

## A little background

<p>
Assume that there's a formula to calculate the "Overall" ratings for soccer players by EA Sports (The developer of FIFA 2019). With this formula, we can easily calculate the overall ratings for any player even he/she is not in the game. The problem is, we don't know what exactly the formula looks like. <br>
We know the *input* which consists of player attributes and the *output* which is the Overall ratings. Then we can use an approach called "regression" to "estimate" the formula based on the input/output.
</p>
<p>
Today, we are going to use a simple model called Linear Regression. 
Let assume the formula that calculates the overall ratings of soccer player $ y = f(x)$ is
\[
    f(x) = ax + b
\]
The linear regression aims to figure out $a$ and $b$. The formula $f(x)$ is called "model" in machine learning, and the process of solve/estimate the model is called "training" the model. Once we trained the model, we can use it to predict target $y$ of new data.
</p>
<p>   
Back to our story, if we only have 1 variable $x$, estimate $f(x)$ should be easy. Everyone should be able to solve it with a pen and a piece of paper. However, when $x$ is a long list of attributes of soccer players like speed, power, passing, tackling, it becomes complicated. The formula should be rewritten into
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Then we have to feed the model with a lot of high-quality data to make the model more closer to the "real" formula. Let's get started!
</p>

## Step 1: get dataset

FIFA 2019 is a video soccer game. All the players in this game have an overall rating as well as a lot of attributes such as crossing, finishing, etc. 

We are heading to the website called kaggle.com to get our dataset. <br>

[FIFA19 dataset](https://www.kaggle.com/karangadiya/fifa19/)

<br>
 *Note: you may need to sign up to get the download link*.
<br>

On this page, you can find a lot of information about this dataset, take some time to browse it and familiarize the dataset.
![kaggle_fifa_dataset.png](kaggle_fifa_dataset.png)

After you download it, extract the zip file to a folder, let's say `C:\fifa_dataset\`.

## Step 2: start the project

Open jupyter notebook, new notebook > python 3

At the beginning of the file, let's import some necessary packages.


```python
# Importing necessary packages
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```


    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    <ipython-input-2-122d997e4faf> in <module>()
          1 # Importing necessary packages
    ----> 2 import pandas as pd
          3 import numpy as np
          4 import matplotlib.pyplot as plt
          5 from sklearn.linear_model import LinearRegression
    

    ImportError: No module named pandas


## Step 3: load dataset
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


## Step 4: Pre-process data

By now, we have imported our dataset. In real life, each soccer player has a specific position. Different positions require  strength in different attributes. So let's narrow down the scope to the striker. 
<br>

First, let's list all the positions.
This statement looks a little bit longer, but it does the work. The `fifa_data['position']` selects position column of the `fifa_data`, the `dropna()` eliminates cells that are blank, and `unique()` remove all duplicated items for us.


```python
# to find out how many positions are there
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']
    

Now we can filter data by position "ST". You're encouraged to select other positions to see what's the difference.


```python
# get players by position
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Let's plot a histogram for overall ratings of all strikers.


```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```




    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)


![png](output_11_1.png)

Next, we want to split the data into two sets, one is used to train the model, another one is used to verify the trained model is good.

You may think, we should leave as much as possible data for training because it makes the model better. The model fits better, but only for training datasets. When you apply the model to testing data, the prediction accuracy could go down. This is called "overfitting".

Now, we leave 25% of the data for testing.


```python
# split data into train_data and test_data randomly
# you're weclome to change the ratio of test_size to see what will happen
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# print the number of players in train_data and test_data
# len() gives you the number of players in numerical format
# str() converts numerical value into string
print("The # of training data is " + str(len(train_data)))
print("The # of testing data is " + str(len(test_data)))
```

    The # of training data is 1614
    The # of testing data is 538
    

# Step 5: feature selection

Our next step is selecting proper features. Feature selection is a term in machine learning to describe the method and process of choosing relevant features for the model. A feature is one $x$ in the formula. In our story, it is an attribute of a soccer player.

Since we are using the linear regression model, how attribute correlated to the target ("Overall") becomes the criteria to choose the right features.

We use a built-in function correlation `corr` to Compute pairwise correlation of columns. There are three methods we can choose from, 
- pearson : standard correlation coefficient
- kendall : Kendall Tau correlation coefficient
- spearman : Spearman rank correlation

In this tutorial we use pearson.


```python
# select target
target = "Overall"

# To find the correlation among the columns using pearson method 
feature_corr = train_data.corr(method ='pearson') [target]

# sort the features
feature_corr = feature_corr.sort_values(ascending = False)

# show the top 20 features
# note that we are start from 1 not zero, because Overall is alwasy on the top of the list
print(feature_corr[1:21]) 
```

    Positioning        0.904367
    Special            0.903856
    Finishing          0.899783
    BallControl        0.896988
    ShotPower          0.877842
    Reactions          0.861441
    Volleys            0.834433
    Composure          0.827529
    ShortPassing       0.813074
    Dribbling          0.802565
    LongShots          0.794059
    HeadingAccuracy    0.711129
    Vision             0.671054
    Skill Moves        0.649300
    Curve              0.641426
    Crossing           0.603249
    Potential          0.593139
    Penalties          0.583906
    LongPassing        0.575092
    FKAccuracy         0.569704
    Name: Overall, dtype: float64
    

Now, we can copy and paste the top 10 or top 12 features. (Note: Please don't copy the space)


```python
# select some features
features = ["Positioning", "Finishing", "Special", "BallControl", 
            "ShotPower", "Reactions", "Volleys", "Composure", "ShortPassing"]
```

Also, we can just extract the feature names from the index. Note that, we start from 1 because we do not want include `overall` who is alwasy on the top of the list.


```python
# extract feature names from the series
features = feature_corr[1:21].index.tolist()

# show the features
print(features)
```

    ['Positioning', 'Special', 'Finishing', 'BallControl', 'ShotPower', 'Reactions', 'Volleys', 'Composure', 'ShortPassing', 'Dribbling', 'LongShots', 'HeadingAccuracy', 'Vision', 'Skill Moves', 'Curve', 'Crossing', 'Potential', 'Penalties', 'LongPassing', 'FKAccuracy']
    

## Step 6: train the model
Now we are ready to train the model. we use 'LinearRegression().fit()' to train it. and this model object has a `score()` function to return the score of the model, which is the coefficient of determination R^2 of the prediction. For now you only need to know the higher the better. 


```python
# prepare training data
x_train = train_data[features]
y_train = train_data[target]

# Applying Linear regression
# fit() is the method to train the model
model = LinearRegression().fit(x_train,y_train)

# Model's score
print("Score: " + str(model.score(x_train,y_train)))
```

    Score: 0.9875123836174596
    

## Step 7: try the model on testing data

Now we are using the trained model to estimate players in `test_data`. Similar to what we do to the `train_data`, we create `x_test` and `y_test`.

`model.predict()` will generate a list of predicted results.


```python
# we would like to sort test data on target value ("Overall")
test_data = test_data.sort_values([target], ascending=False)

x_test = test_data[features]
y_test = test_data[target]

y_pred = model.predict(x_test)
```

Let's compare with the actual overall ratings


```python
# add a new column of predicted overall to test_data
test_data['Predicted Overall'] = y_pred.copy()

# add a new column of prediction difference ratio to test_data
difference = (y_pred - y_test) / y_test * 100
test_data['Difference (%)'] = difference

# print the results
test_data[["Name", "Nationality", "Club", "Overall", "Predicted Overall", "Difference (%)"]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Name</th>
      <th>Nationality</th>
      <th>Club</th>
      <th>Overall</th>
      <th>Predicted Overall</th>
      <th>Difference (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Cristiano Ronaldo</td>
      <td>Portugal</td>
      <td>Juventus</td>
      <td>94</td>
      <td>91.973701</td>
      <td>-2.155638</td>
    </tr>
    <tr>
      <th>10</th>
      <td>R. Lewandowski</td>
      <td>Poland</td>
      <td>FC Bayern München</td>
      <td>90</td>
      <td>88.135513</td>
      <td>-2.071652</td>
    </tr>
    <tr>
      <th>23</th>
      <td>S. Agüero</td>
      <td>Argentina</td>
      <td>Manchester City</td>
      <td>89</td>
      <td>87.807637</td>
      <td>-1.339733</td>
    </tr>
    <tr>
      <th>48</th>
      <td>C. Immobile</td>
      <td>Italy</td>
      <td>Lazio</td>
      <td>87</td>
      <td>85.933234</td>
      <td>-1.226168</td>
    </tr>
    <tr>
      <th>159</th>
      <td>Louri Beretta</td>
      <td>Brazil</td>
      <td>Atlético Mineiro</td>
      <td>83</td>
      <td>81.583941</td>
      <td>-1.706096</td>
    </tr>
    <tr>
      <th>193</th>
      <td>Rodrigo</td>
      <td>Spain</td>
      <td>Valencia CF</td>
      <td>83</td>
      <td>81.784946</td>
      <td>-1.463921</td>
    </tr>
    <tr>
      <th>179</th>
      <td>S. Gnabry</td>
      <td>Germany</td>
      <td>FC Bayern München</td>
      <td>83</td>
      <td>79.978980</td>
      <td>-3.639783</td>
    </tr>
    <tr>
      <th>315</th>
      <td>David Villa</td>
      <td>Spain</td>
      <td>New York City FC</td>
      <td>82</td>
      <td>81.259066</td>
      <td>-0.903578</td>
    </tr>
    <tr>
      <th>362</th>
      <td>Paco Alcácer</td>
      <td>Spain</td>
      <td>Borussia Dortmund</td>
      <td>81</td>
      <td>81.836532</td>
      <td>1.032756</td>
    </tr>
    <tr>
      <th>518</th>
      <td>Alexandre Pato</td>
      <td>Brazil</td>
      <td>Tianjin Quanjian FC</td>
      <td>80</td>
      <td>78.322831</td>
      <td>-2.096461</td>
    </tr>
    <tr>
      <th>499</th>
      <td>L. de Jong</td>
      <td>Netherlands</td>
      <td>PSV</td>
      <td>80</td>
      <td>79.993062</td>
      <td>-0.008672</td>
    </tr>
    <tr>
      <th>523</th>
      <td>K. Gameiro</td>
      <td>France</td>
      <td>Valencia CF</td>
      <td>80</td>
      <td>79.130702</td>
      <td>-1.086622</td>
    </tr>
    <tr>
      <th>721</th>
      <td>B. Yılmaz</td>
      <td>Turkey</td>
      <td>Trabzonspor</td>
      <td>79</td>
      <td>78.092396</td>
      <td>-1.148866</td>
    </tr>
    <tr>
      <th>693</th>
      <td>S. Jovetić</td>
      <td>Montenegro</td>
      <td>AS Monaco</td>
      <td>79</td>
      <td>79.353044</td>
      <td>0.446891</td>
    </tr>
    <tr>
      <th>591</th>
      <td>L. Alario</td>
      <td>Argentina</td>
      <td>Bayer 04 Leverkusen</td>
      <td>79</td>
      <td>79.066446</td>
      <td>0.084109</td>
    </tr>
    <tr>
      <th>569</th>
      <td>André Silva</td>
      <td>Portugal</td>
      <td>Sevilla FC</td>
      <td>79</td>
      <td>79.925229</td>
      <td>1.171175</td>
    </tr>
    <tr>
      <th>588</th>
      <td>M. Philipp</td>
      <td>Germany</td>
      <td>Borussia Dortmund</td>
      <td>79</td>
      <td>78.962674</td>
      <td>-0.047248</td>
    </tr>
    <tr>
      <th>561</th>
      <td>L. Martínez</td>
      <td>Argentina</td>
      <td>Inter</td>
      <td>79</td>
      <td>79.411940</td>
      <td>0.521443</td>
    </tr>
    <tr>
      <th>874</th>
      <td>A. Dzyuba</td>
      <td>Russia</td>
      <td>NaN</td>
      <td>78</td>
      <td>76.855093</td>
      <td>-1.467829</td>
    </tr>
    <tr>
      <th>825</th>
      <td>S. García</td>
      <td>Uruguay</td>
      <td>Godoy Cruz</td>
      <td>78</td>
      <td>77.375588</td>
      <td>-0.800528</td>
    </tr>
    <tr>
      <th>909</th>
      <td>V. Germain</td>
      <td>France</td>
      <td>Olympique de Marseille</td>
      <td>77</td>
      <td>77.509005</td>
      <td>0.661045</td>
    </tr>
    <tr>
      <th>1095</th>
      <td>N. Jørgensen</td>
      <td>Denmark</td>
      <td>Feyenoord</td>
      <td>77</td>
      <td>76.745918</td>
      <td>-0.329976</td>
    </tr>
    <tr>
      <th>992</th>
      <td>J. Sand</td>
      <td>Argentina</td>
      <td>Deportivo Cali</td>
      <td>77</td>
      <td>78.886169</td>
      <td>2.449570</td>
    </tr>
    <tr>
      <th>1137</th>
      <td>Rubén Castro</td>
      <td>Spain</td>
      <td>UD Las Palmas</td>
      <td>77</td>
      <td>77.797984</td>
      <td>1.036343</td>
    </tr>
    <tr>
      <th>895</th>
      <td>M. Harnik</td>
      <td>Austria</td>
      <td>SV Werder Bremen</td>
      <td>77</td>
      <td>76.926679</td>
      <td>-0.095222</td>
    </tr>
    <tr>
      <th>1413</th>
      <td>Alan Carvalho</td>
      <td>Brazil</td>
      <td>Guangzhou Evergrande Taobao FC</td>
      <td>76</td>
      <td>75.922866</td>
      <td>-0.101492</td>
    </tr>
    <tr>
      <th>1327</th>
      <td>K. Dolberg</td>
      <td>Denmark</td>
      <td>Ajax</td>
      <td>76</td>
      <td>76.060831</td>
      <td>0.080041</td>
    </tr>
    <tr>
      <th>1496</th>
      <td>F. Montero</td>
      <td>Colombia</td>
      <td>Sporting CP</td>
      <td>76</td>
      <td>77.017187</td>
      <td>1.338404</td>
    </tr>
    <tr>
      <th>1240</th>
      <td>I. Popov</td>
      <td>Bulgaria</td>
      <td>Spartak Moscow</td>
      <td>76</td>
      <td>75.734350</td>
      <td>-0.349540</td>
    </tr>
    <tr>
      <th>1357</th>
      <td>I. Slimani</td>
      <td>Algeria</td>
      <td>Fenerbahçe SK</td>
      <td>76</td>
      <td>76.494507</td>
      <td>0.650667</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>17484</th>
      <td>J. Lankester</td>
      <td>England</td>
      <td>Ipswich Town</td>
      <td>54</td>
      <td>56.121884</td>
      <td>3.929415</td>
    </tr>
    <tr>
      <th>17469</th>
      <td>J. Gallagher</td>
      <td>Republic of Ireland</td>
      <td>Atlanta United</td>
      <td>54</td>
      <td>54.692444</td>
      <td>1.282304</td>
    </tr>
    <tr>
      <th>17501</th>
      <td>M. Saavedra</td>
      <td>Chile</td>
      <td>Audax Italiano</td>
      <td>54</td>
      <td>54.137463</td>
      <td>0.254561</td>
    </tr>
    <tr>
      <th>17361</th>
      <td>E. McKeown</td>
      <td>England</td>
      <td>Colchester United</td>
      <td>54</td>
      <td>52.796085</td>
      <td>-2.229473</td>
    </tr>
    <tr>
      <th>17399</th>
      <td>Mao Haoyu</td>
      <td>China PR</td>
      <td>Tianjin TEDA FC</td>
      <td>54</td>
      <td>53.964477</td>
      <td>-0.065783</td>
    </tr>
    <tr>
      <th>17313</th>
      <td>M. Howard</td>
      <td>England</td>
      <td>Preston North End</td>
      <td>54</td>
      <td>53.339370</td>
      <td>-1.223389</td>
    </tr>
    <tr>
      <th>17355</th>
      <td>V. Barbero</td>
      <td>Argentina</td>
      <td>Belgrano de Córdoba</td>
      <td>54</td>
      <td>54.011344</td>
      <td>0.021008</td>
    </tr>
    <tr>
      <th>17422</th>
      <td>Y. Ogaki</td>
      <td>Japan</td>
      <td>Nagoya Grampus</td>
      <td>54</td>
      <td>54.041024</td>
      <td>0.075970</td>
    </tr>
    <tr>
      <th>17447</th>
      <td>Xie Weijun</td>
      <td>China PR</td>
      <td>Tianjin TEDA FC</td>
      <td>54</td>
      <td>53.452376</td>
      <td>-1.014118</td>
    </tr>
    <tr>
      <th>17367</th>
      <td>T. Lauritsen</td>
      <td>Norway</td>
      <td>Odds BK</td>
      <td>54</td>
      <td>54.944641</td>
      <td>1.749336</td>
    </tr>
    <tr>
      <th>17482</th>
      <td>F. Al Birekan</td>
      <td>Saudi Arabia</td>
      <td>Al Nassr</td>
      <td>54</td>
      <td>52.727175</td>
      <td>-2.357084</td>
    </tr>
    <tr>
      <th>17609</th>
      <td>S. Jamieson</td>
      <td>Scotland</td>
      <td>St. Mirren</td>
      <td>53</td>
      <td>53.509650</td>
      <td>0.961604</td>
    </tr>
    <tr>
      <th>17716</th>
      <td>M. Knox</td>
      <td>Scotland</td>
      <td>Livingston FC</td>
      <td>53</td>
      <td>52.826053</td>
      <td>-0.328201</td>
    </tr>
    <tr>
      <th>17578</th>
      <td>Lei Wenjie</td>
      <td>China PR</td>
      <td>Shanghai SIPG FC</td>
      <td>53</td>
      <td>52.770581</td>
      <td>-0.432867</td>
    </tr>
    <tr>
      <th>17665</th>
      <td>J. Smylie</td>
      <td>Australia</td>
      <td>Central Coast Mariners</td>
      <td>53</td>
      <td>52.469974</td>
      <td>-1.000049</td>
    </tr>
    <tr>
      <th>17611</th>
      <td>Felipe Ferreyra</td>
      <td>Brazil</td>
      <td>Curicó Unido</td>
      <td>53</td>
      <td>52.861431</td>
      <td>-0.261451</td>
    </tr>
    <tr>
      <th>17765</th>
      <td>A. Georgiou</td>
      <td>Cyprus</td>
      <td>Stevenage</td>
      <td>52</td>
      <td>52.167786</td>
      <td>0.322665</td>
    </tr>
    <tr>
      <th>17757</th>
      <td>L. Smyth</td>
      <td>Northern Ireland</td>
      <td>Stevenage</td>
      <td>52</td>
      <td>51.999942</td>
      <td>-0.000111</td>
    </tr>
    <tr>
      <th>17923</th>
      <td>A. Reghba</td>
      <td>Republic of Ireland</td>
      <td>Bohemian FC</td>
      <td>51</td>
      <td>51.075501</td>
      <td>0.148041</td>
    </tr>
    <tr>
      <th>17956</th>
      <td>C. Murphy</td>
      <td>Republic of Ireland</td>
      <td>Cork City</td>
      <td>51</td>
      <td>51.731985</td>
      <td>1.435265</td>
    </tr>
    <tr>
      <th>17971</th>
      <td>M. Najjar</td>
      <td>Australia</td>
      <td>Melbourne City FC</td>
      <td>51</td>
      <td>51.035541</td>
      <td>0.069688</td>
    </tr>
    <tr>
      <th>18013</th>
      <td>W. Møller</td>
      <td>Denmark</td>
      <td>Esbjerg fB</td>
      <td>51</td>
      <td>50.796960</td>
      <td>-0.398118</td>
    </tr>
    <tr>
      <th>18062</th>
      <td>Gao Dalun</td>
      <td>China PR</td>
      <td>Jiangsu Suning FC</td>
      <td>50</td>
      <td>49.677371</td>
      <td>-0.645259</td>
    </tr>
    <tr>
      <th>18094</th>
      <td>M. Al Dhafeeri</td>
      <td>Saudi Arabia</td>
      <td>Al Batin</td>
      <td>50</td>
      <td>51.553964</td>
      <td>3.107928</td>
    </tr>
    <tr>
      <th>18063</th>
      <td>R. Hackett-Fairchild</td>
      <td>England</td>
      <td>Charlton Athletic</td>
      <td>50</td>
      <td>50.140762</td>
      <td>0.281524</td>
    </tr>
    <tr>
      <th>18028</th>
      <td>D. Asonganyi</td>
      <td>England</td>
      <td>Milton Keynes Dons</td>
      <td>50</td>
      <td>50.349896</td>
      <td>0.699792</td>
    </tr>
    <tr>
      <th>18140</th>
      <td>K. Hawley</td>
      <td>England</td>
      <td>Morecambe</td>
      <td>49</td>
      <td>49.787332</td>
      <td>1.606799</td>
    </tr>
    <tr>
      <th>18166</th>
      <td>N. Ayéva</td>
      <td>Sweden</td>
      <td>Örebro SK</td>
      <td>48</td>
      <td>48.802935</td>
      <td>1.672781</td>
    </tr>
    <tr>
      <th>18177</th>
      <td>R. Roache</td>
      <td>Republic of Ireland</td>
      <td>Blackpool</td>
      <td>48</td>
      <td>49.226015</td>
      <td>2.554197</td>
    </tr>
    <tr>
      <th>18200</th>
      <td>J. Young</td>
      <td>Scotland</td>
      <td>Swindon Town</td>
      <td>47</td>
      <td>48.019387</td>
      <td>2.168908</td>
    </tr>
  </tbody>
</table>
<p>538 rows × 6 columns</p>
</div>



Is that amazing? With the result, you're confident to use this model to estimate the overall ratings of any soccer player in the world! 

Now let's do some plotting to visualize it.  


```python
# Plot outputs
plt.scatter(range(0,y_test.shape[0]), y_test,  color='blue', label="Actual")
plt.plot(range(0,y_test.shape[0]), y_pred, color='red', label="Predicted")

# add ticks, labels, legend
plt.xticks(())
plt.xlabel("Players (Sorted by Actual Overall ratings)")
plt.ylabel("Overall ratings")
plt.legend(loc='upper right')
plt.show()
```


![png](output_27_0.png)


## Conclusion

Well done! You did it!

Next, you can play with this dataset a little bit.
- Try to select players in another position, i.e., goalkeeper ("GK"), what features will be the top correlated ones? what will be the features you selected? 
- Change the features you selected, will it change the model prediction results?
- Change the ratio of training/testing data, see what will happen.
- Change the target variable, for example, 'Value' or 'Wage'. Try to figure out how to convert the content to numerical value (hint: 50k = 50 * 1000, 10M = 10 * 1000 * 1000.

In today's class, you learned how to train a linear regression model to estimate the overall ratings of a soccer player. We hope you enjoyed it and have inspired a little. 

From now, you can explore the [kaggle](http://kaggle.com) website, try to find another dataset to play. Apply linear regression to predict/estimate the results. You'll be amazed by what you can be done.
