# CRUD 


## ➕ CREATE

### 📘 Descripción general:

Las operaciones de **inserción** permiten **agregar documentos nuevos** a una colección.
MongoDB ofrece métodos para insertar **un solo documento** o **varios documentos** al mismo tiempo.

### 📌 Sintaxis:

```javascript
db.collection.insertOne(documento, opciones);
db.collection.insertMany([documentos], opciones);
```

### Buenas prácticas en CREATE

- ✅ Deja que MongoDB genere automáticamente el `_id` salvo que tengas un motivo claro para definirlo.
- 🚫 Evita usar `insert()`, está obsoleto.
- ⚡ Usa `insertMany()` para grandes volúmenes de datos, es más eficiente.

---

## 🔍 READ (GET)

### 📘 Descripción general:

Las operaciones de **lectura** permiten **consultar documentos** en una colección.
MongoDB provee diferentes métodos para recuperar documentos completos o filtrados.

### 📌 Sintaxis:

                      IF
```javascript
//*                ¿QUIEN?   ¿QUE campos?
db.collection.find(filtro, proyección);
db.collection.findOne(filtro, proyección);
```

db.estudiantes.findOne({ nombre: "Ana"});

db.estudiantes.findOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb7")});


### PROYECCIONES   - filtro de que campos vamos a requerir
db.estudiantes.find({ curso: "Arte"}, {nombre:1, edad:1, _id:0})


### Concatenar métodos

db.estudiantes.find().limit(2).skip(1)

db.estudiantes.find().skip(10)

Paginas
db.estudiantes.find().skip().limit(10)

db.estudiantes.find().skip(10).limit(10)

db.estudiantes.find().skip(20).limit(10)
---

db.estudiantes.countDocuments({ curso: "Arte" });


###  Buenas prácticas en READ

- ✅ Usa **filtros específicos** para mejorar el rendimiento.
- 🔍 Crea **índices** en campos de búsqueda frecuente (`createIndex`).
- ⚡ Evita traer demasiados datos, combina `limit()` y `projection`.


---

## 🔄 UPDATE

### 📘 Descripción general:

Las operaciones de actualización permiten **modificar documentos existentes** en una colección. Se puede actualizar **un solo documento** o **varios documentos**.

### 📌 Sintaxis:

```javascript
db.collection.updateOne(filtro, actualización, opciones);
db.collection.updateMany(filtro, actualización, opciones);
```


- `filtro`: determina qué documentos serán actualizados (igual que en `find()`).
- `actualización`: define los cambios a aplicar usando **operadores de actualización**.
- `opciones`: como `upsert`, que inserta un documento si no existe.

---

### 🎯 Principales operadores de actualización:

| Operador  | Descripción                                              |
| --------- | -------------------------------------------------------- |
| `$set`    | Establece el valor de un campo.                          |
| `$unset`  | Elimina un campo del documento.                          |
| `$inc`    | Incrementa (o decrementa) el valor numérico de un campo. |
| `$rename` | Cambia el nombre de un campo.                            |
| `$min`    | Establece un valor mínimo si el actual es mayor.         |
| `$max`    | Establece un valor máximo si el actual es menor.         |
| `$mul`    | Multiplica el valor numérico de un campo.                |



db.estudiantes.updateOne({nombre:"Ana"}, {$set:{curso:"Arte", altura: 2}});
db.estudiantes.updateOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")}, {$set:{apellido:"O'nell"}});

db.estudiantes.updateOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")}, { $inc: { edad: 1 }});

db.estudiantes.updateOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")},  {$unset: {  altura: "" }});

db.estudiantes.updateOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")}, { $rename: { edad: "age" }});
---


db.estudiantes.updateMany({ curso: "Arte" }, { $set: { edad: 101 } });

### Buenas prácticas en UPDATE

- ⚠️ **No uses `update()`**, está obsoleto. Usa `updateOne()` o `updateMany()`.
- ✅ Usa `$set` para evitar sobrescribir campos no mencionados.
- 🛠 Usa `upsert` para insertar si no existe, pero asegúrate de no duplicar por error.
- 🔍 Antes de actualizar, puedes verificar con `find()` qué documentos serán afectados.


---

## 🗑️ DELETE  - NO DELETE -> SOFT o borrado lógico

### 📌 Métodos principales:

| Método               | Descripción                                                 |
| -------------------- | ----------------------------------------------------------- |
| `deleteOne(filtro)`  | Elimina el **primer documento** que coincida con el filtro. |
| `deleteMany(filtro)` | Elimina **todos los documentos** que coincidan.             |
| `drop()`             | Elimina toda la colección. ⚠️ Irreversible                  |

---


### ✅ Ejemplos prácticos

```javascript
//* Eliminar un documento por ID
db.estudiantes.deleteOne({ _id: ObjectId("60f8a3d9fc13ae2d3c000001") }); //* OK
```

