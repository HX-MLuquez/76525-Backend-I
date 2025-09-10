show dbs

use escuela   crea y/o conecta a la db escuela

db.createCollection("alumnos")

db.alumnos.insertMany([
  { nombre: "Juan", apellido: "Pérez", curso: "Matemáticas", correo: "juan.perez@example.com" },
  { nombre: "María", apellido: "Gómez", curso: "Historia", correo: "maria.gomez@example.com" },
  { nombre: "Luis", apellido: "Martínez", curso: "Ciencias", correo: "luis.martinez@example.com" },
  { nombre: "Ana", apellido: "López", curso: "Literatura", correo: "ana.lopez@example.com" },
  { nombre: "Carlos", direccion: "soy un loco de los datos" }
])


db.alumnos.find()
db.alumnos.find().pretty()


db.alumnos.find().count()

db.alumnos.countDocuments()
db.alumnos.estimatedDocumentCount() 



Descanso de 10 min -> 21:59


db.pets.insertOne( { nombre: "Boby", edad: 2 })
{
_id: "68c17ff6eb7dc449c1228fb5"
nombre: "Boby"
edad: 2
}


userJohn
 {
    _id: ObjectId('6851feaab58e903c03f1e0e1'),
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    password: '$2b$10$vlEYhEdQhX0v9VXBKSeRLuFnl.5Kpf2tBbLxs3vakg5la/C7GXISO',
    role: 'user',
    pets: [],

userJohn.pets.push({_id: "68c17ff6eb7dc449c1228fb5"})

userJohn
 {
    _id: ObjectId('6851feaab58e903c03f1e0e1'),
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    password: '$2b$10$vlEYhEdQhX0v9VXBKSeRLuFnl.5Kpf2tBbLxs3vakg5la/C7GXISO',
    role: 'user',
    pets: [{_id: "68c17ff6eb7dc449c1228fb5"}],