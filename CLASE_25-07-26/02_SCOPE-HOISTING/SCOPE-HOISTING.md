# SCOPE y HOISTING

## ¿Qué es el **Scope** en JavaScript?

**Scope** es el **alcance** en el que una variable está disponible para ser usada.

### Tipos principales de scope:

1. **Global Scope** (Ámbito global):
   Una variable declarada **fuera** de cualquier función o bloque.

2. **Function Scope** (Ámbito de función):
   Una variable declarada **dentro** de una función solo existe dentro de esa función.

3. **Block Scope** (Ámbito de bloque):
   Las variables declaradas con `let` o `const` dentro de `{}` solo existen dentro de ese bloque.

---

### 🟢 Ejemplo 1: Global Scope

```js
let nombre = "Mauricio"; // Variable global

function saludar() {
  console.log("Hola " + nombre); // puede acceder a 'nombre'
}

saludar(); // Hola Mauricio
console.log(nombre); // Mauricio
```

---

### 🟡 Ejemplo 2: Function Scope

```js
function saludar() {
  let mensaje = "Hola desde la función";
  console.log(mensaje);
}

saludar(); // Hola desde la función
console.log(mensaje); // ❌ Error: mensaje is not defined
```

> `mensaje` está definida **solo dentro de la función**, por eso no se puede usar afuera.

---

### 🔴 Ejemplo 3: Block Scope

```js
if (true) {
  let mensaje = "Estoy en un bloque";
  console.log(mensaje); // OK
}

console.log(mensaje); // ❌ Error: mensaje is not defined
```

> `let` y `const` tienen **scope de bloque**. No pasa con `var`, que veremos abajo.

---

### ⚠️ `var` NO respeta el bloque

```js
if (true) {
  var mensaje = "Soy var";
  console.log(mensaje); // Soy var
}

console.log(mensaje); // ✅ Soy var
```

> Las variables con `var` **no tienen block scope**, sólo function scope o global scope.

---

## 🔁 ¿Qué es el **Hoisting**?

**Hoisting** significa que las **declaraciones** de variables y funciones se **elevan al comienzo** de su scope **en tiempo de compilación**, aunque no sus asignaciones.

---

### 🔵 Ejemplo 1: Hoisting con `var`

```js
console.log(nombre); // undefined (no error)
var nombre = "Mauricio";
```

El motor lo interpreta así:

```js
var nombre;
console.log(nombre); // undefined
nombre = "Mauricio";
```

---

### 🔴 Hoisting con `let` y `const`

```js
console.log(nombre); // ❌ Error: Cannot access 'nombre' before initialization
let nombre = "Mauricio";
```

> `let` y `const` también son "hoisted", **pero no inicializadas**. Están en la **"zona muerta temporal" (TDZ)** hasta que se llega a su línea de declaración.

---

### 🟢 Hoisting con funciones

```js
saludar(); // "Hola!"

function saludar() {
  console.log("Hola!");
}
```

✅ Las **declaraciones de funciones** son elevadas **completamente**, así que funcionan antes de ser escritas.

---

### 🔴 No se puede con funciones flecha (arrow)

```js
saludar(); // ❌ Error: Cannot access 'saludar' before initialization

const saludar = () => {
  console.log("Hola!");
};
```

> Las funciones flecha se comportan como `const` → **No se puede usarlas antes de declararlas**.

---

## ✅ Resumen rápido

| Concepto        | ¿Qué significa?                                                        |
| --------------- | ---------------------------------------------------------------------- |
| Scope           | Alcance donde una variable está disponible (global, función o bloque). |
| Hoisting        | JavaScript "eleva" las declaraciones de variables y funciones.         |
| `var`           | Hoisted + function scope (no respeta los bloques).                     |
| `let` y `const` | Hoisted pero no inicializadas + block scope.                           |
| Funciones       | Declaraciones de funciones son hoisted completamente.                  |

---

