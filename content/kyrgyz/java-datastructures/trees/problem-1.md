```markdown
---
title: "Маселе 1: Бутактардын Негизги Оюндары"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
---

## Тапшырма 1: Бинардык дарактын ичинде маани табуу

Эми дарак аркылуу кыймылдап өтүүнүн негиздерин билгенден кийин, мурунку баракта айтылган процесс (же алгоритм) негизинде бинардык издөө ишке ашырыңыз. Бул жерде тез эскертүү:
* Эгер учурдагы маани сиз издегенден кичине болсо, оң жактагы түйүнгө өтүңүз.
* Эгер учурдагы маани сиз издегенден чоң болсо, сол жактагы түйүнгө өтүңүз.
* Эгер учурдагы маани сиз издеген маани менен дал келсе, сиз ишти бүтүрдүңүз!

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="Маселе 1: Дарактардын Негизги Оюндары - Replit редактору" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "СПОЙЛЕР: Эгер чечүү жолун көрүшүңүз керек болсо, бул жерди басыңыз!" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // Биз дарактын тамырынан баштайбыз
    Node current = root;

    // Биз мурун айтылган логиканы колдоном
    while (current.value != value) {
        System.out.println("учурдагы маани: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // Эгер бул жерге жетсек, туура маани табылган түйүнгө келдик!
    return current;
}
```
{{% /showanswer %}}

### Куттуктайбыз! Эгер сиз ушул жерге чейин келсеңиз, анда бинардык издөө программасын расмий түрдө ишке ашырдыңыз!
```