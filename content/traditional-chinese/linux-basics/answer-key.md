---
title: "答案鍵 - Linux 基礎"
description: "活動答案"
date: 2022-09-23
difficulties: ["中級"]
hidden: true
draft: true
weight: 15
---

### 活動 1

```
whoami
```

### 活動 2

```
pwd
cd Desktop
cd..
```

### 活動 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### 活動 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### 活動 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insert filename]
```

### 活動 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### 活動 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### 活動 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### 活動 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### 活動 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### 活動 11

```
tar -f files.tar.gz
```