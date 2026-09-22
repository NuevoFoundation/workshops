---
title: "3-кадам: Маалымат топтомун жүктөө"
description: "Машиналык үйрөнүүнүн негиздери"
prereq: "жоок"
difficulties: ["орточо"]
draft: false
weight: 3
---

`mypath` маанисин, маалымат топтомунун файлдарын чыгарган папкаңызга өзгөртүңүз (мисалы, `C:\fifa_dataset\`). Аны ийгиликтүү жүктөгөнүбүздү текшерүү үчүн, анын статистикаларын басып чыгарууга арналган `describe()` аттуу функцияны колдонобуз.

```python
# маалымат топтомдорун жүктөө
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # бул жерге өзүңүздүн жолуңузду коюңуз
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # маалымат топтомдорун жүктөө
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # бул жерге өзүңүздүн жолуңузду коюңуз
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined