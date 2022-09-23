---
title: "Resoluções - Curso Básico de Linux"
description: "Resoluções de todos os exercícios"
date: 2022-09-22
difficulty: "Intermediário"
weight: 5
---

### Atividade 1

```
whoami
```

### Atividade 2

```
pwd
cd Desktop
cd..
```

### Atividade 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Atividade 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Atividade 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insert filename]
```

### Atividade 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Atividade 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Atividade 8

```
find . -name *.txt
grep -R "Ser. Ou não ser. Eis a questão."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Atividade 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Atividade 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Atividade 11

```
tar -f files.tar.gz
```