```javascript
//* Eliminar el primer documento con nombre "Sara"
db.estudiantes.deleteOne({ nombre: "Sara" });   //!   X MAL
```

```javascript
//* Eliminar múltiples documentos por campo
db.estudiantes.deleteMany({ cursa: "Arte" });  //! Medio Mal 
```

```javascript
//* Eliminar todos los documentos
db.estudiantes.deleteMany({});   //! ERROR SUPER ERROR
```

```javascript
//* Eliminar una colección completa
db.estudiantes.drop();  //! ??? mucho cuidado
```


---

[
  {
    _id: ObjectId('68c1885ddbb0ed00f3228fb6'),
    nombre: 'Ana',
    edad: 101,
    curso: 'Arte',
    apellido: "O'nell",
    deleted: false
  },
  {
    _id: ObjectId('68c1885ddbb0ed00f3228fb7'),
    nombre: 'Pedro',
    edad: 101,
    curso: 'Arte',
    deleted: false
  },
  { _id: 'A100', 
  nombre: 'Luis', 
  edad: 101, 
  curso: 'Arte',
  deleted: false
   }
]

---


### SUPER DELETE UPDATE query

- Quiero eliminar a 'Ana'

1. Buscar a Ana con su ID (único)
db.estudiantes.findOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")});
2. Si Ana existe editamos el campo soft delete
db.estudiantes.updateOne({ _id: ObjectId("68c1885ddbb0ed00f3228fb6")}, {$set:{deleted:true}});


# OPERADORES y MÁS

use colegio
db.createCollection("estudiantes")

## Create 
db.estudiantes.insertOne({ nombre: 'Juan', apellido: 'Pérez', curso: 'Matemáticas', edad: 15, correo: 'ma@gmail.com', sexo: 'H' })
db.estudiantes.insertMany([{ nombre: 'Ana', apellido: 'García', curso: 'Física', edad: 16, correo: 'me@gmail.com', sexo: 'M' }, { nombre: 'Luis', apellido: 'Martínez', curso: 'Química', edad: 17, correo: 'mi@gmail.com', sexo: 'H' }, { nombre: 'María', apellido: 'Gómez', curso: 'Biología', edad: 18, correo: 'mo@gmail.com', sexo: 'M' }, { nombre: 'Pedro', apellido: 'Jiménez', curso: 'Historia', edad: 19, correo: 'mu@gmail.com', sexo: 'H' }, { nombre: 'Sofía', apellido: 'López', curso: 'Geografía' }])

## Read

db.estudiantes.find();
db.estudiantes.find({ sexo: 'H' });
db.estudiantes.countDocuments();
db.estudiantes.find({ sexo: 'M' }).count();
db.estudiantes.find({ sexo: 'H' }).count();

### OPERADORES

```javascript
//* Operador $eq
db.estudiantes.find({ edad: { $eq: 20 } }); // ===

//* Operador $gt
db.estudiantes.find({ edad: { $gt: 20 } }); //  <

//* Operador $gte
db.estudiantes.find({ edad: { $gte: 20 } }); // <=

//* Operador $lt
db.estudiantes.find({ edad: { $lt: 20 } });

//* Operador $lte
db.estudiantes.find({ edad: { $lte: 20 } });

//* Operador $ne
db.estudiantes.find({ edad: { $ne: 20 } }); // !=

//* Operador $in
db.estudiantes.find({ edad: { $in: [20, 21] } });

//* Operador $nin
db.estudiantes.find({ edad: { $nin: [20, 21] } });

//* Operador $or
db.estudiantes.find({ $or: [{ edad: 20 }, { edad: 21 }] });

//* Operador $and
db.estudiantes.find({ $and: [{ edad: 20 }, { sexo: 'H' }] });

//* Operador $not
db.estudiantes.find({ edad: { $not: { $eq: 20 } } });

//* Operador $nor
db.estudiantes.find({ $nor: [{ edad: 20 }, { edad: 21 }] });
// este operador devuelve los documentos que no cumplen con ninguna de las condiciones

//* Operador $exists
db.estudiantes.find({ correo: { $exists: true } });
// devuelve los documentos que tienen el campo correo

//* Operador $type
db.estudiantes.find({ edad: { $type: 'number' } });
// devuelve los documentos que tienen el campo edad de tipo number

//* Operador $regex
db.estudiantes.find({ nombre: { $regex: '^J' } });
// devuelve los documentos cuyo nombre empieza con J

//* Operador $text
db.estudiantes.find({ $text: { $search: 'Matemáticas' } });
// devuelve los documentos que contienen la palabra Matemáticas

//* Operador $where
db.estudiantes.find({ $where: 'this.edad > 20' });
// devuelve los documentos cuya edad es mayor a 20

//* Operador $elemMatch
db.estudiantes.find({ cursos: { $elemMatch: { $eq: 'Matemáticas' } } });
// devuelve los documentos que tienen el curso Matemáticas en el array cursos

//* Operador $size
db.estudiantes.find({ cursos: { $size: 2 } });
// devuelve los documentos que tienen 2 elementos en el array cursos

//* Operador $all
db.estudiantes.find({ cursos: { $all: ['Matemáticas', 'Física'] } });
// devuelve los documentos que tienen los cursos Matemáticas y Física en el array cursos
// este all es similar al operador and

//* Operador $mod
db.estudiantes.find({ edad: { $mod: [2, 0] } });
// devuelve los documentos cuya edad es divisible por 2


//* --- CONTIENE (sub-string) ---
//* Operador tipo ILIKE (case insensitive) en MongoDB, es $regex
db.estudiantes.find({ nombre: { $regex: 'ana', $options: 'i' } });
// devuelve los documentos cuyo nombre contiene ana, sin importar si es mayúscula o minúscula
// y $options: 'i' es para que sea case insensitive, ya que por defecto es case sensitive
```



