---
title: "Step 7: Try the model on testing data"
description: "Basics of Machine Learning"
prereq: "none"
difficulty: "Intermediate"
draft: false
weight: 7
---

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


![Final graph](../images/output_27_0.png)
