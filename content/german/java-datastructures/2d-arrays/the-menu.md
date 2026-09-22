---
title: "Das Menü"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" title="The Menu - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Speichern von Restaurantinformationen

Erinnern wir uns an das Restaurant-Array, das wir zuvor im Arrays-Abschnitt erstellt haben. 

![restaurant](../../arrays/img/array2.png)

Wie Sie sehen können, enthält dieses Array alle verschiedenen Restaurants für unsere App. Nun versuchen wir, jedes Restaurant ein Array seiner gesamten Menüelemente enthalten zu lassen. Wenn es richtig gemacht wird, sollte das `0`te Element unseres Arrays, "Burger King", nun seine jeweiligen Menüelemente enthalten. Es könnte so aussehen:

![burgerkingarray](../img/2darray2.png)

Wie Sie sehen können, sollte das `0`te Element unser Burger-King-Array sein. Genau wie bei unseren eindimensionalen Arrays verwenden wir Nullindexierung für die Elemente unseres Arrays. Wenn wir einen Whopper bestellen wollten, würden wir einfach `Restaurant[0][0]` aufrufen. Dies würde unser Burger-King-Array und das erste Element dieses Arrays aufrufen, welches ein Whopper ist. Wenn wir Pommes in unserem Array wollten, würden wir `Restaurant[0][2]` aufrufen. 

Frage: Wenn wir Orang-Huhn bestellen wollten und Orang-Huhn das 10. Element unseres Panda-Express-Arrays wäre, wie könnten wir auf dieses Element zugreifen?

Wenn Sie `Restaurant[2][9]` geantwortet haben, dann haben Sie recht! Panda Express ist das dritte Array `[2]`, und Orang-Huhn ist das zehnte Element `[9]`.