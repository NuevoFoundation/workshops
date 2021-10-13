---
title: "3. Scripts Explained"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 4
---

Before we begin with making Nuvi move, let's first explain the structure of a Unity script. An empty Unity Script will look like this:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EmptyScript : MonoBehaviour
{
   void Start()
   {
   }

   void Update()
   {
   }
}
```

Each new script will have the first 3 lines that start with "using…". These lines are needed for Unity to be able to use this newly created script, so we generally leave these lines of code alone. The next line that starts with "public class 'script_name'" is needed for Unity to access this specific script.

{{< notice note >}}
Make sure the name of the script matches the 'script_name'! If you decide to change the name of the script outside the script, it does not update the line of code containing the script name, so make sure to go back in and update it or the game won't run!
{{< /notice >}}

Each script has two pre-made methods.

**void Start()**: This method is called only once when the script is initially called. It is usually used to initialize variables we may need throughout the script.

**void Update()**: This method is called every frame and is usually used when we want to change a game behavior.

There exists another method we will be using to make Nuvi move called void FixedUpdate().

**void FixedUpdate()**: This method is called less frequently than Update(), but is best used when dealing with physics for smoother movement, such as when using Rigidbody.

There will be other functions from the Unity library we will be using later, but for now this is all you need to know!