- Ordenamiento 
db.estudiantes.find().sort({ nombre: 1 });  ->  1 ASC   -1 DESC 
db.estudiantes.find().sort({ edad: -1 }); 

- Skip - saltar 
db.estudiantes.find().skip(2);

- Limit 
db.estudiantes.find().limit(3);


- Idea de un paginado simple
skip(0).limit(10)   skip(10).limit(10)   skip(20).limit(10)   skip(30).limit(10)  


---


## Update
Las operaciones Update se pueden realizar de dos maneras: Actualizar un documento, o actualizar múltiples documentos. 
db.collection.updateOne(query,update,option)
query: sirve para filtrar qué elementos actualizar (usa los filtros iguales al find)
update: Apartado para indicar qué actualizar de los documentos que cumplen con el filtro. Update tiene sus propios operadores como $set, $unset, $inc, $rename, $mul, $min, $max
option: Opciones a tomar en cuenta para la actualización (como upsert, que inserta el valor en caso de que el documento a actualizar ni siquiera exista).

```js
db.estudiantes.updateOne({ nombre: 'Sara' }, { $set: { apellido: 'Gómez', curso: 'Biología', edad: 25, correo: 'ne@gmail.com', sexo: 'M' } });

db.estudiantes.updateMany({ edad: 20 }, { $set: { edad: 101 } });

db.estudiantes.updateMany({ edad: 19 }, { $set: { edad: 101 } });
//* Actualizar un documento con $inc
db.estudiantes.updateOne({ nombre: 'Sara' }, { $inc: { edad: 1 } });
// Incrementa la edad de Sara en 1


//* ¿???? Modificamos el nombre de las KEY
//* Actualizar un documento con $rename
db.estudiantes.updateOne({ nombre: 'Sara' }, { $rename: { correo: 'email' } });
// Renombra el campo correo a email


//* Actualizar un documento con $unset
db.estudiantes.updateOne({ nombre: 'Sara' }, { $unset: { email: '' } });
// Elimina el campo email

//* Actualizar un documento con $min
db.estudiantes.updateOne({ nombre: 'Sara' }, { $min: { edad: 18 } });
// Si la edad de Sara es menor a 18, la actualiza a 18

```


## DELETE

Nuestra última operación es para eliminar datos, si bien hay muchas variantes de una eliminación, sólo veremos las dos principales.

db.collection.deleteOne({key:val}) : Elimina sólo el primer elemento que cumpla con el criterio, se usa principalmente para encontrar identificadores específicos. Se recomienda no utilizar si somos conscientes de que el valor a buscar no es repetido.
db.collection.deleteMany({key:val}) :  Elimina todos los documentos que cumplan con el criterio, se usa cuando sabemos que más de un valor va a contar con ese valor y necesitamos hacer una limpieza general.

```javascript

db.estudiantes.deleteOne({ _id: ObjectId('432423523534') });  // <---
//* Eliminar un documento
db.estudiantes.deleteOne({ nombre: 'Sara' }); // elimina uno al primero que encuentre

//* Eliminar múltiples documentos
db.estudiantes.deleteMany({ sexo: 'M' });

//* Eliminar todos los documentos
db.estudiantes.deleteMany({});

//* Eliminar una colección
db.estudiantes.drop();
```


# PROYECCIONES
                   query       PROYECCION
db.estudiantes.find({}, { nombre: 1, apellido: 1 });

db.estudiantes.find({}, { email: 0});


---


db.dropDatabase()


---

# DELETE a como se hace en el desarrollo actual
## SOFT DELETE - BANEO
```javascript
db.estudiantes.updateOne({ _id: ObjectId('432423523534') }, { $set: { active: false} });
```
