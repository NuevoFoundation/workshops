---
title: "Жооптор Тизмеги - Linux Негиздери"
description: "Иш-чаралар боюнча жооптор"
date: 2022-09-23
difficulties: ["ортача"]
hidden: true
draft: true
weight: 15
---

### Иш-аракет 1

```
whoami
```

### Иш-аракет 2

```
pwd
cd Desktop
cd..
```

### Иш-аракет 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Иш-аракет 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Иш-аракет 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insert filename]
```

### Иш-аракет 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Иш-аракет 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Иш-аракет 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Иш-аракет 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Иш-аракет 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Иш-аракет 11

```
tar -f files.tar.gz
```