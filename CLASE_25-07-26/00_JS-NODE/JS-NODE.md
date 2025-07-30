# JAVASCRIPT - NODE (y diferencia entre frontend y backend)

# NODE
- Entorno de tecnologías 
 - Interprete de JS - V8 (motor)
 - Tech dev Async 

## 💻 ¿Qué es **JavaScript (JS)**?

**JavaScript** es un **lenguaje de programación** que originalmente fue creado para darle interactividad a las páginas web.

- Lenguaje
- Sincrónico en un solo hilo
- tipado débil 
- Es prototipado (chain) - funciones | POO (CLASES)
- Interpretado | vs Compilado | vs Transpilado (js nuevo a un js antiguo (mas neutro) - Babel webPack)
      JAVA - GO etc -> test.exe -> ahi si interpreta


- ...

### 🔹 ¿Dónde se usa?

* En el **navegador** (frontend) para hacer sitios dinámicos.
* En el **servidor** (backend) gracias a herramientas como **Node.js**.

### 🔹 ¿Qué puede hacer en el navegador?

* Manipular el HTML y CSS.
* Detectar eventos como clics o teclas.
* Hacer animaciones.
* Enviar y recibir datos con servidores (AJAX/fetch).

### 🧩 Ejemplo simple de JavaScript en HTML:

```html
<button onclick="saludar()">Saludar</button>

<script>
  function saludar() {
    alert("¡Hola desde JavaScript!");
  }
</script>
```

---

## ⚙️ ¿Qué es **Node.js**?

**Node.js** es un **entorno de ejecución de JavaScript en el servidor**.

> Permite usar JavaScript **fuera del navegador**, por ejemplo, para crear servidores, APIs, procesar archivos, conectarse a bases de datos, etc.

Fue creado usando el motor **V8 de Chrome**, que traduce JS a código máquina.

### 🔹 ¿Qué se puede hacer con Node.js?

* Crear servidores web (Express.js).
* Leer y escribir archivos.
* Trabajar con bases de datos.
* Desarrollar herramientas como linters o test runners.

### 🧩 Ejemplo simple con Node.js:

```js
// archivo: app.js
console.log("Hola desde Node.js");
```

```bash
# Ejecutar en terminal
node app.js
```

---

## 🌐 Diferencia entre **Frontend** y **Backend**

| Parte        | ¿Qué es?                                                            | Tecnologías comunes                 |
| ------------ | ------------------------------------------------------------------- | ----------------------------------- |
| **Frontend** | Lo que el usuario **ve** y con lo que **interactúa** (interfaz).    | HTML, CSS, JavaScript, React, Vue   |
| **Backend**  | Lo que pasa en el **servidor** (lógica, bases de datos, seguridad). | Node.js, Express, Python, Java, SQL |

### 🧩 Ejemplo:

* En una tienda online:

  * El **frontend** muestra los productos y botones.
  * El **backend** guarda los datos, hace los cálculos y responde a las solicitudes.

---

## 🎯 Diferencias entre **JavaScript y Node.js**

| JavaScript puro                        | Node.js                                               |
| -------------------------------------- | ----------------------------------------------------- |
| Corre en el navegador.                 | Corre en el servidor (usando V8).                     |
| Tiene acceso al DOM.                   | No tiene DOM, pero sí acceso al sistema.              |
| Se usa en frontend.                    | Se usa principalmente en backend.                     |
| No puede acceder a archivos o puertos. | Puede leer archivos, abrir sockets, crear servidores. |

---

## ✅ Resumen final

* **JavaScript**: Lenguaje que corre en el navegador (y gracias a Node.js, también en el servidor).
* **Node.js**: Herramienta que permite usar JavaScript en el **backend**.
* **Frontend**: Parte visual de una app/web.
* **Backend**: Parte lógica que procesa, guarda y responde a la información.

---

