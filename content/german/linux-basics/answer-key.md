---
title: "Antwortschlüssel - Linux Grundlagen"
description: "Antworten zu den Aktivitäten"
date: 2022-09-23
difficulties: ["fortgeschritten"]
hidden: true
draft: true
weight: 15
---

### Aktivität 1

```
whoami
```

### Aktivität 2

```
pwd
cd Desktop
cd..
```

### Aktivität 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Aktivität 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Aktivität 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insert filename]
```

### Aktivität 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Aktivität 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Aktivität 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Aktivität 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Aktivität 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Aktivität 11

```
tar -f files.tar.gz
```