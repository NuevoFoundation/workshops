---
title: "Clé de Réponses - Bases de Linux"
description: "Réponses des activités"
date: 2022-09-23
difficulties: ["intermédiaire"]
hidden: true
draft: true
weight: 15
---

### Activité 1

```
whoami
```

### Activité 2

```
pwd
cd Desktop
cd..
```

### Activité 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Activité 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Activité 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insérer le nom du fichier]
```

### Activité 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Activité 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Activité 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Activité 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Activité 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Activité 11

```
tar -f files.tar.gz
```