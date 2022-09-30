---
title: "Answer Key - Linux Basics"
description: "Activities answers"
date: 2022-09-23
difficulty: "Intermediate"
weight: 15
---

### Activity 1

```
whoami
```

### Activity 2

```
pwd
cd Desktop
cd..
```

### Activity 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Activity 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Activity 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insert filename]
```

### Activity 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Activity 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Activity 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Activity 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Activity 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Activity 11

```
tar -f files.tar.gz
```
