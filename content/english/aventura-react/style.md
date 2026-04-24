---
title: "Apply the required styles!"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---

**This is CSS code for the app, copy and paste it into the file** `"style.css"`

{{% notice info %}}
### What does CSS do?
CSS (Cascading Style Sheets) controls how your application **looks**: the colors, shapes, sizes, and animations. Without CSS, your app would work the same but would look like plain unstyled text.

Each section below styles a different component of your Costa Rica app.
{{% /notice %}}


```css 
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  font-family: "Comic Sans MS", "Poppins", sans-serif;
  background-color: white;
}

.App h1 {
  font-size: 2.5rem;
  color: #00796b;
  margin-bottom: 20px;
}

.mensaje-final {
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  animation: aparecer 1s ease-in-out;
}



/*-----------------------------TORTUGERO---------------------------------------*/
.Tortugero {
  padding: 50px;
  background: linear-gradient(135deg, #a2f5a2, #b3e5fc);
  border-radius: 20px;
  text-align: center;
  font-family: "Comic Sans MS", cursive;
  color: #084c31;
  transition: 0.3s;
}


.Tortugero button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: 0.3s;
}

.Tortugero button:hover {
  background-color: #1c86ee;
  transform: scale(1.1);
}

.exito {
  font-weight: bold;
  color: #3d6088;
  margin-top: 10px;
}
/*-----------------------------CIERE TORTUGERO---------------------------------------*/

/*-----------------------------VOLCAN---------------------------------------*/
.volcan {
  margin-top: 50px;
  text-align: center;
  background-color: #ffe5b4;
  padding: 30px;
  border-radius: 15px;
  font-family: "Comic Sans MS", cursive;
  color: #3e2f00;
}

.volcan ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.volcan li {
  margin: 10px 0;
  font-size: 18px;
}

.volcan button {
  margin-left: 10px;
  background-color: #ff7043;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.3s;
}

.volcan button:hover {
  background-color: #ff5722;
  transform: scale(1.1);
}

/*-----------------------------PEREZOSOS---------------------------------------*/
.perezosos-container {
  margin-top: 40px;
  padding: 40px;
  background: rgba(205, 0, 0, 0.623);
  border-radius: 12px;
  font-family: "Comic Sans MS", cursive;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.instruccion {
  margin-bottom: 20px;
  font-size: 1rem;
}

.lista-perezosos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.perezoso-card {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px 25px;
  border-radius: 10px;
  width: 150px;
  transition: transform 0.2s ease, background-color 0.3s;
}

.perezoso-card:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.3);
}

.perezoso-card button {
  background-color: #fefae0;
  color: #5c3d2e;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
}

.perezoso-card button:hover {
  background-color: #f8de7e;
}

.rescatado {
  background-color: rgba(110, 220, 110, 0.6);
  color: #ffffff;
  transform: scale(1.05);
}


@keyframes aparecer {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}


/*-----------------------------PLAYAS---------------------------------------*/
.playas-container {
  margin-top: 40px;
  padding: 40px;
  background: linear-gradient(
    180deg,
    rgba(243, 232, 111, 0.7),
    rgba(135, 206, 235, 0.5)
  );
  color: black;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Comic Sans MS", cursive;
}

.instruccion {
  font-size: 1rem;
  margin-bottom: 20px;
}

.botones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.playas-container button {
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #00b894;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.1s ease, background-color 0.2s;
}

.playas-container button:hover {
  background-color: #019874;
  transform: scale(1.05);
}



@keyframes aparecer {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/*---------------------------------------FIN DE PLAYAS-------------------------*/

.finca-container {
  text-align: center;
  background-color: #e3d5ca;
  padding: 20px;
  border-radius: 12px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  max-width: 400px;
  margin: 30px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.etapa {
  font-size: 1.3rem;
  margin: 20px 0;
}

.btn-siguiente {
  padding: 10px 20px;
  background-color: #8b5e3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btn-siguiente:hover {
  background-color: #a47148;
}
