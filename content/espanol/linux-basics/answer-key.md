---
title: "Clave de Respuestas - Fundamentos de Linux"
description: "Respuestas de las actividades"
date: 2022-09-23
difficulties: ["intermedio"]
hidden: true
draft: true
weight: 15
---

### Actividad 1

```
whoami
```

### Actividad 2

```
pwd
cd Desktop
cd..
```

### Actividad 3

```
ls -l
mv Documents/ Downloads/
ls -l Downloads
mv Downloads/Documents/ .
```

### Actividad 4

```
mkdir files
touch file1
vim file1
mv file1 files
```

### Actividad 5

```
chmod u=rwx g=rx o=x file1
chmod 751 [insertar nombre del archivo]
```

### Actividad 6

```
cd
grep -R "Do. Or do not. There is no try."
find . -name *.sh
```

### Actividad 7

```
head -n 5 malware.sh
tail -n 5 malware.sh
cat malware.sh
more malware.sh
less malware.sh
```

### Actividad 8

```
find . -name *.txt
grep -R "Do. Or do not. There is no try."
ls -la
diff malware.sh secret-message.txt
vimdiff malware.sh secret-message.txt
```

### Actividad 9

```
rm Downloads/malware.sh
rm files
mkdir files
```

### Actividad 10

```
mv secret-message.txt .
ls -l
cp secret-message.txt file1
ls
cd files
cp secret-message.txt file1
ls -l
```

### Actividad 11

```
tar -f files.tar.gz
```