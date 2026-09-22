```markdown
---
title: "Problème 1 : Concepts de base de HashMap"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## Tâche 1 : Utiliser Hashmap pour organiser les données

C'est une fête ! Un client organise une grande fête d'anniversaire pour plus de 20 personnes ! Chacun a sa propre commande. Pour garder les commandes bien organisées, vous décidez de créer un hashmap de `String`. La fille qui fête son anniversaire s'appelle Isabella, mais son nom s'est perdu dans la liste. Pouvez-vous découvrir ce qu'Isabella a commandé ?

{{% notice tip %}}
1. Vous souvenez-vous des méthodes de hashmap ?
2. Regardez l'exemple de commande ci-dessous !
{{% /notice%}}

```js javascript
// Exemple du hashmap actuel
HashMap<String, String> order = new HashMap<String, String>();

//clé, valeur
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/HashMapGet" target="_blank">Lancer Replit</a>
```